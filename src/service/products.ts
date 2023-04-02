import * as path from "path";
import {promises as fs} from "fs";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
}

export async function getProducts(): Promise<Product[]> {

  const filePath = path.join(process.cwd(), 'data','products.json'); //현재 작업중인 디렉토리를 가져온다
  const data = await fs.readFile(filePath, 'utf-8'); //data 디렉토리에 있는 파일을 읽어온다 //fs.readFile 은 promise 를 리턴한다(그래서 비동기함수 만들기 위해 async 붙여줌)
  //프로미스를 데이터에 할당하는게 아니라 프로미스를 기다렸다가 프로미스가 받아온 데이터를 data 에 할당한다
  return JSON.parse(data); //파일을 읽어온 데이터를 json 오브젝트 형태로 파싱해서 리턴한다
}

export async function getProduct(id: string): Promise<Product | undefined> { //사용자가 특정 경로로 갔을 떄, id 즉 slug 를 전달해주면 해당 제품의 객체를 전달해주고싶다
  const products = await getProducts(); //getProducts 함수를 호출해서 products 에 할당한다
  return products.find((item) => item.id === id);
  //item 에서 id 가 일치하는 제품을 찾아서 리턴한다,없으면 find 함수가 undefined 를 리턴한다

}

