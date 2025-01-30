import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { useTranslation } from "react-i18next";

const team = [
  {
    name: "lek. Cyrus Tahery",
    role: "Doctor in psychiatric specialization",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    specialization: "Co-Founder Remedy, creator of Remedy AI",
  },
  {
    name: "dr n. med. Anna Kowalska",
    role: "Psychiatrist, Head of Clinic",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    specialization: "Affective disorders, Community psychiatry",
  },
  {
    name: "mgr Karolina Wiśniewska",
    role: "Clinical Psychologist",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    specialization: "Psychological diagnostics, Psychotherapy",
  },
  {
    name: "dr hab. Piotr Adamczyk",
    role: "Psychiatrist, Researcher",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    specialization: "Innovative therapies, Clinical research",
  },
];

export default function Team() {
  const { t } = useTranslation();

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("Team")}
            </h2>
            <div className="h-1 w-20 gradient-theme mx-auto rounded-full" />
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
              {t(
                "Our team consists of experienced specialists who combine medical knowledge with an empathetic approach to patients."
              )}
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <ScrollAnimationWrapper key={index} animation="scale-up">
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#46B7C6] font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.specialization}
                  </p>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>

        <ScrollAnimationWrapper animation="fade-up" className="mt-16">
          <div className="gradient-theme rounded-xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  {t("Join our team")}
                </h3>
                <p className="mb-6">
                  {t(
                    "We are looking for ambitious specialists who want to grow in an innovative medical environment."
                  )}
                </p>
                <button
                  className="bg-white text-[#46B7C6] px-8 py-3 rounded-full
                  hover:shadow-lg transition-all duration-300 font-medium"
                >
                  {t("See job offers")}
                </button>
              </div>
              <div className="text-right">
                <p className="text-lg font-medium mb-2">
                  {t("Current positions")}:
                </p>
                <ul className="space-y-2">
                  <li>• {t("Psychiatrist")}</li>
                  <li>• {t("Psychotherapist")}</li>
                  <li>• {t("Clinical Psychologist")}</li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
