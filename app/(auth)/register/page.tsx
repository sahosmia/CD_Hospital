import Image from "next/image";
import { SignupForm } from "./_component/SignpForm";

export default function Home() {
  return (
    <div className="w-full flex-col h-screen flex items-center justify-center">
      <div className="container">
        <SignupForm />
      </div>
    </div>
  );
}
