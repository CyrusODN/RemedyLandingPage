import React, { Suspense, useState } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { ArrowLeft, Mail, Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Logo = () => (
  <svg width="100%" height="100%" viewBox="0 0 5563 1373" className="w-48">
    <g transform="matrix(1,0,0,1,-5776,-4887)">
      <g transform="matrix(0.667511,0,0,0.164628,5776.11,4887.65)">
        <g transform="matrix(5.37388,0,0,21.7893,-1090.81,-17616.5)">
          <g transform="matrix(0.24,0,0,0.24,201.685,799.993)">
            <path
              d="M1176.72,647.641C1176.72,520.486 1071.36,433.997 962.572,433.997L508.093,433.997L508.093,501.548L962.572,501.548C1052.44,501.548 1108,568.887 1108,647.641C1108,726.396 1052.44,793.031 962.572,793.031L739.176,793.031L739.176,860.518L776.001,860.518L1049.64,1232.67L1128.38,1232.67L858.779,860.518L962.572,860.518C1071.36,860.518 1176.72,774.796 1176.72,647.641ZM2008.04,860.216L1940.37,860.216L1940.37,1232.67L2008.04,1232.67L2008.04,860.216ZM2680.33,434.531L2680.33,1232.67L2747.29,1232.67L2747.29,434.531L2680.33,434.531ZM1290.37,1165.14L1795.27,1165.14L1795.27,1232.67L1290.37,1232.67L1290.37,1165.14ZM2896.35,1165.14L3401.24,1165.14L3401.24,1232.67L2896.35,1232.67L2896.35,1165.14ZM4376.53,434.216L4294.35,434.216L4616.69,953.293L4618,1232.57L4690.89,1232.57L4689.89,952.251L4376.53,434.216ZM3863.28,434.531L3562.67,434.531L3562.67,501.428L3858.77,501.428C4082.51,501.428 4218.45,639.906 4218.45,833.951C4218.45,1028 4082.51,1165.05 3858.77,1165.05L3629.81,1165.05L3628.53,793.12L3562.67,793.12L3562.67,1232.57L3863.28,1232.57C4102.99,1232.57 4286.65,1073.66 4286.65,833.951C4286.65,594.239 4102.99,434.531 3863.28,434.531ZM4936.71,434.216L4688.72,837.117L4726.23,895.347L5013.63,434.216L4936.71,434.216ZM1940.37,793.12L2008.04,793.12L2008.04,541.222L2335.89,860.312L2355.88,860.312L2613.16,609.034L2613.16,513.295L2346.37,777.72L2008.04,434.531L1940.37,434.531L1940.37,793.12ZM1290.37,793.12L1763,793.12L1763,860.312L1290.37,860.312L1290.37,793.12ZM2896.35,793.12L3368.97,793.12L3368.97,860.312L2896.35,860.312L2896.35,793.12ZM1290.37,433.997L1795.27,433.997L1795.27,501.524L1290.37,501.524L1290.37,433.997ZM2896.35,433.997L3401.24,433.997L3401.24,501.524L2896.35,501.524L2896.35,433.997Z"
              style={{ fill: "rgb(13,13,13)", fillRule: "nonzero" }}
            />
          </g>
          <g transform="matrix(0.24,0,0,0.24,-147.422,-2001.1)">
            <path
              d="M2028.91,12464.3L2028.91,12360.6L1961.38,12360.6L1961.38,12464.3L1857.65,12464.3L1857.65,12531.9L1961.38,12531.9L1961.38,12635.6L2028.91,12635.6L2028.91,12531.9L2132.65,12531.9L2132.65,12464.3L2028.91,12464.3Z"
              style={{ fill: "url(#_Linear1)" }}
            />
          </g>
          <g transform="matrix(0.278775,0,0,0.278775,218.948,767.68)">
            <path
              d="M4667.74,489.542L4627.92,489.542L4311.62,1177.11L4377.26,1177.11L4651.92,573.995L4888.16,1119.76L4647.83,1119.76L4631.24,1177.12L4979.54,1177.12L4979.53,1177.11L4984.04,1177.11L4667.74,489.542ZM5133.98,1177.11L5076.22,1177.11L5076.22,489.542L5133.98,489.542L5133.98,1177.11Z"
              style={{ fill: "url(#_Linear2)", fillRule: "nonzero" }}
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <linearGradient
        id="_Linear1"
        x1="0"
        y1="0"
        x2="1"
        y2="0"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(274.998,0,0,-275.002,1857.65,12498.1)"
      >
        <stop
          offset="0"
          style={{ stopColor: "rgb(61,151,197)", stopOpacity: 1 }}
        />
        <stop
          offset="1"
          style={{ stopColor: "rgb(79,215,199)", stopOpacity: 1 }}
        />
      </linearGradient>
      <linearGradient
        id="_Linear2"
        x1="0"
        y1="0"
        x2="1"
        y2="0"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(822.362,0,0,-687.589,4311.61,833.334)"
      >
        <stop
          offset="0"
          style={{ stopColor: "rgb(61,151,197)", stopOpacity: 1 }}
        />
        <stop
          offset="1"
          style={{ stopColor: "rgb(79,215,199)", stopOpacity: 1 }}
        />
      </linearGradient>
    </defs>
  </svg>
);
const InputField = ({
  icon: Icon,
  type,
  placeholder,
  id,
}: {
  icon: React.ElementType;
  type: string;
  placeholder: string;
  id: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="relative"
  >
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <Icon className="h-5 w-5 text-gray-400" />
    </div>
    <input
      type={type}
      id={id}
      className="w-full pl-10 pr-4 py-3 bg-white/50 border-2 border-gray-100 rounded-xl
        focus:ring-2 focus:ring-[#46B7C6] focus:border-transparent transition-all
        hover:border-gray-200 placeholder-gray-400"
      placeholder={placeholder}
    />
  </motion.div>
);

export default function PatientPortal() {
  const [splineError, setSplineError] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
          <Link
            to="/"
            className="h-full flex items-center text-[#46B7C6] hover:text-[#3A8A9E] transition-colors gap-2"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm sm:text-base">
              {t("Back to the main page")}
            </span>
          </Link>
        </div>
      </motion.div>

      {/* Split Screen Layout */}
      <div className="flex flex-col lg:flex-row min-h-screen pt-16">
        {/* Left Side - Login Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-8 order-2 lg:order-1"
        >
          <div className="w-full max-w-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex justify-center mb-8"
            >
              <Logo />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-gray-100"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                {t("Patient Portal")}
              </h2>

              <div className="space-y-4">
                <InputField
                  icon={Mail}
                  type="email"
                  placeholder={t("your@email.com")}
                  id="email"
                />

                <InputField
                  icon={Lock}
                  type="password"
                  placeholder={t("••••••••")}
                  id="password"
                />

                <div className="flex items-center justify-between text-sm flex-wrap gap-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 text-[#46B7C6] 
                        focus:ring-[#46B7C6] transition-colors"
                    />
                    <span className="ml-2 text-gray-600">
                      {t("Remember me")}
                    </span>
                  </label>
                  <a
                    href="#"
                    className="text-[#46B7C6] hover:text-[#3A8A9E] transition-colors font-medium"
                  >
                    {t("Forgot password?")}
                  </a>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full gradient-theme text-white py-3 rounded-xl
                    hover:shadow-lg transition-all duration-300 font-medium
                    flex items-center justify-center gap-2 group mt-6"
                >
                  <span>{t("Log in")}</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-center mt-6 text-sm text-gray-500"
            >
              {t("Don't have an account yet?")}{" "}
              <a
                href="#"
                className="text-[#46B7C6] hover:text-[#3A8A9E] transition-colors font-medium"
              >
                {t("Sign up")}
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Spline Animation */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 h-[40vh] lg:h-[calc(100vh-4rem)] relative bg-gradient-to-bl from-[#46B7C6]/5 to-[#3A8A9E]/5 order-1 lg:order-2"
        >
          <Suspense fallback={<LoadingSpinner />}>
            {splineError ? (
              <div className="h-full w-full flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-600 mb-4">
                    {t("Failed to load the visualization")}
                  </p>
                  <button
                    onClick={() => setSplineError(false)}
                    className="text-[#46B7C6] hover:text-[#3A8A9E] transition-colors"
                  >
                    {t("Try again")}
                  </button>
                </div>
              </div>
            ) : (
              <Spline
                scene="https://prod.spline.design/YiUlKTUodeiP5DzV/scene.splinecode"
                onError={() => setSplineError(true)}
                className="w-full h-full"
              />
            )}
          </Suspense>
        </motion.div>
      </div>
    </div>
  );
}

const LoadingSpinner = () => (
  <div className="h-full w-full flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#46B7C6]"></div>
  </div>
);
