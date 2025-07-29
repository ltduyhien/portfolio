import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LightboxProps {
  isOpen: boolean;
  imageSrc: string;
  imageAlt: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ isOpen, imageSrc, imageAlt, onClose }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const checkScrollable = () => {
      if (scrollContainerRef.current) {
        const { scrollHeight, clientHeight, scrollTop } = scrollContainerRef.current;
        const isScrollable = scrollHeight > clientHeight;
        setShowScrollIndicator(isScrollable);

        if (isScrollable) {
          const atBottom = scrollTop + clientHeight >= scrollHeight - 10;
          setIsAtBottom(atBottom);
        }
      }
    };

    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollHeight, clientHeight, scrollTop } = scrollContainerRef.current;
        const atBottom = scrollTop + clientHeight >= scrollHeight - 10;
        setIsAtBottom(atBottom);
      }
    };

    // Trap scroll inside the container
    const handleWheel = (e: WheelEvent) => {
      const el = scrollContainerRef.current;
      if (!el) return;
      const { scrollTop, scrollHeight, clientHeight } = el;
      const isAtTop = scrollTop === 0;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
      if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
        e.preventDefault();
      }
    };

    if (isOpen) {
      // Check after image loads
      const img = new Image();
      img.onload = () => {
        setTimeout(checkScrollable, 200);
      };
      img.src = imageSrc;

      // Add scroll listener with passive option
      const container = scrollContainerRef.current;
      if (container) {
        container.addEventListener('scroll', handleScroll, { passive: true });
        container.addEventListener('wheel', handleWheel, { passive: false });
      }

      // Also check on window resize
      window.addEventListener('resize', checkScrollable);

      return () => {
        if (container) {
          container.removeEventListener('scroll', handleScroll);
          container.removeEventListener('wheel', handleWheel);
        }
        window.removeEventListener('resize', checkScrollable);
      };
    }
  }, [isOpen, imageSrc]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative max-h-[90vh] max-w-[90vw] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {imageAlt && (
              <div className="bg-black/60 backdrop-blur-sm text-white p-4 rounded-t-lg rounded-b-lg">
                <p className="text-lg font-medium text-center">{imageAlt}</p>
              </div>
            )}
            <div
              ref={scrollContainerRef}
              className="force-scrollbar overflow-y-scroll max-h-[calc(90vh-120px)] bg-white dark:bg-zinc-900 rounded-b-lg overflow-hidden relative"
              style={{ scrollbarWidth: 'auto', msOverflowStyle: 'scrollbar' }}
            >
              <img
                src={imageSrc}
                alt={imageAlt}
                className="max-w-full object-contain shadow-2xl select-none pointer-events-none rounded-b-lg"
                style={
                  {
                    WebkitUserSelect: 'none',
                    WebkitTouchCallout: 'none',
                    userSelect: 'none',
                    touchAction: 'none',
                  } as React.CSSProperties
                }
              />
            </div>
            {showScrollIndicator && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white p-2 rounded-full shadow-lg pointer-events-none"
              >
                <div
                  style={{
                    transform: isAtBottom ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s',
                  }}
                >
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={isAtBottom ? {} : { y: [0, 4, 0] }}
                    transition={
                      isAtBottom ? {} : { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
                    }
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </motion.svg>
                </div>
              </motion.div>
            )}
            <button
              onClick={onClose}
              className="absolute -top-4 -right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
