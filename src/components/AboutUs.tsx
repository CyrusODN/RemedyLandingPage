import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Shield, Users, Trophy, Heart } from "lucide-react";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import TeamGallery from "./team/TeamGallery";
import TeamMemberModal from "./team/TeamMemberModal";
import { teamMembers } from "../data/teamMembers";
import { TeamMemberType } from "../types/team";

const values = [
  {
    icon: Shield,
    title: "Safety",
    description:
      "Providing the highest standards of patient care and safety.",
  },
  {
    icon: Users,
    title: "Team",
    description: "Experienced specialists with a passion for helping others",
  },
  {
    icon: Trophy,
    title: "Excellence",
    description: "Ongoing skill development and continuous improvement.",
  },
  {
    icon: Heart,
    title: "Empathy",
    description: "Individual approach to each patient",
  },
];

export default function AboutUs() {
  const { t } = useTranslation();
  const [selectedMember, setSelectedMember] = useState<TeamMemberType | null>(
    null
  );

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("About Us")}
            </h2>
            <div className="h-1 w-20 gradient-theme mx-auto rounded-full" />
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              {t(
                "Remedy is a modern psychiatric center combining innovative treatment methods with a holistic approach to mental health."
              )}
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <ScrollAnimationWrapper key={index} animation="scale-up">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 gradient-theme rounded-full flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t(value.title)}
                </h3>
                <p className="text-gray-600">{t(value.description)}</p>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>

        <ScrollAnimationWrapper animation="fade-up">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {t("Our Team")}
            </h2>
            <TeamGallery
              selectedMember={selectedMember}
              setSelectedMember={setSelectedMember}
            />
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fade-up">
          <div className="bg-gradient-to-r from-[#4A90B9] to-[#68BFB3] rounded-xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  {t("Our Mission")}
                </h3>
                <p className="mb-4">
                  {t(
                    "We strive to provide the highest quality psychiatric care, combining innovative treatment methods with an empathetic approach to the patient."
                  )}
                </p>
                <p>
                  {t(
                    "Our goal is not only treatment, but also education and prevention in the field of mental health."
                  )}
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  {t("Our Vision")}
                </h3>
                <p className="mb-4">
                  {t(
                    "We want to be a leader in the field of innovative psychiatry, setting new standards in patient care."
                  )}
                </p>
                <p>
                  {t(
                    "We strive to create an environment in which each patient receives personalized, effective help."
                  )}
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
      <TeamMemberModal
        member={selectedMember}
        isOpen={!!selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </section>
  );
}
