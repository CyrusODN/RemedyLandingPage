import { useState, useEffect, RefObject } from 'react';
import { debounce } from '../utils/debounce';

export function useSlider(sliderRef: RefObject<HTMLDivElement>, itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const totalItems = slider.children[0].children.length;
    const pages = Math.ceil(totalItems / itemsPerPage);
    setTotalPages(pages);
  }, [itemsPerPage]);

  const scrollToPage = (page: number) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollWidth = slider.scrollWidth - slider.clientWidth;
    const pageWidth = scrollWidth / (totalPages - 1);
    const newScrollLeft = page * pageWidth;

    slider.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });

    setCurrentPage(page);
    updateScrollButtons(newScrollLeft, slider.scrollWidth - slider.clientWidth);
  };

  const updateScrollButtons = (scrollLeft: number, maxScroll: number) => {
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < maxScroll);
  };

  const handleScroll = debounce(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollLeft = slider.scrollLeft;
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    const currentPageCalc = Math.round((scrollLeft / maxScroll) * (totalPages - 1));

    setCurrentPage(currentPageCalc);
    updateScrollButtons(scrollLeft, maxScroll);
  }, 100);

  return {
    currentPage,
    totalPages,
    canScrollLeft,
    canScrollRight,
    scrollToPage,
    handleScroll
  };
}