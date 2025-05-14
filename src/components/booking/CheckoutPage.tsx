import { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import convertToSubcurrency from "../../utils/convertToSubcurrency";
import { useTranslation } from "react-i18next";
import customAxios from "../../lib/customaxios";

const CheckoutPage = ({
  amount,
  setOpen,
  handlePaymentDone,
}: {
  amount: number;
  setOpen: any;
  handlePaymentDone: any;
}) => {
  const { t } = useTranslation();
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const createPaymentSession = async () => {
      try {
        const response = await customAxios.post(
          "/api/payment/create-payment-intent",
          {
            amount: convertToSubcurrency(amount),
          }
        );

        setClientSecret(response.data.clientSecret);
      } catch (error) {}
    };
    createPaymentSession();
  }, [amount]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    if (!stripe || !elements) {
      return;
    }
    const { error: submitError }: any = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const response: any = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://localhost:3000/payment-success?amount=${amount}`,
      },
      redirect: "if_required",
    });

    if (response.error) {
      setErrorMessage(response.error.message);
    } else {
      await handlePaymentDone(response.paymentIntent);
    }

    setLoading(false);
  };

  if (!clientSecret || !stripe || !elements) {
    return (
      <div className="flex items-center justify-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-2 rounded-md">
      {clientSecret && <PaymentElement />}

      {errorMessage && <div>{errorMessage}</div>}

      <div className="flex gap-4 mt-4">
        <button
          disabled={!stripe || loading}
          className="gradient-theme text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 font-medium"
        >
          {!loading ? `Pay ${amount} PLN` : "Processing..."}
        </button>
        <button
          type="button"
          disabled={!stripe || loading}
          onClick={() => setOpen(false)}
          className="px-6 py-3 border-2 border-gray-200 rounded-xl hover:border-gray-300 transition-colors font-medium"
        >
          {t("Cancel")}
        </button>
      </div>
    </form>
  );
};

export default CheckoutPage;
