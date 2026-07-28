import AuthLayout from "../layout/AuthLayout";
import RegisterForm from "../components/auth/RegisterForm";

export default function Register() {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
}