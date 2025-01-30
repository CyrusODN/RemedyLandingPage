import { motion } from "framer-motion";
import type { TeamMemberType } from "../../types/team";
import { useTranslation } from "react-i18next";

interface TeamMemberProps {
  member: TeamMemberType;
  onSelect: (member: TeamMemberType) => void;
}

export default function TeamMember({ member, onSelect }: TeamMemberProps) {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer"
      onClick={() => onSelect(member)}
      role="button"
      tabIndex={0}
      aria-label={`Zobacz szczegóły - ${member.name}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onSelect(member);
        }
      }}
    >
      <div className="relative overflow-hidden rounded-xl aspect-[3/4]">
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
        <p className="text-[#46B7C6]">{t(member.role)}</p>
      </div>
    </motion.div>
  );
}
