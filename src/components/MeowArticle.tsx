'use client'
import styles from "./MeowArticle.module.css";
import {useEffect, useState} from "react";

//클라이언트 컴포넌트 만들어봄
export default function MeowArticle() {
  const [text, setText] = useState('데이터 준비중...'); //MeowArticle 은 text 라는 하느의 상태를 가지고 있다 (useState 를 사용해서)

  useEffect(() => { //useEffect 을 통해 mount 되면 (useEffect 는 컴포넌트가 처음 렌더링 될 때, 그리고 그 이후에 렌더링 될 때마다 실행됨)
    fetch('https://meowfacts.herokuapp.com/') //fetch 를 통해 https://meowfacts.herokuapp.com/ 에 요청을 보내서 데이터를 받아옴
    //받아온 데이터를 json 으로 변환해서 text 상태에 업데이트해준다. 그러면 아티클 컴포넌트가 다시 렌더링(업데이트) 됨
    //fetch 는 브라우저에서 제공하는 API 이고, fetch 를 통해 요청을 보내면, 서버에서 응답을 받을 때까지 기다림 //fetch 는 promise 를 반환함 (promise 는 비동기 처리를 위한 객체)
    .then((res) => res.json()) //fetch 되면 반응코드가 오고 그걸 json 으로 바꿔서 data 로 받아옴
    .then((data) => setText(data.data[0])); //json 으로 변환된 data 가 정상적으로 오면 data.data[0] 을 text 에 넣어줌
    }, []); // 빈 배열을 넣어주면, 컴포넌트가 처음 렌더링 될 때! 딱 1번만 실행됨
    return <article className={styles.article}>{text}</article>
  }