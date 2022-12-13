/*
    리액트 : SPA, 컴포넌트 단위 개발
        State : 데이터 관리 변수
        // 1. 클래스 : 생성자에서 this.state 선언
        // 2. 함수 : useState 라이브러리
*/
import React , { useState, useEffect } from 'react';

// * 해결책 : 리액트 훅 이라는 곳에서 useState 라이르러리 사용하자
export default function Counter( props ) {
    // 1. JS 혹은 라이브러리
    const [ count, setCount ] = useState(0)

    useEffect(() => {
        document.title = `총 ${count}번 클릭했습니다.`  // `백틱
        return () => {}
    })

    return (
        <div>
            <p> 총 { count }번 클릭했습니다. </p>
            <button className="btn" onClick={ () => setCount(count+1) }>
                클릭
            </button>
        </div>
    ); // 2. 렌더링 되는 HTML + JSX 표현식 { } + 컴포넌트
}
