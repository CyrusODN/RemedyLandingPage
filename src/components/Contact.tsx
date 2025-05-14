import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin } from "lucide-react";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-[#3D97C5]/5 to-[#35ABC7]/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t( "Contact" )}
            </h2>
            <div className="h-1 w-20 gradient-theme mx-auto rounded-full" />
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 gradient-theme rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {t( "Address" )}
                </h3>
                <p className="text-gray-600">
                  {t( "ul. Generała Józefa Bema 15/1" )}
                </p>
                <p className="text-gray-600">{t( "81-386 Gdynia" )}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 gradient-theme rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {t( "Phone" )}
                </h3>
                {/* <p className="text-gray-600">+48 724 733 713</p> */}

                <a href="tel:+48724733713" className="text-gray-600 hover:underline">
                  +48 724 733 713
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 gradient-theme rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {t( "Email" )}
                </h3>
                {/* <p className="text-gray-600">kontakt@remedy.com.pl</p> */}
                <a
                  href="mailto:kontakt@remedy.com.pl?subject=Inquiry&body=Hello, I would like to know more about..."
                  className="text-gray-600 hover:underline"
                >
                  kontakt@remedy.com.pl
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
