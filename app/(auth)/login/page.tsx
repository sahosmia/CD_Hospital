import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LoginForm from "../_component/LoginForm";
import OAuthContent from "../_component/OAuthContent";

export default function Login() {
  return (
    <div className="container relative min-h-screen">
      <Card className=" min-w-[500px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <CardHeader>
          <CardTitle>Login Your Account</CardTitle>
        </CardHeader>
        <CardContent>

          <LoginForm />
          <OAuthContent />
        </CardContent>
      </Card>
    </div>
  );
}
