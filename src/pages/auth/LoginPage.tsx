import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-sm w-full flex flex-col items-center border rounded-lg p-6 shadow-sm text-primary">
        <img src="/logo2.svg" alt="candidash logo" className="w-20 h-20" />
        <p className="mb-4 text-2xl font-bold tracking-tight">
          Log in to Candidash
        </p>
        <div className="w-full space-y-4">
          <div>
            <p className="font-bold mb-1">Email</p>
            <Input type="email" placeholder="Email" className="w-full" />
          </div>
          <div>
            <p className="font-bold mb-1">Password</p>
            <Input type="password" placeholder="Password" className="w-full" />
          </div>
          <Button className="mt-4 w-full" onClick={() => navigate("/home")}>
            Login
          </Button>
        </div>
        <div className="mt-5 space-y-5">
          {/* <a
            href="#"
            className="text-sm block underline text-muted-foreground text-center"
          >
            Forgot your password?
          </a> */}
          <p className="text-sm text-center">
            Don&apos;t have an account?
            <a
              href="/register"
              className="ml-1 underline text-muted-foreground"
            >
              Create account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
