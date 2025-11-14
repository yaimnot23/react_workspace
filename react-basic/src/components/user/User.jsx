import React from 'react';

/**
 * props로 user 객체를 받아옵니다.
 * 비구조화 할당(Destructuring)을 사용해 { user } 라고 바로 받았습니다.
 * (props) 라고 받고 props.user.username 처럼 써도 동일합니다. [cite: 183, 209]
 */

function User({user}){
    return(
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
}

export default User;