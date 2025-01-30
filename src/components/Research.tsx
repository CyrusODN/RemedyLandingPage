import { TestTube2, BookOpen } from "lucide-react";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Research() {
  const { t } = useTranslation();

  return (
    <section
      id="research"
      className="py-20 bg-gradient-to-r from-[#4A90B9]/5 to-[#68BFB3]/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("Innovations and Research")}
            </h2>
            <div className="h-1 w-20 gradient-theme mx-auto rounded-full" />
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger">
          <ScrollAnimationWrapper animation="scale-up">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <TestTube2 className="h-6 w-6 text-[#46B7C6] mr-3" />
                {t("New Opportunities")}
              </h3>
              <div className="space-y-4">
                <div className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-medium text-gray-900 mb-2">
                    {t("Current Clinical Trials")}
                  </h4>
                  <p className="text-gray-600">
                    {t(
                      "Check the ongoing clinical trials in your area and the opportunities to participate."
                    )}
                  </p>
                </div>
                <div className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-medium text-gray-900 mb-2">
                    {t("Participation Criteria")}
                  </h4>
                  <p className="text-gray-600">
                    {t(
                      "Learn about the criteria and process of qualification for clinical trials."
                    )}
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="scale-up">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <BookOpen className="h-6 w-6 text-[#46B7C6] mr-3" />
                {t("Publications and Collaboration")}
              </h3>
              <div className="space-y-4">
                <div className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-medium text-gray-900 mb-2">
                    {t("Research Partnerships")}
                  </h4>
                  <p className="text-gray-600">
                    {t("We collaborate with leading research centers.")}
                  </p>
                </div>
                <div className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-medium text-gray-900 mb-2">
                    {t("Scientific Publications")}
                  </h4>
                  <p className="text-gray-600">
                    {t(
                      "Explore publications on the molecules with the greatest therapeutic potential."
                    )}
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>

        <ScrollAnimationWrapper animation="fade-up" className="mt-16">
          <div className="gradient-theme rounded-xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">
              {t("Join Clinical Trials")}
            </h3>
            <p className="mb-6">
              {t(
                "Contribute to research on new potential treatment possibilities in psychiatry."
              )}
            </p>
            <Link
              to="/clinical-trials"
              className="inline-block bg-white text-[#46B7C6] px-8 py-3 rounded-full font-medium 
                hover:shadow-lg transition-all duration-300"
            >
              {t("Explore Opportunities")}
            </Link>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
