'use client'
import Link from "next/link";
import { boardList } from "@/app/data/data";
import { Board } from "@/app/components/type/boardType";
import { useParams } from "next/navigation";

// params: URL에서 [id] 부분
export default function BoardDetail() {
  // URL의 id는 문자열(String)로 들어오므로 숫자로
  const param = useParams();
  const id = Number(param.id);

  // 전체 데이터(boardList)에서 해당 id와 일치하는 글
  const board = boardList.find((b: Board) => b.id === id);

  //없는 번호(예외 처리)
  if (!board) {
    return <div className="text-center py-20">게시글을 찾을 수 없습니다.</div>;
  }

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
        <Link
          href={`/board/${id}/delete`}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Delete
        </Link>
      </div>
    </div>
  );
}