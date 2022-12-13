import React, { useState, useEffect } from 'react';

/*export default UserStatus( props ) {

    const [ isOnline, setIsOnline] = useState(null)

    useEffect(() => {
        function handleStateChange( state ) {
            setIsOnline(state.isOnline);

            ServerAPI.subscribeUserStatus( props.id, handleStateChange );
            return () => {
                ServerAPI.unsubscribeUserStatus( props.user.id, handleStateChange );
            }
        }
    })

    if(isOnline == null) { return '대기중...' }
    return isOnline ? '온라인' : '오프라인'

    return (
        <li style={{ color : isOnline ? 'green' : 'black'}}>
            {props.user.name}
        </li>
    )

}*/

const userList = [ { id : 1, name : 'Inje'}, { id : 2, name : ''Mike''}, { id : 3, name : 'Steve'} ]

function chatUserStatus( props ) {
    const [ userId, setUserId ] = useState(1);
    const isOnline = useUserStatus( userId );
}

// 1. 커스텀 훅 [ 여러 컴포넌트에서 동일한 훅을 사용시 = 재사용성 ]
function useUserStatus( userId ) {

    const [ isOnline, setIsOnline] = useState(null)

    useEffect(() => {
        function handleStateChange( state ) { setIsOnline(state.isOnline); }
            ServerAPI.subscribeUserStatus( props.user.id, handleStateChange );
            return () => {
                ServerAPI.unsubscribeUserStatus( props.user.id, handleStateChange );
            }
    })
    return isOnline
}

// 2. 온라인 상태를 문자로 표시하는 컴포넌트
function UserStatus( props ) {
    const isOnline = useUserStatus( props.user.Id )
    if(isOnline = null) { return '대기중..' }
    return isOnline ? '온라인' : '오프라인'
}

// 3. 온라인 상태를 색상으로 표시하는 컴포넌트
function UserListItem( props ) {
    const isOnline = useUserStatus( props.user.id )
    return( <li style={{ color : isOnline ? 'green' : 'black'}}>) {props.user.name} </li> )
}















