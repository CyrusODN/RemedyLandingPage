import { useState } from "react";
import { Briefcase, GraduationCap, Heart, TrendingUp } from "lucide-react";
import JobApplicationModal from "./JobApplicationModal";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { useTranslation } from "react-i18next";

const benefits = [
  {
    icon: TrendingUp,
    title: "Professional Development",
    description:
      "Continuous training and development opportunities in an innovative environment",
  },
  {
    icon: Heart,
    title: "Work Atmosphere",
    description: "A welcoming environment with expert team support.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Access to the latest research and medical technologies",
  },
  {
    icon: Briefcase,
    title: "Stability",
    description: "Attractive employment conditions and a clear career path",
  },
];

export default function JoinUs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <section
      id="join-us"
      className="py-20 bg-gradient-to-r from-[#3D97C5]/5 to-[#35ABC7]/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 gradient-text animate-glow">
              {t("Join us!")}
            </h2>
            <div className="h-1 w-20 gradient-theme mx-auto rounded-full" />
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
              {t(
                "We are looking for ambitious professionals who want to grow in an innovative medical environment"
              )}
            </p>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl 
                  transition-all duration-300 border border-gray-100"
              >
                <div
                  className="w-12 h-12 gradient-theme rounded-full 
                  flex items-center justify-center mb-4"
                >
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t(benefit.title)}
                </h3>
                <p className="text-gray-600">{t(benefit.description)}</p>
              </div>
            ))}
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fade-up">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t("Are you a mental health specialist?")}
              </h3>
              <p className="text-gray-600 mb-8">
                {t("Join our team and co-create the future of psychiatry.")}
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="gradient-theme text-white px-8 py-3 rounded-full
                  hover:shadow-lg transition-all duration-300 font-medium"
              >
                {t("Apply Now")}
              </button>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>

      <JobApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
