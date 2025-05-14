import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import convertToSubcurrency from "../../utils/convertToSubcurrency";
const STRIPE_PUBLIC_KEY =
  "pk_test_51OC42kA55JckoZXDrf8vXj0R2PuKJ6JZWqk3vveDBpaFopnZGVWaXPs1K6rlQSSNfVMGOjYBhoAQTj7TORUQyqYs00KRndi8tb";
const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);
import { motion } from "framer-motion";
import { X } from "lucide-react";
import CheckoutPage from "./CheckoutPage";
const PaymentDialog = ({
  open,
  setOpen,
  amount,
  handlePaymentDone,
}: {
  open: boolean;
  setOpen: any;
  amount: number;
  handlePaymentDone: any;
}) => {
  return (
    <>
      {open && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="min-h-screen px-4 flex items-center justify-center">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl my-8"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
              >
                <X className="h-6 w-6 text-gray-500" />
              </button>

              <div className="">
                <Elements
                  stripe={stripePromise}
                  options={{
                    mode: "payment",
                    amount: convertToSubcurrency(amount),
                    currency: "pln",
                  }}
                >
                  <CheckoutPage
                    amount={amount}
                    setOpen={setOpen}
                    handlePaymentDone={handlePaymentDone}
                  />
                </Elements>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentDialog;
