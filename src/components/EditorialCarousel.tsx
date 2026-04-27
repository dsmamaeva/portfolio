import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Image {
  src: string;
  label: string;
}

interface EditorialCarouselProps {
  images: Image[];
}

const EditorialCarousel: React.FC<EditorialCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full flex flex-col gap-6 group/carousel">
      <div className="relative aspect-[3/4.2] w-full rounded-[3rem] overflow-hidden border border-brand-grey/5 bg-brand-offwhite shadow-sm">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].label}
              className="w-full h-full object-contain pointer-events-none"
            />
            

          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-vibrant-pink opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-white/20 z-20"
          onClick={() => paginate(-1)}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-vibrant-pink opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-white/20 z-20"
          onClick={() => paginate(1)}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-1.5 transition-all duration-300 rounded-full border border-brand-grey/5 ${
              currentIndex === index ? 'w-8 bg-brand-vibrant-pink' : 'w-4 bg-brand-grey/20 hover:bg-brand-grey/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default EditorialCarousel;
