import React from 'react';

class Ex_Event extends React.Component {

    // 생성자
    constructor(props) {
        super(props);
        this.state = { isToggleOn : true } // 메모리 관리
        this.handleClick = this.handleClick.bind(this)
    }

    // 이벤트 함수
    handleClick() {
        this.setState(prevState => { isToggleOn : !prevState.isToggleOn })
    }

    // 렌더링 함수
    render() {
        return (
            <button oncClick= { () => this.handleClick() }>
                {this.state.isToggleOn ? '켜짐' : '꺼짐'}
            </button>
        )
    }
}
export default Ex1_Event;

import React, { useState } from 'react';

function Ex1_Event( props ) {
    const [ isToggleOn, setIsToggleOn ] = useState(true)
}

export default Ex1_Event;
