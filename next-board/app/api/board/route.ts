// GET(전체 조회), POST(생성)

//1. 전체 코드

//2. 

import { NextResponse } from 'next/server';
import pool from '@/app/lib/db';

// GET: 게시글 전체 조회
export async function GET() {
  try {
    const db = await pool.getConnection();
    
    // 최신글 순으로 조회
    const query = 'SELECT * FROM board ORDER BY id DESC';
    const [rows] = await db.query(query);
    
    db.release(); // 연결 반환
    
    return NextResponse.json(rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: '데이터 조회 실패' }, { status: 500 });
  }
}

// POST: 게시글 등록
export async function POST(req: Request) {
  try {
    const { title, contents, writer } = await req.json();

    if (!title || !writer || !contents) {
      return NextResponse.json({ error: '필수 항목 누락' }, { status: 400 });
    }

    const db = await pool.getConnection();

    const query = 'INSERT INTO board (title, contents, writer) VALUES (?, ?, ?)';
    await db.query(query, [title, contents, writer]);

    db.release();

    return NextResponse.json({ success: true, message: '게시글 등록 성공' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: '게시글 등록 실패' }, { status: 500 });
  }
}