import { useNavigate } from 'react-router-dom';
import { Layout, Pagination, PostCard } from '../../components';
import { useEffect, useState } from 'react';
import { SIZE, SORT_FIELD } from '../../data';

interface PostType {
  id: number;
  title: string;
  content: string;
  hashtags: string;
  modifiedBy: number;
  createdAt: string;
  modifiedAt: string;
}

const Home = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState<PostType[]>([]);
  const [totalPostsCount, setTotalPostsCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const onFetchData = async () => {
      await onGetPosts();
    };

    onFetchData();
  }, []);

  useEffect(() => {
    const onFetchData = async () => {
      await onGetPosts();
    };

    onFetchData();
  }, [currentPage]);

  // useEffect(() => {
  //   console.log(posts);
  // }, [posts]);

  const onGetPosts = async () => {
    try {
      const result = await fetch(
        `http://localhost:8080/articles/keyword/a?page=${currentPage - 1}&size=${SIZE}&sort=${SORT_FIELD}`
      );
      const json = await result.json();

      setPosts(json.dtos);
      setTotalPostsCount(json.totalCount);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout setPosts={setPosts}>
      <div className="iconPosition py-4 pr-6 borderBottom">
        <select
          className="w-32 text-center py-1 border rounded-lg border-gray-200 text-sm font-semibold text-neutral-600"
          name="post-filter"
          id="post-filter"
        >
          <option value="latest">최신순</option>
          <option value="viewCount">조회순</option>
          <option value="comments">댓글순</option>
        </select>
        <button
          className="basicButton bg-zinc-600 text-white"
          onClick={() => navigate('/post/create')}
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
