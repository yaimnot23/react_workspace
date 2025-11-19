import { NextResponse } from 'next/server';
import pool from '@/app/lib/db';
import { RowDataPacket, ResultSetHeader } from 'mysql2';

// Next.js 15 버전 대응을 위한 타입 정의
type Context = {
  params: Promise<{ id: string }> | { id: string };
};

// GET: 게시글 상세 조회 (1개)
export async function GET(req: Request, context: Context) {
  try {
    // Next.js 15에서는 params를 await 해야 함
    const { id } = await context.params; 
    
    console.log(`[API] 게시글 상세 조회 요청 ID: ${id}`); // 서버 터미널 로그 확인용

    const db = await pool.getConnection();

    const query = 'SELECT * FROM board WHERE id = ?';
    const [rows] = await db.query<RowDataPacket[]>(query, [id]);

    db.release();

    if (rows.length === 0) {
      console.log(`[API] 게시글 찾을 수 없음 (ID: ${id})`);
      return NextResponse.json({ error: '게시글을 찾을 수 없습니다.' }, { status: 404 });
    }

    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error("[API] 상세 조회 에러:", error);
    return NextResponse.json({ error: '서버 오류' }, { status: 500 });
  }
}

// PUT: 게시글 수정
export async function PUT(req: Request, context: Context) {
  try {
    const { id } = await context.params;
    const { title, contents } = await req.json();

    console.log(`[API] 게시글 수정 요청 ID: ${id}`);

    const db = await pool.getConnection();

    const query = 'UPDATE board SET title = ?, contents = ? WHERE id = ?';
    const [result] = await db.query<ResultSetHeader>(query, [title, contents, id]);

    db.release();

    return NextResponse.json({ success: true, message: '수정되었습니다.' });
  } catch (error) {
    console.error("[API] 수정 에러:", error);
    return NextResponse.json({ error: '수정 실패' }, { status: 500 });
  }
}

// DELETE: 게시글 삭제
export async function DELETE(req: Request, context: Context) {
  try {
    const { id } = await context.params;
    console.log(`[API] 게시글 삭제 요청 ID: ${id}`);

    const db = await pool.getConnection();

    const query = 'DELETE FROM board WHERE id = ?';
    const [result] = await db.query<ResultSetHeader>(query, [id]);

    db.release();

    return NextResponse.json({ success: true, message: '삭제되었습니다.' });
  } catch (error) {
    console.error("[API] 삭제 에러:", error);
    return NextResponse.json({ error: '삭제 실패' }, { status: 500 });
  }
}