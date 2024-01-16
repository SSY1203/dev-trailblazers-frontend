const Post = () => {
  return (
    <button className=" w-full px-6 pt-6 pb-4  flex flex-col gap-9 border-b border-gray-200 border-solid">
      <div className="w-full flex flex-col items-start gap-3">
        <div className="flex justify-between w-full">
          <span className="text-sm text-zinc-600">OOO님</span>
          <span className="text-zinc-400 font-semibold">
            2024/01/03 21:31:41
          </span>
        </div>
        <span className="text-zinc-600 text-lg font-medium">
          코린이 코드 리뷰 부탁드립니다ㅠㅠㅠ
        </span>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex gap-2">
          <div className="border border-gray-200 border-solid rounded-lg py-1 px-2.5 bg-zinc-50 text-zinc-400 font-semibold">
            frontend
          </div>
          <div className="border border-gray-200 border-solid rounded-lg py-1 px-2.5 bg-zinc-50 text-zinc-400 font-semibold">
            React
          </div>
          <div className="border border-gray-200 border-solid rounded-lg py-1 px-2.5 bg-zinc-50 text-zinc-400 font-semibold">
            비동기
          </div>
          <div className="border border-gray-200 border-solid rounded-lg py-1 px-2.5 bg-zinc-50 text-zinc-400 font-semibold">
            async await
          </div>
          <div className="border border-gray-200 border-solid rounded-lg py-1 px-2.5 bg-zinc-50 text-zinc-400 font-semibold">
            신입
          </div>
          <div className="border border-gray-200 border-solid rounded-lg py-1 px-2.5 bg-zinc-50 text-zinc-400 font-semibold">
            클린코드
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="flex items-center gap-2 text-stone-300 text-sm">
            <span className="material-symbols-outlined">visibility</span>
            <span>16</span>
          </div>
          <div className="flex items-center gap-2 text-stone-300 text-sm">
            <span className="material-symbols-outlined">sms</span>
            <span>16</span>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Post;
