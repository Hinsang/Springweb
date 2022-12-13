import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import axios from "axios"

export default function BoardView(props) {
    const params = useParams();

    const [ board, setBoard ] = useState({})
    // axios의 리턴값이 promise이므로 useEffect 안에서는 함수를 리턴해야한다. 그래서 axios를 함수화 시켜주었다.
    useEffect(
        () => axios
            .get("/board/getboard", { params : { bno: params.bno } })
            .then(res => {setBoard(res.data)})
    ,[])

    return (
        <div>
            <div>{board.btitle}</div>
            <div>{board.bcontent}</div>
            <div>
                <button type="button">삭제</button>
                <button type="button">수정</button>
            </div>
        </div>
    )
}
