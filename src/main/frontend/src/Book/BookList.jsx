import React from 'react';
import Index from '../component/Index'
import Signup from '../component/member/Signup'

// 1. 사용할 컴포넌트 호출 [ import 컴포넌트명 from 파일명 ]
import { HashRouter, BrowserRouter, Routes, Route, Link,  Router } from "react-router-dom";

export default function BookList() {

    return(
        <div>
            <Link to="/book/list/1"> <button>chapter3</button> </Link>
            <Link to="/book/list/2"> <button>chapter4</button> </Link>
            <Link to="/book/list/3"> <button>chapter5</button> </Link>
            <Link to="/book/list/4"> <button>chapter6</button> </Link>
            <Link to="/book/list/5"> <button>chapter7</button> </Link>
            <Link to="/book/list/6"> <button>chapter7-2</button> </Link>
            <Link to="/book/list/7"> <button>chapter8</button> </Link>
            <Link to="/book/list/8"> <button>chapter8-2</button> </Link>
            <Link to="/book/list/9"> <button>chapter8-3</button> </Link>
            <Link to="/book/list/10"> <button>chapter9</button> </Link>
            <Link to="/chapter10/AttendanceBook"> <button>chapter10</button> </Link>
            <Link to="/chapter11/SignUp"> <button>chapter11</button> </Link>
        </div>
    )
}
