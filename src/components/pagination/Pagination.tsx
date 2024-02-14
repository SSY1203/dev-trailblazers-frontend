import { useEffect, useState } from 'react';
import { PAGES_PER_SECTION, SIZE } from '../../data';

interface PaginationType {
  totalPosts?: number;
  currentPage: number;
  setCurrentPage: (value: number) => void;
}

const Pagination = ({
  totalPosts = 88,
  currentPage,
  setCurrentPage,
}: PaginationType) => {
  const totalPages = Math.ceil(totalPosts / SIZE);
  const [start, setStart] = useState(1);
  const noPrev = start === 1;
  const noNext = start + PAGES_PER_SECTION - 1 >= totalPages;

  useEffect(() => {
    if (currentPage === start + PAGES_PER_SECTION)
      setStart((prev) => prev + PAGES_PER_SECTION);
    if (currentPage < start) setStart((prev) => prev - PAGES_PER_SECTION);
  }, [currentPage, start]);

  return (
    <nav className="flex justify-center mt-6">
      <ul className="iconAndText gap-0 -space-x-px h-8 text-sm">
        <li>
          <button disabled={noPrev} onClick={() => setCurrentPage(start - 1)}>
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
          </button>
        </li>

        {[...Array(PAGES_PER_SECTION)].map((a, i) => (
          <>
            {start + i <= totalPages && (
              <li key={i}>
                <button onClick={() => setCurrentPage(start + i)}>
                  <span
                    className={`center pagination cursor-pointer rounded-lg ${currentPage === start + i && 'bg-zinc-200'}`}
                  >
                    {start + i}
                  </span>
                </button>
              </li>
            )}
          </>
        ))}

        <li>
          <button
            disabled={noNext}
            onClick={() => setCurrentPage(start + PAGES_PER_SECTION)}
          >
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
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
