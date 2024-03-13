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
          <button
            disabled={noPrev}
            onClick={() => setCurrentPage(start - PAGES_PER_SECTION)}
          >
            <span className="center pagination paginationIcon rounded-s-lg">
              <span className="sr-only">Double Previous</span>
              <span className="material-symbols-outlined">
                keyboard_double_arrow_left
              </span>
            </span>
          </button>
        </li>

        <li>
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <span className="center pagination paginationIcon rounded-s-lg">
              <span className="sr-only">Previous</span>
              <span className="material-symbols-outlined ">chevron_left</span>
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
            disabled={totalPages === currentPage}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <span className="center pagination paginationIcon rounded-e-lg">
              <span className="sr-only">Next</span>
              <span className="material-symbols-outlined ">chevron_right</span>
            </span>
          </button>
        </li>

        <li>
          <button
            disabled={noNext}
            onClick={() => setCurrentPage(start + PAGES_PER_SECTION)}
          >
            <span className="center pagination paginationIcon rounded-e-lg">
              <span className="sr-only">Double Next</span>
              <span className="material-symbols-outlined">
                keyboard_double_arrow_right
              </span>
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
