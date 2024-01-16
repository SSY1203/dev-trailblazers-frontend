import { Layout, Post } from '../../components';

const Home = () => {
  return (
    <Layout>
      <div className="bg-zinc-50 h-full">
        <div className="w-2/5 h-full bg-white mx-auto">
          <div className="flex justify-end py-4 pr-6 border-b border-gray-200 border-solid">
            <select
              className="w-32 text-center py-1 border rounded-lg border-gray-200 text-sm font-semibold text-neutral-600"
              name="post-filter"
              id="post-filter"
            >
              <option value="Latest">최신순</option>
              <option value="viewCount">조회순</option>
              <option value="comments">댓글순</option>
            </select>
          </div>
          <Post />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
