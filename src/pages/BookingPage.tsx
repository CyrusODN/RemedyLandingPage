import { motion } from "framer-motion";
import AppointmentWizard from "../components/booking/AppointmentWizard";

export default function BookingPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <AppointmentWizard />
    </motion.div>
  );
}
