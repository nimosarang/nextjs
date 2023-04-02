import Link from "next/link";
import {getProducts} from "@/service/products";

import MeowArticle from "@/components/MeowArticle";
import React from "react";
import Image from "next/image";
import clothesImage from "../../../public/images/clothes.jpg";

// export const revalidate = 3; // 3초마다 새로고침

export default async function ProductsPage() {
  //서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여주자
  const products = await getProducts();
  return (
      <>
        <h1>제품 소개 페이지!</h1>
        <Image src={clothesImage} alt="clothes" priority/>
        <ul>
          {products.map((product, index) => // map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
          <li key={index}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
          )}
        </ul>
        <MeowArticle/>
      </>
  )
}

