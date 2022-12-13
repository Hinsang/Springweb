// jsx : 리액트 확장 표현식 파일
// 컴포넌트 단위 애플리케이션 제작
// SPA : 싱글 페이지 애플리케이션 [ 페이지는 하나다 ]
    // 라우터 라이브러리 : 가상 URL
// 컴포넌트 만들기 준비물
    // 1. 첫글자는 대문자 [ 컴포넌트명 == 파일명 ]
    // 2. 리액트[프레임워크가 아니다] 라이브러리 집합소 [ import 많다 ]
        // 1. import React from 'react';
        // 2. function 컴포넌트명(){  return ( 렌더링할 코드 ); }
        // 3. export default 컴포넌트명 ;
               // 2,3 : export default function 컴포넌트명(){  return ( 렌더링할 코드 ); }



import React , { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Signup from './member/Signup';
import Home from './Home';
import Login from './member/Login';
import BoardList from './board/BoardList'
import BoardWrite from './board/BoardWrite';
import BoardView from './board/BoardView';
import BookList from '../Book/BookList';
import Library from '../Book/chapter3/Library'
import Clock from '../Book/chapter4/Clock'
import CommentList from '../Book/chapter5/CommentList'
import NotificationList from '../Book/chapter6/NotificationList'
import Counter from '../Book/chapter7/Ex1_Hook'
import Accommodate from '../Book/chapter7/Accommodate'
import ConfirmButton from '../Book/chapter8/ConfirmButton'
import ConfirmButton2 from '../Book/chapter8/ConfirmButton2'
import TestState from '../Book/chapter8/TestState'
import LandingPage from '../Book/chapter9/LandingPage'
import AttendanceBook from '../Book/chapter10/AttendanceBook'
import SignUp from '../Book/chapter11/SignUp'
import axios from 'axios';
// 라우터 설치[ 터미널 ] : npm i react-router-dom == npm install react-router-dom
// import { 컴포넌트명 } from 'react-router-dom'; v6
import { HashRouter, BrowserRouter, Routes, Route, Link,  Router } from "react-router-dom";
    // BrowserRouter : 가상 URL
    //  vs HashRouter :
    // Routes :  Route 목록/리스트
    // Route :  가상 URL 만들기 --> 해당 URL 에 따른 컴포넌트 렌더링 [ SPA ]
    // Link :   <---> a 태그  : 하이퍼링크
        // Link to = "Route Path"
    // Router :
export default function Index( props ){

    const [ login , setLogin ] = useState(null);

    axios
        .get("/member/getloginMno")
        .then( (response) => { setLogin( response.data ); } )


    return  (
        <div className="webbox">
            <BrowserRouter>
                <Header/>
                {
                    login == "" ?
                    (
                        <></>
                    )
                    :
                    (
                        <BookList login="login" />
                    )
                }
                    <Routes>
                        <Route path="/" element={ <Home /> } />
                        <Route path="/member/signup" element={ <Signup/> } />
                        <Route path="/member/login" element={ <Login/> } />
                        <Route path="/board/list" element={ <BoardList/> } />
                        <Route path="/board/write" element={ <BoardWrite/> } />
                        <Route path="/board/view/:bno" element={ <BoardView/> } />

                        <Route path="/book/list" element={ <BookList/> } />
                        <Route path="/book/list/1" element={ <Library/> } />
                        <Route path="/book/list/2" element={ <Clock/> } />
                        <Route path="/book/list/3" element={ <CommentList/> } />
                        <Route path="/book/list/4" element={ <NotificationList/> } />
                        <Route path="/book/list/5" element={ <Counter/> } />
                        <Route path="/book/list/6" element={ <Accommodate/> } />
                        <Route path="/book/list/7" element={ <ConfirmButton/> } />
                        <Route path="/book/list/8" element={ <ConfirmButton2/> } />
                        <Route path="/book/list/9" element={ <TestState/> } />
                        <Route path="/book/list/10" element={ <LandingPage/> } />
                        <Route path="/chapter10/AttendanceBook" element={ <AttendanceBook/> } />
                        <Route path="/chapter11/Signup" element={ <SignUp/> } />
                    </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}
