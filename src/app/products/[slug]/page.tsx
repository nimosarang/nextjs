import {notFound} from "next/navigation";

type Props = {
  params: {
    slug: string;
  }
}

export default function PantsPage({params}: Props) {
  if (params.slug === 'nothing') {
    notFound();
  }
  return <h1>{params.slug} 제품 설명 페이지!</h1>;
}

export function generateStaticParams() { // 정해져있는 함수명
  const products = ['pants', 'skirt']; // 팬츠랑 스커트에 대해서는 미리 경로를 만들어주고 싶다
  return products.map(product => ({
    slug: product,
  }));
}