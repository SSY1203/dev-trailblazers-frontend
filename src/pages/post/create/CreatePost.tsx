import { Editor, Layout } from '../../../components';

const CreatePost = () => {
  return (
    <Layout>
      <div className="px-[30px] w-full">
        <span className="text-[36px] font-medium flex justify-center py-[30px]">
          게시글 작성
        </span>
        <div className="flex flex-col">
          <input
            className="grow basicBorder p-[20px] mx-[20px] box-border"
            type="text"
            placeholder="제목을 입력해 주세요"
          />
          <div className="border-b border-solid border-[#DDDDDD] my-[23px]" />
          <div className="mx-[20px] h-[650px] relative flex flex-col mb-[30px]">
            <Editor height={'500px'} />
            <input
              className="grow basicBorder p-[20px] box-border absolute bottom-[20px] left-0 right-0"
              type="text"
              placeholder="해시 태그를 입력해 주세요"
            />
          </div>
          <div className="flex justify-end gap-4 mx-[20px] mb-[247px]">
            <button className="basicButton bg-zinc-600 text-white">게시</button>
            <button className="basicButton">취소</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreatePost;
