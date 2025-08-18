import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useAuth } from "@/context/AuthContext";
import { ModeToggle } from "@/components/mode-toggle";
import LanguageDropdown from "@/components/LanguageDropdown";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { PasswordInput } from "@/components/ui/password-input";
import { Info, Loader2Icon } from "lucide-react";

type Props = {
  register?: boolean;
};
const AuthPage = (props: Props) => {
  const navigate = useNavigate();
  const { login, register } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const ValidSchema = Yup.object().shape({
    email: Yup.string()
      .email("Adresse email invalide")
      .required("Adresse email obligatoire"),
    password: Yup.string()
      .min(8, "Votre password est trop court")
      .required("Le message est obligatoire"),
  });

  const handleLogin = async (email: string, password: string) => {
    setError(null);
    setLoading(true);
    const { error } = await login(email, password);
    if (error) setError(error);
    if (error) console.log(error);
    if (error) setLoading(false);
    else
      setTimeout(() => {
        window.location.href = "/home";
      }, 1000);
  };

  const handleRegister = async (email: string, password: string) => {
    setError(null);
    setLoading(true);
    const { error } = await register(email, password);
    if (error) setError(error);
    if (error) console.log(error);
    if (error) setLoading(false);
    else
      setTimeout(() => {
        window.location.href = "/home";
      }, 1000);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    enableReinitialize: true,
    validationSchema: ValidSchema,
    onSubmit: (values) => {
      if (props.register) {
        handleRegister(values.email, values.password);
      } else {
        handleLogin(values.email, values.password);
      }
    },
  });
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* HEADER */}
      <div className="absolute top-10 flex gap-5 ">
        <ModeToggle />
        <LanguageDropdown />
      </div>
      {/* FORM */}
      <form
        onSubmit={formik.handleSubmit}
        className="max-w-sm w-full flex flex-col items-center border rounded-lg p-6 shadow-sm text-primary"
      >
        <img src="/logo2.svg" alt="candidash logo" className="w-20 h-20" />
        <p className="mb-4 text-2xl font-bold tracking-tight">
          {props.register ? "Register " : "Log "} in to Candidash
        </p>
        <div className="w-full space-y-4">
          {/* EMAIL */}
          <div>
            <p className="font-bold mb-1">Email</p>
            <Input
              type="email"
              placeholder="Email"
              required
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="w-full"
            />
          </div>
          {/* PASSWORD */}
          <div>
            <p className="font-bold mb-1">Password</p>
            <PasswordInput
              id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              required
              placeholder="Password"
              className="w-full"
              min="8"
              // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            />
            {props.register ? (
              <p className="text-xs mt-2 flex gap-1">
                <Info className="h-4 w-4" />
                Votre mot de passe doit contenir au moins 8 caractères, 1 lettre
                majuscule et 1 chiffre.
              </p>
            ) : (
              <p
                onClick={() => navigate("forgot-password")}
                className="mt-2 text-right text-sm block underline text-muted-foreground hover:cursor-pointer"
              >
                Forgot your password?
              </p>
            )}
          </div>
          {/* BUTTON */}
          <Button type="submit" className="mt-4 w-full" disabled={loading}>
            {loading ? (
              <Loader2Icon className="animate-spin" />
            ) : props.register ? (
              "Register"
            ) : (
              "Login"
            )}
          </Button>
        </div>
        {error != null && (
          <p className="text-xs my-5 text-destructive text-center">{error}</p>
        )}
        <div className="mt-5 space-y-5">
          {props.register ? (
            <p className="text-sm text-center">
              Already have an account?
              <a href="/" className="ml-1 underline text-muted-foreground">
                Log in
              </a>
            </p>
          ) : (
            <p className="text-sm text-center">
              Don&apos;t have an account?
              <a
                href="/register"
                className="ml-1 underline text-muted-foreground"
              >
                Create account
              </a>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
