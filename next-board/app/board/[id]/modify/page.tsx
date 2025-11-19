'use client'

import Link from "next/link";
import { boardList } from "@/app/data/data";
import { Board } from "@/app/components/type/boardType";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function BoardModify() {
  const params = useParams();
  const id = Number(params.id);

  // 데이터가 로드되기 전이나 찾을 수 없을 때를 위한 상태
  const [board, setBoard] = useState<Board | undefined>(undefined);

  // 입력상태 관리 (제목, 내용)
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [writer, setWriter] = useState("");

  useEffect(() => {
    // id에 해당하는 게시글 찾기
    const foundBoard = boardList.find((b: Board) => b.id === id);
    
    if (foundBoard) {
      setBoard(foundBoard);
      // 기존 데이터를 state 초기값으로 덮기기
      setTitle(foundBoard.title);
      setContents(foundBoard.contents);
      setWriter(foundBoard.writer);
    }
  }, [id]);

  // 게시글이 없는 경우 예외 처리
  if (!board) {
    return <div className="text-center py-20">게시글을 찾을 수 없습니다.</div>;
  }

  // 수정 버튼 핸들러 (실제 기능은 아직 없음)
  const handleModify = () => {
    alert("수정 기능은 아직 DB와 연결되지 않았습니다.\n입력된 제목: " + title);
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold border-b border-gray-300 pb-4 mb-6">
        게시글 수정
      </h2>

      {/* 제목 입력 */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">제목</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
          placeholder="제목을 입력하세요"
        />
      </div>

      {/* 작성자 (읽기 전용) */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">작성자</label>
        <input
          type="text"
          value={writer}
          readOnly
          disabled
          className="w-full border border-gray-300 p-2 rounded bg-gray-100 text-gray-500 cursor-not-allowed"
        />
      </div>

      {/* 본문 내용 입력 */}
      <div className="mb-10">
        <label className="block text-gray-700 font-bold mb-2">내용</label>
        <textarea
          value={contents}
          onChange={(e) => setContents(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded h-[300px] focus:outline-none focus:border-blue-500 resize-none"
          placeholder="내용을 입력하세요"
        />
      </div>

      {/* 하단 버튼 영역 */}
      <div className="flex justify-end gap-2 border-t border-gray-300 pt-6">
        {/* Reset: 상세 페이지로 돌아가기 (취소) */}
        <Link
          href={`/board/${id}`}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
        >
          Reset
        </Link>
        
        {/* Modify: 수정 동작 (현재는 alert만 표시) */}
        <button
          onClick={handleModify}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Modify
        </button>
      </div>
    </div>
  );
}