import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next"; // Added import

interface TrialDetailsModalProps {
  trial: any; // Temporarily using any while we fix the data structure
  onClose: () => void;
  onRegister: () => void;
}

export default function TrialDetailsModal({
  trial,
  onClose,
  onRegister,
}: TrialDetailsModalProps) {
  const { t } = useTranslation(); // Added useTranslation hook

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="min-h-screen px-4 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl my-8"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>

            <div className="p-8">
              <div className="mb-8">
                <div className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 bg-[#E5F6FD] text-[#0EA5E9]">
                  {
                    trial?.trailData?.protocolSection?.statusModule
                      ?.overallStatus
                  }
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {
                    trial?.trailData?.protocolSection?.descriptionModule
                      ?.briefSummary
                  }
                </h2>
                <p className="text-gray-600">
                  {
                    trial?.trailData?.protocolSection?.descriptionModule
                      ?.detailedDescription
                  }
                </p>{" "}
                {/* Wrapped in t */}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    {t("Study Details")} {/* Translated */}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-[#46B7C6] mt-1" />
                      <div>
                        <p className="font-medium">{t("Location")}</p>{" "}
                        {/* Translated */}
                        <p className="text-gray-600">
                          {trial?.trailData?.protocolSection
                            ?.contactsLocationsModule?.centralContacts?.length >
                            0 &&
                            trial?.trailData?.protocolSection
                              ?.contactsLocationsModule?.centralContacts[0]
                              ?.name}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-[#46B7C6] mt-1" />
                      <div>
                        <p className="font-medium">{t("Start Date")}</p>{" "}
                        {/* Translated */}
                        <p className="text-gray-600">
                          {
                            trial?.trailData?.protocolSection?.statusModule
                              ?.startDateStruct?.date
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">{t("Tags")}</h3>{" "}
                  {/* Translated */}
                  <div className="flex flex-wrap gap-2">
                    {trial?.trailData?.derivedSection?.conditionBrowseModule?.ancestors?.map(
                      (tag: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                        >
                          {tag?.term}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={onRegister}
                  className="flex-1 gradient-theme text-white px-6 py-3 rounded-xl
                    hover:shadow-lg transition-all duration-300 font-medium"
                >
                  {t("Apply for the study.")} {/* Translated */}
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-3 border-2 border-gray-200 rounded-xl
                    hover:border-gray-300 transition-colors font-medium"
                >
                  {t("Close")} {/* Translated */}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
