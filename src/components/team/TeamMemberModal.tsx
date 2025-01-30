import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { TeamMemberType } from "../../types/team";
import { useScrollLock } from "../../hooks/useScrollLock";
import { useTranslation } from "react-i18next";

interface TeamMemberModalProps {
  member: TeamMemberType;
  isOpen: boolean;
  onClose: () => void;
}

export default function TeamMemberModal({
  member,
  isOpen,
  onClose,
}: TeamMemberModalProps) {
  const { t } = useTranslation();
  const [isModalHovered, setIsModalHovered] = useState(false);
  useScrollLock(isOpen && isModalHovered);

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, handleEscape]);

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
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl my-8"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              onMouseEnter={() => setIsModalHovered(true)}
              onMouseLeave={() => setIsModalHovered(false)}
            >
              <button
                onClick={onClose}
                className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
                aria-label="Zamknij"
              >
                <X className="h-6 w-6 text-gray-500" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                {/* Image */}
                <div className="relative aspect-[5/6] rounded-xl overflow-hidden">
                  <img
                    src={member.imageLarge || member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="overflow-y-auto max-h-[70vh] pr-2 custom-scrollbar">
                  <h2
                    id="modal-title"
                    className="text-2xl font-bold text-gray-900 mb-2"
                  >
                    {member.name}
                  </h2>
                  <p className="text-[#46B7C6] font-medium mb-4">
                    {t(member.role)}
                  </p>

                  <div className="prose prose-sm max-w-none mb-6">
                    <p className="text-gray-600">{t(member.bio)}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {t("Specializations")}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {member.specializations.map((spec, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-[#46B7C6]/10 text-[#46B7C6] rounded-full text-sm"
                        >
                          {t(spec)}
                        </span>
                      ))}
                    </div>
                  </div>

                  {member.education && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {t("Education")}
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        {member.education.map((edu, index) => (
                          <li key={index}>{t(edu)}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {member.certifications && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {t("Certificates")}
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        {member.certifications.map((cert, index) => (
                          <li key={index}>{t(cert)}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
