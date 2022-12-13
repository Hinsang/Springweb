import React from 'react';

class ConfirmButton extends React.Component {
    // 생성자
    constructor(props) {
        super(props);
        this.state = { isConfirmed : false } // 리액트 컴포넌트에 데이터 넣는 변수 [ 재 렌더링 - 업데이트 ]
        this.handleConfirm = this.handleConfirm.bind(this);
    }

    // 이벤트 함수 정의
    handleConfirm() {
        this.setState((prevState) => ({ isConfirmed : !prevState.isConfirmed }))
    }

    // 렌더링 함수
    render() {
        return (
            <button onClick={this.handleConfirm} disabled = {this.state.isConfirmed}>
                { this.state.isConfirmed ? "확인됨" : "확인하기" }
            </button>
        )
    }
}
export default ConfirmButton;
