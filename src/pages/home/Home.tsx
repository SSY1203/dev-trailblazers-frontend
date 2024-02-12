import { useNavigate } from 'react-router-dom';
import { Layout, PostCard } from '../../components';
import { useEffect, useState } from 'react';

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
  const [activePage, setActivePage] = useState(1);
  const SIZE = 10;
  const PAGES_PER_SECTION = 5;
  const SORT_FIELD = 'createdAt';

  const [totalPages, setTotalPages] = useState(1);

  // const totalSections = Math.ceil(totalPages / PAGES_PER_SECTION);

  const sectionNumber = Math.ceil(activePage / PAGES_PER_SECTION);

  const startPage = (sectionNumber - 1) * PAGES_PER_SECTION + 1;
  const endPage = Math.min(startPage + PAGES_PER_SECTION - 1, totalPages);

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
  }, [activePage]);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  const onGetPosts = async () => {
    try {
      const result = await fetch(
        `http://localhost:8080/articles/keyword/a?page=${activePage}&size=${SIZE}&sort=${SORT_FIELD}`
      );
      const json = await result.json();

      setPosts(json);
      console.log(Math.ceil(json.length / PAGES_PER_SECTION));

      setTotalPages(Math.ceil(json.length / PAGES_PER_SECTION));
    } catch (error) {
      console.log(error);
    }
  };

  const onMovePage = (page: number) => {
    setActivePage(page);
  };

  return (
    <Layout>
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
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      <nav className="flex justify-center mt-6">
        <ul className="iconAndText gap-0 -space-x-px h-8 text-sm">
          <button
            disabled={activePage === 1}
            onClick={() => onMovePage(activePage - 1)}
          >
            <li>
              <span className="center pagination paginationIcon rounded-s-lg">
                <span className="sr-only">Previous</span>
                <svg
                  className="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </span>
            </li>
          </button>

          {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
            <button
              key={startPage + index}
              onClick={() => onMovePage(startPage + index)}
              disabled={activePage === startPage + index}
            >
              <li>
                <span className="center pagination cursor-pointer">
                  {startPage + index}
                </span>
              </li>
            </button>
          ))}

          <button
            disabled={activePage === totalPages}
            onClick={() => onMovePage(activePage + 1)}
          >
            <li>
              <span className="center pagination paginationIcon rounded-e-lg">
                <span className="sr-only">Next</span>
                <svg
                  className="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </span>
            </li>
          </button>
        </ul>
      </nav>
    </Layout>
  );
};

export default Home;
