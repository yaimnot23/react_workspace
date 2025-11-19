import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: Number(process.env.MYSQL_PORT),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default db;


// waitForConnections
// 연결이 없고 제한에 도달했을 시 풀의 동작 결정
// true : 풀의 연결 요청을 대기열에 넣고 사용 가능해지면 호출
// false : 즉시 오류와 함께 다시 호출(기본값 : true)
