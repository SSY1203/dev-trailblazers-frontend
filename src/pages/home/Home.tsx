import { useNavigate } from 'react-router-dom';
import { Layout, PostCard } from '../../components';

const Home = () => {
  const navigate = useNavigate();
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
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <nav className="flex justify-center mt-6">
        <ul className="iconAndText gap-0 -space-x-px h-8 text-sm">
          <li>
            <a
              href="#"
              className="center pagination paginationIcon rounded-s-lg"
            >
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
            </a>
          </li>
          <li>
            <a href="#" className="center pagination">
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="center pagination paginationIcon rounded-e-lg"
            >
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
            </a>
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default Home;
