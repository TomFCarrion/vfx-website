import { motion } from "framer-motion";

interface VideoReelProps {
  showReel: boolean;
  toggleReel: (e: React.MouseEvent) => void;
}

export default function VideoReel({ showReel, toggleReel }: VideoReelProps) {
  if (!showReel) return null;

  return (
    <motion.div
      className="absolute inset-0 bg-black flex items-center justify-center z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative w-full h-full md:w-4/5 md:h-4/5"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <iframe
          src="https://player.vimeo.com/video/1064462152?h=de9a7f4d73&autoplay=1&title=0&byline=0&portrait=0"
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
        <motion.button
          onClick={toggleReel}
          className="absolute cursor-pointer top-4 right-4 z-50 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75"
          aria-label="Close video"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
