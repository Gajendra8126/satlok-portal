import AuthLayout from "../layout/AuthLayout";
import PasswordResetSuccessCard from "../components/auth/PasswordResetSuccessCard";

export default function PasswordResetSuccess() {
  return (
    <AuthLayout>
      <PasswordResetSuccessCard />
    </AuthLayout>
  );
}