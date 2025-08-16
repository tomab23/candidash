import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useAuth } from "@/context/AuthContext";
import { ModeToggle } from "@/components/mode-toggle";
import LanguageDropdown from "@/components/LanguageDropdown";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const ValidSchema = Yup.object().shape({
    email: Yup.string()
      .email("Adresse email invalide")
      .required("Adresse email obligatoire"),
    password: Yup.string()
      .min(8, "Votre password est trop court")
      .required("Le message est obligatoire"),
  });

   const [error, setError] = useState<string | null>(null)
   const [loading, setLoading] = useState<boolean>(false)

  const handleLogin = async (email: string, password: string) => {
    setError(null)
    setLoading(true)
    const { error } = await login(email, password);
    if (error) setError(error) 
    if (error) console.log(error);
    if (error) setLoading(false)
    else setTimeout(() => {
      window.location.href = "/home"
    }, 1000);;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    enableReinitialize: true,
    validationSchema: ValidSchema,
    onSubmit: (values) => {
      // signInUser(values.email, values.password);
      // alert(JSON.stringify(values.email + values.password));
      handleLogin(values.email, values.password);
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="absolute top-10 flex gap-5 ">
        <ModeToggle />
        <LanguageDropdown />
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="max-w-sm w-full flex flex-col items-center border rounded-lg p-6 shadow-sm text-primary"
      >
        <img src="/logo2.svg" alt="candidash logo" className="w-20 h-20" />
        <p className="mb-4 text-2xl font-bold tracking-tight">
          Log in to Candidash
        </p>
        <div className="w-full space-y-4">
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
          <div>
            <p className="font-bold mb-1">Password</p>
            <Input
              type="password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              required
              placeholder="Password"
              className="w-full"
              // min="8"
              // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            />

            <p
              onClick={() => navigate("forgot-password")}
              className="mt-2 text-right text-sm block underline text-muted-foreground hover:cursor-pointer"
            >
              Forgot your password?
            </p>
          </div>
          <Button
            type="submit"
            className="mt-4 w-full"
            // onClick={() => navigate("/home")}
          >
            {loading ? "Login..." : "Login"}
          </Button>
        </div>
        {error != null && <p className="text-xs my-5 text-destructive text-center">{error}</p>}
        <div className="mt-5 space-y-5">
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
      </form>
    </div>
  );
};

export default LoginPage;
