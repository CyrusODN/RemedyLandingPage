import { Suspense } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { useTranslation } from "react-i18next";

const Logo = () => (
  <motion.svg
    width="100%"
    height="100%"
    viewBox="0 0 5418 5418"
    className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20"
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
              style={{ fill: "#46B7C6" }}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </g>
          <g transform="matrix(0.24,0,0,0.24,-147.422,-2001.1)">
            <motion.path
              d="M2028.91,12464.3L2028.91,12360.6L1961.38,12360.6L1961.38,12464.3L1857.65,12464.3L1857.65,12531.9L1961.38,12531.9L1961.38,12635.6L2028.91,12635.6L2028.91,12531.9L2132.65,12531.9L2132.65,12464.3L2028.91,12464.3Z"
              style={{ fill: "#46B7C6" }}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
            />
          </g>
        </g>
      </g>
    </g>
  </motion.svg>
);

const LoadingSpinner = () => (
  <div className="h-full w-full flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#46B7C6]"></div>
  </div>
);

function Hero() {
  const { t } = useTranslation();

  return (
    <div
      className="relative min-h-[100svh] bg-white flex items-center overflow-hidden"
      id="hero"
    >
      {/* Content Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative py-20 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div
            className="text-center md:text-left relative z-20 bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-0 md:bg-transparent md:backdrop-blur-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex justify-center md:justify-start mb-6 sm:mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Logo />
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-[#46B7C6]">{t("Your path")}</span>{" "}
              {t("to mental")}{" "}
              <span className="text-[#46B7C6]">{t("health")}</span>{" "}
              <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                {t("starts")}
                {"  "}
                <span className="text-[#46B7C6]">{t("here")}</span>{" "}
              </span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t(
                "Discover a modern approach to mental health. At Remedy, we combine empathy and experience with innovative technology to provide you the best possible care."
              )}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start md:flex-wrap lg:flex-nowrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium text-gray-600">
                  {t("For Patients")}
                </span>
                <motion.a
                  href="#treatment"
                  className="gradient-theme text-white px-6 sm:px-6 md:px-4 lg:px-6 py-2.5 rounded-full
                    hover:shadow-lg transition-all duration-300 font-medium text-base
                    inline-flex items-center justify-center min-h-[44px]
                    w-full sm:w-auto whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("Start Treatment")}
                </motion.a>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium text-gray-600">
                  {t("For Professionals")}
                </span>
                <Link
                  to="/remedy-ai"
                  className="w-full sm:w-auto bg-white text-[#46B7C6] border-2 border-[#46B7C6] 
                    px-6 sm:px-6 md:px-4 lg:px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 
                    font-medium text-base inline-flex items-center justify-center
                    min-h-[44px] whitespace-nowrap"
                >
                  {t("Learn about Remedy AI")}
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Spline Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden md:block h-[650px] lg:h-[780px] w-full relative scale-125 -mr-20"
          >
            <Suspense fallback={<LoadingSpinner />}>
              <Spline
                scene="https://prod.spline.design/btgIAMJ3hCSubojc/scene.splinecode"
                className="w-full h-full"
              />
            </Suspense>
          </motion.div>
        </div>
      </div>

      {/* Mobile Spline Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="md:hidden absolute inset-0 z-0 opacity-10 scale-125"
      >
        <Suspense fallback={<LoadingSpinner />}>
          <Spline
            scene="https://prod.spline.design/btgIAMJ3hCSubojc/scene.splinecode"
            className="w-full h-full"
          />
        </Suspense>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-white to-transparent z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      />
    </div>
  );
}

export default Hero;
