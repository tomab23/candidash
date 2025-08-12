import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useAuth } from "@/context/AuthContext";

const RegisterPage = () => {
  // const navigate = useNavigate();
  const { register } = useAuth()

  const ValidSchema = Yup.object().shape({
    email: Yup.string()
      .email("Adresse email invalide")
      .required("Adresse email obligatoire"),
    password: Yup.string()
      .min(8, "Votre password est trop court")
      .required("Le message est obligatoire"),
  });

  //  const [error, setError] = useState<string | null>(null)

    const handleRegister = async (email : string, password: string) => {
    // setError(null)
    const { error } = await register(email, password)    
    // if (error) setError(error.message)
    if (error) console.log(error);
    else window.location.href = "/home"
  }

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
      handleRegister(values.email, values.password)
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={formik.handleSubmit} className="max-w-sm w-full flex flex-col items-center border rounded-lg p-6 shadow-sm text-primary">
        <img src="/logo2.svg" alt="candidash logo" className="h-20 w-20" />
        <p className="mb-4 text-2xl font-bold tracking-tight">
          Register in to Candidash
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
          </div>
          <Button
            type="submit"
            className="mt-4 w-full"
            // onClick={() => navigate("/home")}
          >
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
      </form>
    </div>
  );
};

export default RegisterPage;
