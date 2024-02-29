import { useEffect, useState } from 'react';
import { Editor, Layout } from '../../../components';
import { useNavigate } from 'react-router-dom';
import { PostType } from '../../../types/PostType';
import { postMethod } from '../../../apis';

const initialPost = {
  title: '',
  content: '',
  hashtags: '',
};

const CreatePost = () => {
  const navigate = useNavigate();

  const [postInfo, setPostInfo] = useState<PostType>(initialPost);
  const [hashTags, setHashTags] = useState<string[]>([]);

  const onCreatePost = async () => {
    try {
      const result = await postMethod('/articles', JSON.stringify(postInfo));
      const data = await result?.json();

      alert('게시되었습니다.');

      navigate(`/post/${data}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="px-[30px] w-full">
        <span className="text-[36px] font-medium flex justify-center py-[30px]">
          게시글 작성
        </span>
        <div className="flex flex-col">
          <input
            value={postInfo.title}
            onChange={(event) =>
              setPostInfo((prev) => ({ ...prev, title: event.target.value }))
            }
            className="grow basicBorder p-[20px] mx-[20px] box-border"
            type="text"
            placeholder="제목을 입력해 주세요"
          />
          <div className="borderBottom my-[23px]" />
          <div className="mx-[20px] h-[650px] relative flex flex-col mb-[30px]">
            <Editor
              height={'500px'}
              value={postInfo.content}
              onChange={(value) =>
                setPostInfo((prev) => ({ ...prev, content: value }))
              }
            />
            <input
              className="grow basicBorder p-[20px] box-border absolute bottom-[20px] left-0 right-0"
              type="text"
              placeholder="해시 태그를 입력해 주세요"
              value={postInfo.hashtags}
              onChange={(event) =>
                setPostInfo((prev) => ({
                  ...prev,
                  hashtags: event.target.value,
                }))
              }
            />
          </div>
          <div className="iconPosition mx-[20px] mb-[247px]">
            <button
              className="basicButton bg-zinc-600 text-white"
              onClick={onCreatePost}
            >
              게시
            </button>
            <button className="basicButton" onClick={() => navigate('/post')}>
              취소
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreatePost;
