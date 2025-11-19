'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { Board } from "@/app/components/type/boardType";

export default function BoardList() {
  // DB에서 가져온 게시글 데이터를 저장할 상태변수
  const [boardList, setBoardList] = useState<Board[]>([]);

  // 컴포넌트가 처음 화면에 뜰 때 실행
  useEffect(() => {
    const fetchList = async () => {
      try {
        // 우리가 만든 GET /api/board API를 호출
        const res = await fetch('/api/board', {
            cache: 'no-store' // 데이터가 계속 바뀌므로 캐시를 쓰지 않음
        });
        
        if (!res.ok) {
            throw new Error("데이터를 불러오는데 실패했습니다.");
        }

        const data = await res.json();
        setBoardList(data); // 가져온 데이터로 상태 업데이트
      } catch (error) {
        console.error("게시글 목록 조회 에러:", error);
      }
    };

    fetchList();
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">게시글 목록</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200 text-sm text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="border border-gray-300 px-4 py-2 w-16 text-center">
                ID
              </th>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2 w-24 text-center">
                Writer
              </th>
              <th className="border border-gray-300 px-4 py-2 w-32 text-center">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {/* 데이터가 없을 경우 처리 */}
            {boardList.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-10 text-gray-500">
                  게시글이 없습니다.
                </td>
              </tr>
            ) : (
              /* boardList 상태(DB 데이터)를 map으로 뿌려줌 */
              boardList.map((board) => (
                <tr key={board.id} className="hover:bg-gray-50 transition-colors">
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {board.id}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <Link
                      href={`/board/${board.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      {board.title}
                    </Link>
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {board.writer}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {/* 날짜 형식이 문자열로 오므로 10자리만 자름 */}
                    {board.reg_date && typeof board.reg_date === 'string' 
                      ? board.reg_date.substring(0, 10) 
                      : board.reg_date}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-end gap-2">
        <Link
          href="/"
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
        >
          Home
        </Link>
        <Link
          href="/board/write"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Write
        </Link>
      </div>
    </div>
  );
}