import Eyebrow from "@/components/Eyebrow";
import RegisterForm from "@/components/RegisterForm";

export const metadata = { title: "Register — Pwani Innovation Week" };

export default function Register() {
  return (
    <RegisterForm intro={
      <>
        <Eyebrow>Register</Eyebrow>
        <h1 className="h-display text-[clamp(44px,5.5vw,72px)] mt-5">Be in Mombasa, 26 – 30 October.</h1>
        <p className="text-[17px] text-slate-600 leading-relaxed mt-5">General admission is free. Delegate passes include the investor lounge, Deals Den seating and all networking evenings.</p>
      </>
    } />
  );
}
