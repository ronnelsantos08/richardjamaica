"use client";

import React, { useState, useRef, useEffect } from 'react';

interface PageData {
  front: React.ReactNode;
  back: React.ReactNode;
  isCoverPage?: boolean;
  isBackCover?: boolean;
}

interface FlipBookProps {
  pages: PageData[];
}

const flipBookStyles = `
:root {
  --thickness: 5; /* Slightly thicker pages for larger book */
}

/* Global book container */
.book {
  position: relative;
  display: flex;
  width: 70cqmin; /* bigger */
  pointer-events: none;
  transform-style: preserve-3d;
  transition: translate 1s;
  rotate: 1 0 0 30deg;
  counter-reset: page -1;
  font-family: 'Playfair Display', serif; /* Elegant serif font */
}

/* Pages */
.page {
  flex: none;
  display: flex;
  width: 100%;
  font-size: 3.5cqmin; /* larger font */
  pointer-events: all;
  user-select: none;
  transform-style: preserve-3d;
  transform-origin: left center;
  transition:
    transform 1s,
    rotate 1s ease-in calc((min(var(--i), var(--c)) - max(var(--i), var(--c))) * 50ms);
  translate: calc(var(--i) * -100%) 0px 0px;
  transform: translateZ( calc((var(--c) - var(--i) - 0.5) * calc(var(--thickness) * .25cqmin)));
  rotate: 0 1 0 calc(clamp(0, var(--c) - var(--i), 1) * -180deg);
  box-shadow: 0em .7em 1.2em -.2em #00000030;
}

/* Front & Back */
.front,
.back {
  position: relative;
  flex: none;
  width: 100%;
  backface-visibility: hidden;
  overflow: hidden;
  translate: 0px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  padding: 3em; /* more padding for elegance */
}

/* Front */
.front {
  background: linear-gradient(to left, #fefaf6 80%, #f5f0ea 100%);
  border-radius: 0.2em 0.8em 0.8em 0.2em;
}

/* Back */
.back {
  translate: -100% 0;
  rotate: 0 1 0 180deg;
  background-image: linear-gradient(to right, #fefaf6 80%, #f5f0ea 100%);
  border-radius: 0.8em 0.2em 0.2em 0.8em;
}

/* Cover */
.cover {
  background: radial-gradient(circle farthest-corner at 80% 20%, hsl(150 80% 20% / 0.2) 0%, hsl(170 60% 10% / 0.1) 100%),
    hsl(231, 32%, 29%) url("/images/lovecover.jpeg") 50% / cover;
  color: hsl(200 30% 98%);
}

/* Images inside pages */
.front img,
.back img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.8em;
  box-shadow: 0 0.5em 1em rgba(0,0,0,0.15);
}
`;

interface PageFaceContentProps {
  children: React.ReactNode;
  isCover?: boolean;
  isBack?: boolean;
  index: number;
}

const PageFace: React.FC<PageFaceContentProps> = ({ children, isCover = false, isBack = false, index }) => {
  const isImage = React.Children.toArray(children).some(child =>
    React.isValidElement(child) && child.type === 'img'
  );

  let pageNumber: number | string = '';
  if (!isCover) pageNumber = isBack ? (index * 2) + 1 : (index * 2);
  if (index === 0 && !isBack) pageNumber = '';
  if (index === 5 && isBack) pageNumber = '';

  return (
    <div className={`
        ${isBack ? 'back' : 'front'}
        ${isCover ? 'cover' : ''}
        flex flex-col flex-none w-full p-[2em] text-[1em]
        ${isImage ? '!p-0' : ''}
      `}
    >
      {children}
      {pageNumber !== '' && (
        <span
          className="absolute bottom-[1em] text-[0.8em]"
          style={{ [isBack ? 'left' : 'right']: '1em' }}
        >
          {pageNumber}.
        </span>
      )}
    </div>
  );
};

interface PageProps {
  index: number;
  handlePageClick: (pageIndex: number) => void;
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  isCoverPage?: boolean;
  isBackCover?: boolean;
}

const Page: React.FC<PageProps> = ({ index, handlePageClick, frontContent, backContent, isCoverPage = false, isBackCover = false }) => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pageRef.current) pageRef.current.style.setProperty('--i', index.toString());
  }, [index]);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.closest("a")) return;
    const isClickingBack = target.closest(".back");
    const curr = isClickingBack ? index : index + 1;
    handlePageClick(curr);
  };

  return (
    <div ref={pageRef} className="page" onClick={handleClick} role="button" aria-label={`Turn to page ${index + 1}`}>
      <PageFace index={index} isCover={isCoverPage} isBack={false}>{frontContent}</PageFace>
      <PageFace index={index} isBack={true} isCover={isBackCover}>{backContent}</PageFace>
    </div>
  );
};

const FlipBook: React.FC<FlipBookProps> = ({ pages }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [hasFlipped, setHasFlipped] = useState(false);
  const bookRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bookRef.current) bookRef.current.style.setProperty("--c", currentPage.toString());
  }, [currentPage]);

  const handlePageClick = (newPageIndex: number) => {
    const nextPageIndex = Math.min(Math.max(0, newPageIndex), pages.length - 1);
    setCurrentPage(nextPageIndex);
    if (!hasFlipped) setHasFlipped(true);
  };

  return (
    <>
      <style>{flipBookStyles}</style>
      <section
  className={`w-full h-[700px] flex items-center overflow-hidden bg-[#E6E6FA] px-20 transition-all duration-700`}
  style={{ justifyContent: hasFlipped ? 'flex-end' : 'center' }}
>
        <div ref={bookRef} className="book transition-transform duration-700">
          {pages.map((page, index) => (
            <Page
              key={index}
              index={index}
              handlePageClick={handlePageClick}
              frontContent={page.front}
              backContent={page.back}
              isCoverPage={page.isCoverPage}
              isBackCover={page.isBackCover}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default FlipBook;
