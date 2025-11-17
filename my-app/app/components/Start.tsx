const Start = () =>{
    // 내부 변수 사용
    const name = "홍길동";

    // 스타일 객체 선언
    const style = {
        color:'white',
        backgroundColor:'black',

    }

    return(
        <div>
            <h2>Hello React Next.js</h2>
            <h2>{name} Hello~!!</h2>
        </div>
    )
}

export default Start;