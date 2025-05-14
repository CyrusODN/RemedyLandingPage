import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      {/* Tech background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute transform rotate-45"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 100 + 50}px`,
                  height: "1px",
                  background: "linear-gradient(90deg, #4A90B9, #68BFB3)",
                  opacity: Math.random() * 0.5 + 0.5,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Loading animation */}
      <div className="relative">
        {/* Logo */}
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 5418 5418"
          className="h-24 w-24"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <g transform="matrix(1,0,0,1,-5634,-22736)">
            <g transform="matrix(0.65,0,0,0.65,5634.67,22736.9)">
              <g transform="matrix(34.5223,0,0,34.5223,-9340.42,-30355.4)">
                <g transform="matrix(0.24,0,0,0.24,201.685,-2675.97)">
                  <motion.path
                    d="M1176.72,15130.8C1176.72,15003.7 1071.36,14917.2 962.572,14917.2L508.093,14917.2L508.093,14984.7L962.572,14984.7C1052.44,14984.7 1108,15052.1 1108,15130.8C1108,15209.6 1052.44,15276.2 962.572,15276.2L739.176,15276.2L739.176,15343.7L776.001,15343.7L1049.64,15715.8L1128.38,15715.8L858.779,15343.7L962.572,15343.7C1071.36,15343.7 1176.72,15258 1176.72,15130.8Z"
                    className="fill-[#46B7C6]"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </g>
                <g transform="matrix(0.24,0,0,0.24,-147.422,-2001.1)">
                  <motion.path
                    d="M2028.91,12464.3L2028.91,12360.6L1961.38,12360.6L1961.38,12464.3L1857.65,12464.3L1857.65,12531.9L1961.38,12531.9L1961.38,12635.6L2028.91,12635.6L2028.91,12531.9L2132.65,12531.9L2132.65,12464.3L2028.91,12464.3Z"
                    className="fill-[#46B7C6]"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                  />
                </g>
              </g>
            </g>
          </g>
        </motion.svg>

        {/* Gradient rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32">
          <div className="absolute inset-0 rounded-full gradient-theme opacity-20 animate-ping" />
          <div className="absolute inset-2 rounded-full gradient-theme opacity-40 animate-ping animation-delay-150" />
          <div className="absolute inset-4 rounded-full gradient-theme opacity-60 animate-ping animation-delay-300" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
