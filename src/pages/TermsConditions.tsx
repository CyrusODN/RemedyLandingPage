import { useTranslation } from "react-i18next";

const TermsConditions = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 pt-20" id="terms">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-[#46b7c6]">
          {t("Terms and Conditions")}
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
            "Welcome to Remedy, a platform connecting patients with healthcare providers. These Terms and Conditions govern your access to and use of our website, services, and application. By using our website or services, you agree to comply with these Terms."
          )}
        </p>
        <p className="text-gray-800 mt-4">
          {t(
            "If you do not agree with these Terms, you must immediately stop using the website or services."
          )}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#46b7c6]">
          {t("Eligibility")}
        </h2>
        <p className="text-gray-800">
          {t(
            "To use our services, you must be at least 18 years old and have the legal capacity to enter into binding agreements. By accessing or using the website, you represent and warrant that you meet these eligibility criteria."
          )}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#46b7c6]">
          {t("Services Provided")}
        </h2>
        <p className="text-gray-800">
          {t(
            "Our platform allows patients to create profiles, schedule appointments, and manage health information. Healthcare providers can create accounts, manage patient medical records, and provide consultations through our system. We do not provide direct medical services or advice."
          )}
        </p>
        <p className="mt-4 text-gray-800">
          {t(
            "All medical services, advice, and consultations are provided by licensed healthcare professionals, and Remedy is not responsible for the medical services provided."
          )}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#46b7c6]">
          {t("Account Registration")}
        </h2>
        <p className="text-gray-800">
          {t(
            "To use certain features of our website, you must create an account. You agree to provide accurate, current, and complete information during the registration process and to update this information to keep it accurate and complete. You are responsible for maintaining the confidentiality of your account login credentials."
          )}
        </p>
        <p className="text-gray-800 mt-4">
          {t(
            "You agree to promptly notify us of any unauthorized use of your account or other security breaches."
          )}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#46b7c6]">
          {t("Patient Responsibilities")}
        </h2>
        <p className="text-gray-800">
          {t(
            "Patients are responsible for providing accurate and current personal information, including medical history and current health status. You are responsible for ensuring the security of your login information and informing us of any changes in your health status or personal information."
          )}
        </p>
        <p className="text-gray-800 mt-4">
          {t(
            "Do not rely on the information provided through our platform as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or another qualified healthcare provider for any questions regarding your health condition."
          )}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#46b7c6]">
          {t("Healthcare Provider Responsibilities")}
        </h2>
        <p className="text-gray-800">
          {t(
            "As a healthcare provider, you agree to provide professional medical care in accordance with applicable laws, regulations, and practice standards. You are responsible for ensuring that the health information you provide on our platform is accurate and current."
          )}
        </p>
        <p className="text-gray-800 mt-4">
          {t(
            "You acknowledge that you are the sole provider of medical services, and Remedy is not responsible for any medical services or outcomes. You agree to comply with all applicable healthcare regulations, including those related to patient confidentiality and data protection."
          )}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#46b7c6]">
          {t("Use of Website and Services")}
        </h2>
        <p className="text-gray-800">
          {t(
            "You agree to use our website and services only for lawful purposes. You may not use our platform for the following purposes:"
          )}
        </p>
        <ul className="list-disc pl-6 text-gray-800">
          <li>{t("Violate any applicable laws.")}</li>
          <li>
            {t(
              "Impersonate any person or entity or falsely represent your affiliation with any person or entity."
            )}
          </li>
          <li>
            {t(
              "Transmit any unlawful, harassing, defamatory, or obscene content."
            )}
          </li>
          <li>
            {t(
              "Disrupt or destroy the integrity or functionality of our website or services."
            )}
          </li>
          <li>
            {t(
              "Take any actions that may damage, disable, overburden, or impair our platform."
            )}
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#46b7c6]">
          {t("Privacy and Data Protection")}
        </h2>
        <p className="text-gray-800">
          {t(
            "Your privacy is important to us. We collect, store, and process personal data in accordance with our "
          )}
          <a href="/privacy-policy" className="text-[#46b7c6]">
            {t("Privacy Policy")}
          </a>
          {t(
            ", which is an integral part of these Terms. By using our services, you consent to the collection, use, and sharing of your information as described in the Privacy Policy."
          )}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#46b7c6]">
          {t("Limitation of Liability")}
        </h2>
        <p className="text-gray-800">
          {t(
            "Remedy is not liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of your use of our platform, services, or content, even if we have been advised of the possibility of such damages."
          )}
        </p>
        <p className="text-gray-800 mt-4">
          {t(
            "We do not guarantee the accuracy, completeness, or timeliness of the information provided on our website, and we are not responsible for any errors or omissions in the content."
          )}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#46b7c6]">
          {t("Disclaimer of Warranties")}
        </h2>
        <p className="text-gray-800">
          {t(
            "You agree to indemnify and hold harmless Remedy, its directors, employees, agents, and affiliates from any claims, damages, liabilities, and costs (including reasonable legal fees) arising from or in connection with your use of the website and services."
          )}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#46b7c6]">
          {t("Termination")}
        </h2>
        <p className="text-gray-800">
          {t(
            "We reserve the right to suspend or terminate your account and access to our website and services at any time, with or without cause, and with or without notice, if we believe you have violated these Terms or engaged in activities harmful to our platform."
          )}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#46b7c6]">
          {t("Governing Law")}
        </h2>
        <p className="text-gray-800">
          {t(
            "These Terms are governed by the laws of [Your Jurisdiction] and are construed in accordance with those laws, without regard to its conflict of law provisions. Any disputes arising from or related to these Terms shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction]."
          )}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#46b7c6]">
          {t("Changes to the Terms")}
        </h2>
        <p className="text-gray-800">
          {t(
            "We reserve the right to update or modify these Terms at any time. Any changes will be posted on this page, and the modified Terms will take effect immediately upon posting. We encourage you to review this page periodically to check for updates."
          )}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#46b7c6]">
          {t("Contact")}
        </h2>
        <p className="text-gray-800">
          {t(
            "If you have any questions or concerns regarding these Terms and Conditions, please contact us:"
          )}
        </p>
        <p className="text-gray-800">Email: kontakt@remedy.com.pl</p>
        <p className="text-gray-800">Phone: +48 724 733 713</p>
      </section>
    </div>
  );
};

export default TermsConditions;
