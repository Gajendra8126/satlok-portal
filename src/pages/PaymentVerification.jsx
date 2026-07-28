import AuthLayout from "../layout/AuthLayout";
import PaymentVerificationForm from "../components/auth/PaymentVerificationForm";

export default function PaymentVerification() {
  return (
    <AuthLayout>
      <PaymentVerificationForm />
    </AuthLayout>
  );
}