import ImgTitle from "@/components/ImgTitle";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useFormik, type FormikHelpers } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Contenu from "@/helpers/Contenu";
import Header from "@/components/layout/Header";

type MailType = {
  email: string | undefined;
  subject: string;
  message: string;
  terms: boolean;
};

const ContactPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [loading, setLoading] = useState<boolean>(false);

  const requiredMsg = t("ERROR.REQUIRED");

  const ValidSchema = Yup.object().shape({
    email: Yup.string().required(requiredMsg),
    subject: Yup.string().required(requiredMsg),
    message: Yup.string().required(requiredMsg),
    terms: Yup.boolean().oneOf([true], t("ERROR.TERMS")).required(requiredMsg),
  });

  // Email parameters email.js to contact
  const yourServiceId = import.meta.env.VITE_EMAILJS_SERVICE;
  const yourTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE;
  const yourPublicId = import.meta.env.VITE_EMAILJS_PUBLIC;

  const sendMail = (values: MailType, helpers: FormikHelpers<MailType>) => {
    const { resetForm } = helpers;
    setLoading(true);
    emailjs.send(yourServiceId, yourTemplateId, values, yourPublicId).then(
      () => {
        // toastSuccess();
        setLoading(false);
        resetForm();
      },
      (error) => {
        console.log("FAILED...", error.text);
        // toastCancel();
        setLoading(false);
      }
    );
  };

  const formik = useFormik({
    initialValues: {
      email: user ? user.email : "",
      subject: "",
      message: "",
      terms: false,
    },
    enableReinitialize: true,
    validationSchema: ValidSchema,
    onSubmit: (values, helpers) => {
      // alert(JSON.stringify(values));
      sendMail(values, helpers);
    },
  });

  return (
    <div className="">
      {user ? (
        <Navbar />
      ) : (
        <div className="bg-muted">
          <nav className="h-16 bg-background border-b">
            <div className="h-full flex items-center justify-between max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-8">
                <ImgTitle />
              </div>
              <div className="flex items-center gap-3">
                <Button onClick={() => navigate("/register")} className="">
                  Inscription
                </Button>
                <Button onClick={() => navigate("/")} className="">
                  Connexion
                </Button>
              </div>
            </div>
          </nav>
        </div>
      )}
      <Contenu>
          <Header title="Contact" />
          <h2 className="mt-3 text-3xl max-sm:text-2xl md:text-4xl font-semibold tracking-tight">
            {t("CONTACT.TITLE")}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground">
            {t("CONTACT.TEXT")}
          </p>
          <div className="md:mt-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12"></div>
            {/* Form */}
            <Card className="bg-accent shadow-none py-0 mt-3">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={formik.handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="col-span-2">
                      <Label htmlFor="subject">{t("SUBEJECT")}*</Label>
                      <Input
                        placeholder={t("SUBEJECT")}
                        id="subject"
                        name="subject"
                        className="mt-2 bg-white h-10 shadow-none w-full"
                        value={formik.values.subject}
                        onChange={formik.handleChange}
                      />
                    </div>
                    {/* <div className="col-span-2 sm:col-span-1">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        placeholder="Last name"
                        id="lastName"
                        className="mt-2 bg-white h-10 shadow-none"
                      />
                    </div> */}
                    <div className="col-span-2">
                      <Label htmlFor="email">Email*</Label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        id="email"
                        className="mt-2 bg-white h-10 shadow-none"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="message">Message*</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Message"
                        className="mt-2 bg-white shadow-none"
                        rows={6}
                        value={formik.values.message}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <div className="col-span-2 flex items-center gap-2">
                      <Checkbox
                        id="terms"
                        checked={formik.values.terms}
                        className="bg-background"
                        // important : convertir en boolean
                        onCheckedChange={(checked) =>
                          formik.setFieldValue("terms", checked === true)
                        }
                        onBlur={() => formik.setFieldTouched("terms", true)}
                      />
                      <Label htmlFor="terms" className="gap-0">
                        {t("TERMS.TEXT")}
                        <Link to={"#"} className="underline ml-1">
                          {t("TERMS.LINK")}
                        </Link>
                        <span>.</span>
                      </Label>
                    </div>
                  </div>
                  {formik.submitCount > 0 &&
                    Object.values(formik.errors).length > 0 &&
                    formik.values.terms && (
                      <p className="text-destructive text-sm mt-5">
                        {t("ERROR.FORM")}
                      </p>
                    )}
                  {formik.touched.terms && formik.errors.terms ? (
                    <p className="text-destructive text-sm mt-5">
                      {formik.errors.terms}
                    </p>
                  ) : null}
                  <Button
                    className="mt-6 w-full"
                    size="lg"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? t("BUTTON.SENDING") : t("BUTTON.SUBMIT")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
      </Contenu>
    </div>
  );
};

export default ContactPage;
