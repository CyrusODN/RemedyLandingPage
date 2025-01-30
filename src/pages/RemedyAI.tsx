import { Suspense, useState } from "react";
import Spline from "@splinetool/react-spline";
import {
  ArrowLeft,
  Brain,
  Database,
  Network,
  Building2,
  TestTube2,
  User,
  ArrowRight,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import ScrollAnimationWrapper from "../components/ScrollAnimationWrapper";
import DemoRequestModal from "../components/DemoRequestModal";
import { useTranslation } from "react-i18next";
const Logo = () => (
  <svg width="100%" height="100%" viewBox="0 0 5563 1373" className="h-16">
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

const solutions = [
  {
    icon: User,
    title: "For Specialists",
    description: "Overlay on existing medical software",
    features: [
      "Compatibility with all EDM systems",
      "Intuitive interface",
      "Faster documentation management",
      "Integration with popular tools",
    ],
  },
  {
    icon: Building2,
    title: "For Medical Institutions",
    description: "Dedicated AI-powered EDM system",
    features: [
      "Automation of administrative processes",
      "Support for the entire staff",
      "Reduction in formalities time",
      "Tailored solution",
    ],
  },
  {
    icon: TestTube2,
    title: "For Research Centers",
    description: "Set of personalized AI tools",
    features: [
      "Optimization of research processes",
      "Management of estimates and finances",
      "Streamlining recruitment for studies",
      "Flexible adaptation to needs",
    ],
  },
];

const features = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Advanced algorithms supporting decision-making processes",
  },
  {
    icon: Database,
    title: "Knowledge Base",
    description: "Systematic organization of medical data",
  },
  {
    icon: Network,
    title: "Integration",
    description: "Seamless collaboration with existing systems",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Highest data protection standards",
  },
];

export default function RemedyAI() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-12">
          <Link
            to="/"
            className="text-[#46B7C6] hover:text-[#3A8A9E] transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="h-5 w-5" />
            {t("Back to Home Page")}
          </Link>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <ScrollAnimationWrapper animation="fade-up">
              <Logo />
              <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-6">
                {t("Modern Software for Medicine")}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {t(
                  "Remedy AI is an advanced solution supporting various aspects of medical practice, combining technological innovations with practical support in daily practice."
                )}
              </p>
            </ScrollAnimationWrapper>
          </div>
          <div className="h-[400px]">
            <Suspense fallback={<LoadingSpinner />}>
              <Spline scene="https://prod.spline.design/YiUlKTUodeiP5DzV/scene.splinecode" />
            </Suspense>
          </div>
        </div>

        {/* Solutions Section */}
        <section className="mb-20">
          <ScrollAnimationWrapper animation="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {t("Solutions Tailored to Your Needs")}
            </h2>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <ScrollAnimationWrapper key={index} animation="scale-up">
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 gradient-theme rounded-full flex items-center justify-center mb-6">
                    <solution.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {t(solution.title)}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {t(solution.description)}
                  </p>
                  <ul className="space-y-3">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#46B7C6] rounded-full" />
                        <span className="text-gray-600">{t(feature)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-20">
          <ScrollAnimationWrapper animation="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {t("Key Features")}
            </h2>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ScrollAnimationWrapper key={index} animation="scale-up">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 gradient-theme rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {t(feature.title)}
                  </h3>
                  <p className="text-gray-600">{t(feature.description)}</p>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </section>

        {/* Demo Request Section */}
        <ScrollAnimationWrapper animation="fade-up">
          <section className="bg-gradient-to-r from-[#4A90B9] to-[#68BFB3] rounded-xl p-8 text-white mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {t("Interested in a Demo?")}
                </h2>
                <p className="mb-6">
                  {t(
                    "Schedule a presentation of the system and discover the capabilities of Remedy AI in practice."
                  )}
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-[#46B7C6] px-8 py-3 rounded-full
                    hover:shadow-lg transition-all duration-300 font-medium flex items-center gap-2 group"
                >
                  <span>{t("Request a Demo")}</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="text-right">
                <p className="text-lg font-medium mb-2">
                  {t("Available Versions:")}
                </p>
                <ul className="space-y-2">
                  <li>• {t("For Specialists")}</li>
                  <li>• {t("For Medical Institutions")}</li>
                  <li>• {t("For Research Centers")}</li>
                </ul>
              </div>
            </div>
          </section>
        </ScrollAnimationWrapper>
      </div>

      <DemoRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

const LoadingSpinner = () => (
  <div className="h-full w-full flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#46B7C6]"></div>
  </div>
);
