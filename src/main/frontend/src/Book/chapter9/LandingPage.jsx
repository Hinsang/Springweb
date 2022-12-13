import React, { useState } from 'react';
import Toolbar from './Toolbar';

export default function LandingPage(props) {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false); // 초기값은 false

    const onClickLogin = () => {
        setIsLoggedIn(true);    // 로그인 실행
    }

    const onClickLogout = () => {
        setIsLoggedIn(false); //
    }

    return (
        <div>
            <Toolbar
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
            />
            <div style={{ padding : 16 }}>소플과 함께하는 리액트 공부!</div>
        </div>
    )
}
