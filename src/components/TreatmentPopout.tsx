import { useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

interface TreatmentPopoutProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: {
    description: string;
    details: string[];
    process: string[];
    benefits: string[];
  };
}

export default function TreatmentPopout({
  isOpen,
  onClose,
  title,
  content,
}: TreatmentPopoutProps) {
  const { t } = useTranslation();

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="min-h-screen px-4 flex items-center justify-center">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={onClose}
              aria-hidden="true"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl my-8"
            >
              {/* Close button - fixed position */}
              <div className="absolute right-4 top-4 z-10">
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label={t("Close")}
                >
                  <X className="h-6 w-6 text-gray-500" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 pr-12 mb-6">
                  {t(title)}
                </h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-gray-600">{t(content.description)}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      {t("Details")}
                    </h4>
                    <ul className="space-y-2">
                      {content.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#46B7C6] rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-600">{t(detail)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      {t("Process")}
                    </h4>
                    <ul className="space-y-2">
                      {content.process.map((step, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#46B7C6] rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-600">{t(step)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      {t("Benefits")}
                    </h4>
                    <ul className="space-y-2">
                      {content.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#46B7C6] rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-600">{t(benefit)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    onClick={onClose}
                    className="w-full gradient-theme text-white px-6 py-3 rounded-xl
                      hover:shadow-lg transition-all duration-300 font-medium"
                  >
                    {t("Close")}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
