import { useEffect, useState } from 'react';
import { Editor, Layout } from '../../../components';
import { useNavigate, useParams } from 'react-router-dom';
import { PostType } from '../../../types/PostType';
import { putMethod } from '../../../apis';

const initialPost = {
  title: '',
  content: '',
  hashtags: '',
};

const EditPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const [postInfo, setPostInfo] = useState<PostType>(initialPost);
  const [hashTags, setHashTags] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await getPost();
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(postInfo);
  }, [postInfo]);

  const getPost = async () => {
    try {
      const result = await fetch(
        `${process.env.REACT_APP_API}/articles/id/${postId}`
      );
      const { id, title, content, hashtags } = await result.json();

      setPostInfo({
        id,
        title,
        content,
        hashtags,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onEditPost = async () => {
    try {
      const result = await putMethod(
        `/articles/id/${postId}`,
        JSON.stringify(postInfo)
      );
      alert('수정되었습니다.');
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="px-[30px] w-full">
        <span className="text-[36px] font-medium flex justify-center py-[30px]">
          게시글 수정
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
              onClick={onEditPost}
            >
              수정
            </button>
            <button className="basicButton" onClick={() => navigate(-1)}>
              취소
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EditPost;
