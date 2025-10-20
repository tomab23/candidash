import ContractBox from "@/components/custom/ContractBox";
import InputCandidature from "@/components/custom/InputCandidature";
import InputDateCalendar from "@/components/custom/InputDateCalendar";
import { StatusBox } from "@/components/custom/StatusBox";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import Contenu from "@/helpers/Contenu";
import { useCandidature } from "@/hooks/useCandidature";
import Candidature from "@/models/Candidature";
import { format } from "date-fns";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import DialogDelete from "@/components/dialogs/DialogDelete";
import DialogArchive from "@/components/dialogs/DialogArchive";

type Props = {
  edit: boolean;
};

const CandidaturePage = (props: Props) => {
  const { fetchCandidatureById, editCandidature, addCandidature } =
    useCandidature();
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [Candidature, setCandidature] = useState<Candidature | null>(null);

  useEffect(() => {
    const loadTest = async () => {
      if (id) {
        const data = await fetchCandidatureById(parseInt(id));
        setCandidature(data);
      }
    };
    loadTest();
  }, [id, fetchCandidatureById]);

  const requiredMsg = t("ERROR.REQUIRED");

  const ValidSchema = Yup.object().shape({
    date: Yup.date().required(requiredMsg),
    company: Yup.string().required(requiredMsg),
    job: Yup.string().required(requiredMsg),
    status: Yup.string().required(requiredMsg),
    place: Yup.string().required(requiredMsg),
    link: Yup.string().url(t("ERROR.URL") + " (ex: https://exemple.com)").notRequired(),
  });

  const normalizeDate = (d: Date) => {
    const date = new Date(d);
    date.setHours(0, 0, 0, 0);
    return date;
  };

  const today = normalizeDate(new Date());

  const formik = useFormik({
    initialValues: {
      id: Candidature ? Candidature.id : 0,
      company: Candidature ? Candidature.company : "",
      job: Candidature ? Candidature.job : "",
      date: Candidature
        ? format(new Date(Candidature.date), "yyyy-MM-dd")
        : format(today, "yyyy-MM-dd"),
      status: Candidature ? Candidature.status : "",
      link: Candidature ? Candidature.link : "",
      note: Candidature ? Candidature.note : "",
      place: Candidature ? Candidature.place : "",
      contract: Candidature ? Candidature.contract : "",
      archive: Candidature ? Candidature.archive : false,
    },
    enableReinitialize: true,
    validationSchema: ValidSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values));

      // console.log('Valeur brute de values.date:', values.date);
      const normalizedDate = format(new Date(values.date), "yyyy-MM-dd");
      // console.log('Date normalisée:', normalizedDate);

      if (props.edit) {
        editCandidature(
          values.id,
          values.company,
          values.job,
          normalizedDate,
          values.status,
          values.link,
          values.note,
          values.place,
          values.contract
        );
      } else {
        addCandidature(
          values.company,
          values.job,
          normalizedDate,
          values.status,
          values.link,
          values.note,
          values.place,
          values.contract
        );
      }

      navigate(-1);
    },
  });  

  // if (!test) return <p>Chargement...</p>;

  //   console.log("Largeur écran : " + screen.width + "px");
  // console.log("Hauteur écran : " + screen.height + "px");

  return (
    <div className="pb-10">
      <Navbar />
      <Contenu>
        {/* HEADER */}
        <Header title={props.edit ? t("HEADER.EDIT") : t("HEADER.ADD")} />
        {/* CARD */}
        <Card className="w-full max-w-sm justify-self-center mt-2">
          <CardHeader>
            <CardTitle className="text-center text-xl max-sm:text-lg">
              {t("FORM.TITLE")}
            </CardTitle>
            <CardAction>
              <Button
                variant={"ghost"}
                size={"sm"}
                onClick={() => formik.resetForm()}
              >
                {t("FORM.RESET")}
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            {/* FORM */}
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col justify-center gap-4"
            >
              <InputCandidature
                autoComplete="organization"
                name={"company"}
                value={formik.values.company}
                onChange={formik.handleChange}
                placeholder={t("FORM.COMPANY")}
                label={t("FORM.COMPANY") + "*"}
              />

              <InputCandidature
                name={"job"}
                value={formik.values.job}
                onChange={formik.handleChange}
                placeholder={t("FORM.JOB")}
                label={t("FORM.JOB") + "*"}
              />
              <div className="flex justify-between gap-2">
                <InputCandidature
                  name={"date"}
                  classname={""}
                  label={t("FORM.DATE") + "*"}
                >
                  <InputDateCalendar
                    name="date"
                    value={new Date(formik.values.date)}
                    onChange={(val) => formik.setFieldValue("date", val)}
                    error={
                      formik.touched.date
                        ? (formik.errors.date as string)
                        : undefined
                    }
                  />
                </InputCandidature>
                <InputCandidature
                  name={"place"}
                  value={formik.values.place}
                  onChange={formik.handleChange}
                  placeholder={t("FORM.PLACE")}
                  label={t("FORM.PLACE") + "*"}
                />
              </div>
              {/* STATUS */}
              <InputCandidature name={"status"} label={"Statut*"}>
                <StatusBox
                  name="status"
                  value={formik.values.status}
                  onChange={(val) => formik.setFieldValue("status", val)}
                />
              </InputCandidature>
              {/* CONTRACT */}
              <InputCandidature name={"contract"} label={t("FORM.CONTRACT") + "*"}>
                <ContractBox
                  name="contract"
                  value={formik.values.contract}
                  onChange={(val) => formik.setFieldValue("contract", val)}
                />
              </InputCandidature>

              <InputCandidature
                name={"link"}
                value={formik.values.link}
                onChange={formik.handleChange}
                placeholder={t("FORM.LINK")}
                label={t("FORM.LINK")}
              />

              <InputCandidature name={"note"} label={"Note"}>
                <Textarea
                  className=""
                  id="note"
                  name="note"
                  onChange={formik.handleChange}
                  value={formik.values.note ? formik.values.note : ""}
                  placeholder={t("PLACEHOLDER.NOTE")}
                />
              </InputCandidature>

              <Button className="mt-5" type="submit">
                {props.edit ? t("BUTTON.EDIT") : t("FORM.ADD")}
              </Button>

              {/* ERRORS */}
              {formik.submitCount > 0 &&
                !formik.errors.link &&
                Object.values(formik.errors).length > 0 && (
                  <div className="text-destructive">{t("ERROR.FORM")}</div>
                )}
              {formik.touched.link && formik.errors.link && (
                <div className="text-destructive">{formik.errors.link}</div>
              )}
            </form>
          </CardContent>
        </Card>
        {props.edit && (
          <div className="flex justify-around mt-10">
            {/* <Button variant={"secondary"} title="Archive" onClick={addArchive}>
              <Archive /> {t("BUTTON.ARCHIVE")}
            </Button> */}

            <DialogArchive               id={Number(id)}
              company={Candidature?.company}
              job={Candidature?.job}
              archive={formik.values.archive}
              />

            <DialogDelete
              id={Number(id)}
              company={Candidature?.company}
              job={Candidature?.job}
            />
          </div>
        )}
      </Contenu>
    </div>
  );
};

export default CandidaturePage;
