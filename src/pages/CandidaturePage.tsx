import DeleteTestDIalog from "@/components/custom/DeleteTestDialog";
import InputCandidature from "@/components/custom/InputCandidature";
import InputDateCalendar from "@/components/custom/InputDateCalendar";
import { StatusBox } from "@/components/custom/StatusBox";
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
import { Archive } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";

type Props = {
  edit: boolean;
};



const CandidaturePage = (props: Props) => {
  const { fetchCandidatureById, editCandidature, addCandidature } =
    useCandidature();
  const { id } = useParams();
  const navigate = useNavigate();
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

  const ValidSchema = Yup.object().shape({
    date: Yup.date().required("La date est obligatoire"),
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
      date: Candidature ? format(new Date(Candidature.date), 'yyyy-MM-dd') : format(today, 'yyyy-MM-dd'),
      status: Candidature ? Candidature.status : "",
      link: Candidature ? Candidature.link : "",
      note: Candidature ? Candidature.note : "",
      place: Candidature ? Candidature.place : "",
    },
    enableReinitialize: true,
    validationSchema: ValidSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values));

      // console.log('Valeur brute de values.date:', values.date);
    const normalizedDate = format(new Date(values.date), 'yyyy-MM-dd');
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
          values.place
        );
      } else {
        addCandidature(
          values.company,
          values.job,
          normalizedDate,
          values.status,
          values.link,
          values.note,
          values.place
        );
      }

      navigate("/home");
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
        <div className="flex justify-between items-center px-5 mt-5">
          <Button onClick={() => navigate(-1)} className="">
            Retour
          </Button>
          <p className="text-center">ID : {props.edit ? id : "new"}</p>
        </div>
        {/* CARD */}
        <Card className="w-full max-w-sm justify-self-center mt-2">
          <CardHeader>
            <CardTitle className="text-center text-xl">
              Ajouter une candidature
            </CardTitle>
            <CardAction>
              <Button
                variant={"ghost"}
                size={"sm"}
                onClick={() => formik.resetForm()}
              >
                reset
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
                name={"company"}
                value={formik.values.company}
                onChange={formik.handleChange}
                placeholder={"test"}
                label="Entreprise"
              />

              <InputCandidature
                name={"job"}
                value={formik.values.job}
                onChange={formik.handleChange}
                placeholder={"job"}
                label="Poste"
              />
              <div className="flex justify-between gap-2">
                <InputCandidature
                  name={"date"}
                  classname={""}
                  label="Date de candidature"
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
                  placeholder={"place"}
                  label="Lieu"
                />
              </div>
              {/* STATUS */}
              <InputCandidature name={"status"} label={"Statut"}>
                <StatusBox
                  name="status"
                  value={formik.values.status}
                  onChange={(val) => formik.setFieldValue("status", val)}
                />
              </InputCandidature>

              <InputCandidature
                name={"link"}
                value={formik.values.link}
                onChange={formik.handleChange}
                placeholder={"link"}
                label="Lien*"
              />

              <InputCandidature name={"note"} label={"Note*"}>
                <Textarea
                  className=""
                  id="note"
                  name="note"
                  onChange={formik.handleChange}
                  value={formik.values.note ? formik.values.note : ""}
                  placeholder="Type your note here.*"
                />
              </InputCandidature>

              <Button className="mt-5" type="submit">
                {props.edit
                  ? "Modifier la candidature"
                  : "Valider la candidature"}
              </Button>
            </form>
          </CardContent>
        </Card>
        {/* {props.edit && ( */}
        <div className="flex justify-around mt-10">
          <Button variant={"secondary"} title="Archive" disabled>
            <Archive /> Archiver
          </Button>

          <DeleteTestDIalog
            id={Number(id)}
            company={Candidature?.company}
            job={Candidature?.job}
          />
        </div>
        {/* )}  */}
      </Contenu>
    </div>
  );
};

export default CandidaturePage;
