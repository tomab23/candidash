import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
    // const [error, setError] = useState<string | null>(null)

  // const handleRegister = async () => {
  //   setError(null)
  //   const { error } = await supabase.auth.signUp({
  //     email,
  //     password,
  //   })
  //   if (error) setError(error.message)
  //   else alert("Vérifie ton email pour confirmer ton compte.")
  // }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-sm w-full flex flex-col items-center border rounded-lg p-6 shadow-sm text-primary">
        <img src="/logo2.svg" alt="candidash logo" className="h-20 w-20" />
        <p className="mb-4 text-2xl font-bold tracking-tight">
          Register in to Candidash
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
            Register
          </Button>
        </div>
        <div className="mt-5 space-y-5">
          <p className="text-sm text-center">
            Already have an account?
            <a href="/" className="ml-1 underline text-muted-foreground">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
