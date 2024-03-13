import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Layout, Pagination, PostCard } from '../../components';
import { SIZE } from '../../data';
import { PostType } from '../../types/PostType';
import { getMethod } from '../../apis';
import { getCookie } from '../../utils';

const Home = () => {
  const navigate = useNavigate();

  const [sortType, setSortType] = useState('createdAt');

  const [posts, setPosts] = useState<PostType[]>([]);
  const [totalPostsCount, setTotalPostsCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      await getPosts();
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await getPosts();
    };

    fetchData();
  }, [currentPage]);

  useEffect(() => {
    const fetchData = async () => {
      await getPosts();
    };

    fetchData();
  }, [sortType]);

  const getPosts = async () => {
    try {
      const result = await getMethod(
        `/articles/keyword/a?page=${currentPage - 1}&size=${SIZE}&sort=${sortType},desc`
      );
      const json = await result?.json();

      console.log(json);

      setPosts(json.dtos);
      setTotalPostsCount(json.totalCount);
    } catch (error) {
      console.error(error);
    }
  };

  const onWritePost = async () => {
    const user = await getCookie('userId');

    if (!user) {
      navigate('/login');
      return;
    }

    navigate('/post/create');
  };

  return (
    <Layout>
      <div className="iconPosition py-4 pr-6 borderBottom">
        <select
          className="w-32 text-center py-1 border rounded-lg border-gray-200 text-sm font-semibold text-neutral-600"
          name="post-filter"
          id="post-filter"
          value={sortType}
          onChange={(event) => setSortType(event.target.value)}
        >
          <option value="createdAt">최신순</option>
          <option value="viewCount">조회순</option>
          <option value="comments">댓글순</option>
        </select>
        <button
          className="basicButton bg-zinc-600 text-white"
          onClick={onWritePost}
        >
          글쓰기
        </button>
      </div>
      {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPosts={totalPostsCount}
      />
      <div className="mb-2"></div>
    </Layout>
  );
};

export default Home;
