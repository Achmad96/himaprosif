'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BlogType } from '@/types';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

interface IPaginationComponents {
  blogs: BlogType[];
  nextCursor: string | null;
  hasMore: boolean;
}

const PREV_CURSORS_NAME = 'previousCursors';

export default function PaginationComponent({ blogs, nextCursor, hasMore }: IPaginationComponents) {
  const router = useRouter();
  const startCursor = blogs[0]?.id || '';
  const [prevCursors, setPrevCursors] = useState<string[]>([]);

  useEffect(() => {
    if (!window) return;
    const storedCursors = localStorage.getItem(PREV_CURSORS_NAME);
    const data = storedCursors ? JSON.parse(storedCursors) : [];
    setPrevCursors(data);

    const handleDelete = () => {
      localStorage.setItem(PREV_CURSORS_NAME, '[]');
    };

    window.addEventListener('beforeunload', handleDelete);
    return () => window.removeEventListener('beforeunload', handleDelete);
  }, []);

  useEffect(() => {
    setPrevCursors([]);
    localStorage.setItem(PREV_CURSORS_NAME, '[]');
  }, []);

  useEffect(() => {
    localStorage.setItem(PREV_CURSORS_NAME, JSON.stringify(prevCursors));
  }, [prevCursors]);

  const handlePreviousClick = () => {
    const lastIndex = prevCursors.length - 1;
    router.replace(`?startCursor=${prevCursors[lastIndex]}`);
    setPrevCursors((prev) => prev.slice(0, lastIndex));
  };

  const handleNextClick = () => {
    if (prevCursors.includes(startCursor)) return;
    setPrevCursors((prev) => [...prev, startCursor]);
    router.replace(`?startCursor=${nextCursor}`);
  };

  return (
    <div className="join">
      <button disabled={prevCursors.length < 1} className={`btn join-item ${prevCursors.length < 1 && 'btn-disabled'}`} onClick={handlePreviousClick}>
        <FaArrowLeft className="h-3 w-3" />
      </button>
      <button className={'btn join-item'}>Page {prevCursors.length + 1}</button>
      <button className={`btn join-item ${!hasMore && 'btn-disabled'}`} disabled={!hasMore} onClick={handleNextClick}>
        <FaArrowRight className="h-3 w-3" />
      </button>
    </div>
  );
}
