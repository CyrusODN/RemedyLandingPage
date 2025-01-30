import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TeamMember from "./TeamMember";
import TeamMemberModal from "./TeamMemberModal";
import NavigationDots from "./NavigationDots";
import type { TeamMemberType } from "../../types/team";
import { teamMembers } from "../../data/teamMembers";
import { useSlider } from "../../hooks/useSlider";

export default function TeamGallerySlider({
  selectedMember,
  setSelectedMember,
}) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);

  const itemsPerPage = isMobile ? 1 : 4;

  const {
    currentPage,
    totalPages,
    canScrollLeft,
    canScrollRight,
    scrollToPage,
    handleScroll,
  } = useSlider(sliderRef, itemsPerPage);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Touch and drag handlers
  const handleDragStart = (_: any, info: PanInfo) => {
    setDragStartX(info.point.x);
  };

  const handleDragEnd = (_: any, info: PanInfo) => {
    const dragEndX = info.point.x;
    const dragThreshold = 50;
    const dragDelta = dragStartX - dragEndX;

    if (Math.abs(dragDelta) > dragThreshold) {
      if (dragDelta > 0 && canScrollRight) {
        scrollToPage(currentPage + 1);
      } else if (dragDelta < 0 && canScrollLeft) {
        scrollToPage(currentPage - 1);
      }
    }
  };

  const renderNavigationButton = (
    direction: "left" | "right",
    onClick: () => void,
    show: boolean
  ) => (
    <motion.button
      key={`nav-${direction}`}
      initial={{ opacity: 0, x: direction === "left" ? 20 : -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction === "left" ? 20 : -20 }}
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 ${
        direction === "left" ? "left-0 -translate-x-6" : "right-0 translate-x-6"
      } z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center
        hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#46B7C6]
        md:flex ${isMobile ? "hidden" : ""}`}
      aria-label={
        direction === "left" ? "Poprzednia strona" : "Następna strona"
      }
    >
      {direction === "left" ? (
        <ChevronLeft className="h-6 w-6 text-gray-600" />
      ) : (
        <ChevronRight className="h-6 w-6 text-gray-600" />
      )}
    </motion.button>
  );

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      <AnimatePresence mode="wait">
        {canScrollLeft &&
          renderNavigationButton(
            "left",
            () => scrollToPage(currentPage - 1),
            canScrollLeft
          )}
        {canScrollRight &&
          renderNavigationButton(
            "right",
            () => scrollToPage(currentPage + 1),
            canScrollRight
          )}
      </AnimatePresence>

      {/* Slider Container */}
      <motion.div
        ref={sliderRef}
        className="overflow-x-hidden scroll-smooth touch-pan-x"
        onScroll={handleScroll}
        drag={isMobile ? "x" : false}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div
          className={`flex gap-8 transition-transform duration-500 px-4 ${
            isMobile ? "snap-x snap-mandatory" : ""
          }`}
        >
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`flex-none ${
                isMobile ? "w-full snap-center" : "w-[calc(25%-24px)]"
              }`}
            >
              <TeamMember member={member} onSelect={setSelectedMember} />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Navigation Dots */}
      <NavigationDots
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={scrollToPage}
      />

      {/* Modal */}
    </div>
  );
}
