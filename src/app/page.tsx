import os from 'os'
import Counter from "@/components/Counter";


export default function Home() {
  console.log('안녕! - 서버')
  console.log(os.hostname());
  return (
      <>
        <h1>홈페이지다! 버전3인데~</h1>;
        <Counter/>
      </>
  )
}