"use client";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import AuthenticationMainSection from "@/components/auth/login/AuthenticationMainSection";
import LoginHeaderSection from "@/components/auth/login/LoginHeaderSection";
import LoadingLoader from "@/layout/LoadingLoader";
import { Media } from "reactstrap";

const Login = () => {
  return (
    <>
    <LoadingLoader/>
    <section className="login-section">
      <LoginHeaderSection />
      <AuthenticationMainSection />
    </section>
    </>
  );
};

export default Login;
