import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 pt-20" id="privacy">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-[#46b7c6]">
          {t("Privacy Policy")}
        </h1>
        <p className="text-gray-600 mt-2">
          {t("Effective date: 1 January 2024")}
        </p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold text-[#46b7c6]">
          {t("Introduction")}
        </h2>
        <p className="mt-4 text-gray-800">
          {t(
            "Remedy is committed to protecting your privacy. This Privacy Policy describes how we collect, use, store, and protect your personal data in accordance with the General Data Protection Regulation (GDPR)."
          )}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#46b7c6]">
          {t("Information We Collect")}
        </h2>
        <ul className="list-disc pl-6 text-gray-800">
          <li>
            <strong>{t("Personal Data:")}</strong>{" "}
            {t(
              "We collect personal data such as your first name, last name, email address, phone number, medical history, and other relevant health data."
            )}
          </li>
          <li>
            <strong>{t("Usage Data:")}</strong>{" "}
            {t(
              "We collect data about how you use our website, including your IP address, browser type, and the pages you visit."
            )}
          </li>
          <li>
            <strong>{t("Health Data:")}</strong>{" "}
            {t(
              "As a healthcare provider, we collect sensitive personal data, such as medical records, diagnoses, treatment plans, and other health-related information."
            )}
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#46b7c6]">
          {t("How We Use Your Data")}
        </h2>
        <p className="mt-4 text-gray-800">
          {t(
            "We use your personal data to provide you with high-quality healthcare services, communicate with you, process your inquiries and requests, and for analytical purposes to improve the quality of our services and tailor them to your needs."
          )}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#46b7c6]">
          {t("Data Security")}
        </h2>
        <p className="mt-4 text-gray-800">
          {t(
            "We take all reasonable measures to protect your personal data from unauthorized access, disclosure, alteration, or destruction. We use appropriate security technologies and organizational procedures to ensure the safety of your data."
          )}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#46b7c6]">
          {t("Your Rights")}
        </h2>
        <p className="mt-4 text-gray-800">
          {t(
            "Under the GDPR, you have the right to access your personal data, correct it, delete it, and restrict its processing. You also have the right to file a complaint with the supervisory authority if you believe the processing of your personal data violates the law."
          )}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#46b7c6]">
          {t("Contact")}
        </h2>
        <p className="mt-4 text-gray-800">
          {t(
            "If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at email: kontakt@remedy.com.pl."
          )}
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
