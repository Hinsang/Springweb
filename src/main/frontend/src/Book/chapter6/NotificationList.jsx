import React from 'react'
import Notification from './Notification.jsx'

const reservedNotifications = [
    { id : 1, message : '안녕하세요, 오늘 일정 알려드립니다.' },
    { id : 2, message : '점심 식사 시간입니다.' },
    { id : 3, message : '이제 곧 미팅이 시작됩니다.' }
]

var timer

class NotificationList extends React.Component {

    constructor(props) {
        super(props)
        this.state = { notifications : [] }
    }

    componentDidMount() {
        const { notifications } = this.state
        timer = setInterval(() => {
            if(notifications.length < reservedNotifications.length) {
                const index = notifications.length
                notifications.push( reservedNotifications[index] )
                this.setState({notifications : notifications})
            } else {
                this.setState({notifications : []})
            }
        }, 2000)
    }

    // NotificationList 컴포넌트 사망시[끝났을때] timer 클리어
    componentWillUnmount() {
        if(timer) { // timer 변수에 setInterval 함수가 있으면
            clearInterval(timer) // setInterval 종료
        }
    }

    render() {
        return (
            <div>
                { this.state.notifications.map((n) => {
                    return <Notification id={ n.id } message={ n.message } />
                }) }

            </div>
        )
    }

}

export default NotificationList
