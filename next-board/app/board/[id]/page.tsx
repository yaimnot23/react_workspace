'use client'

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Board } from "@/app/components/type/boardType";

export default function BoardDetail() {
  const params = useParams();
  const id = params.id;
  const router = useRouter();

  const [board, setBoard] = useState<Board | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // 1. 게시글 데이터 조회 (DB 연결)
  useEffect(() => {
    const fetchBoard = async () => {
      try {
        const res = await fetch(`/api/board/${id}`);
        if (!res.ok) throw new Error("데이터 조회 실패");
        
        const data = await res.json();
        setBoard(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchBoard();
    }
  }, [id]);

  // 2. 삭제 요청 핸들러 (DELETE)
  const handleDelete = async () => {
    if (!confirm("정말 삭제하시겠습니까?")) return;

    try {
      const res = await fetch(`/api/board/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("게시글이 삭제되었습니다.");
        router.push("/board"); // 목록으로 이동
        router.refresh();
      } else {
        alert("삭제에 실패했습니다.");
      }
    } catch (error) {
      console.error("삭제 중 오류 발생:", error);
      alert("오류가 발생했습니다.");
    }
  };

  if (isLoading) return <div className="text-center py-20">Loading...</div>;
  if (!board) return <div className="text-center py-20">게시글을 찾을 수 없습니다.</div>;

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold border-b border-gray-300 pb-4 mb-6">
        {board.title}
      </h2>

      {/* 작성자 및 날짜 정보 */}
      <div className="flex justify-between text-gray-500 mb-8 border-b border-gray-100 pb-4">
        <span>작성자: {board.writer}</span>
        <span>작성일: {board.reg_date.substring(0, 10)}</span>
      </div>

      {/* 본문 내용 */}
      <div className="min-h-[300px] whitespace-pre-wrap text-lg mb-10 text-gray-800">
        {board.contents}
      </div>

      {/* 하단 버튼 영역 */}
      <div className="flex justify-end gap-2 border-t border-gray-300 pt-6">
        <Link
          href="/board"
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
        >
          List
        </Link>
        <Link
          href={`/board/${id}/modify`}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Modify
        </Link>
        
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}