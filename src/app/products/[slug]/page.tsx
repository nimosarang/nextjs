import {getProduct, getProducts} from "@/service/products";
import {notFound, redirect} from "next/navigation";
import GoProductsButton from "@/components/GoProductsButton";
import Image from "next/image";
import React from "react";

export const revalidate = 3; // 3초마다 새로고침

type Props = {
  params: {
    slug: string;
  }
}

export function generateMetadata({params}: Props) {
  return {
    title: `제품의 이름 | ${params.slug}`,
    description: `${params.slug} 제품에 대한 설명입니다.`,
  };
}

export default async function ProductPage({params: {slug}}: Props) { //구조 분해 할당 (Destructuring assignment)
  const product = await getProduct(slug);

  if (!product) {
    redirect("/products");
    // notFound();
  }
  //서버 파일에 있는 데이터 중, 해당 제품의 정보를 찾아서 그걸 보여줌
  return (
      <>
      <h1>{product.name} 제품 설명 페이지!</h1>
        <Image
            src={`/images/${product.image}`}
            alt={product.name}
            width={300}
            height={300}
        />
        <GoProductsButton/>
      </>
  );
}

export async function generateStaticParams() { //서버 컴포넌트 함수(비동기 가능), 비동기(await)로 구현이 된다면 async 붙여주면 됨
                                               // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해둘거임 (SSG)
  const products = await getProducts();
  //promise 가 다 끝나면 해당 값을 기다렸다가(await, 비동기) 값 자체를 products 할당할 수 있도록 만들어줌
  return products.map(product => ({
    slug: product.id,
  }));
}