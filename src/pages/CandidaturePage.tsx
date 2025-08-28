import DeleteTestDIalog from "@/components/custom/DeleteTestDialog";
import InputCandidature from "@/components/custom/InputCandidature";
import InputDateCalendar from "@/components/custom/InputDateCalendar";
import { StatusBox } from "@/components/custom/StatusBox";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import Contenu from "@/helpers/Contenu";
import { useTest } from "@/hooks/useTest";
import Candidature from "@/models/Candidature";
import { useFormik } from "formik";
import { Archive } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";

type Props = {
  edit: boolean;
};

const CandidaturePage = (props: Props) => {
  // const { fetchTestById, editTest, addTest } = useTest();
  const { id } = useParams();
  const navigate = useNavigate();
  // const [test, setTest] = useState<Test | null>(null);
  // const [Candidature, setCandidature] = useState<Candidature | null>(null);

  // useEffect(() => {
  //   const loadTest = async () => {
  //     if (id) {
  //       const testData = await fetchTestById(parseInt(id));
  //       setTest(testData);
  //     }
  //   };
  //   loadTest();
  // }, [id, fetchTestById]);

  const ValidSchema = Yup.object().shape({
    date: Yup.date().required("La date est obligatoire"),
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const formik = useFormik({
    initialValues: {
      id: "",
      company: "",
      job: "",
      date: today,
      place: "",
      status: "Select status",
      link: "",
      note: "",
    },
    enableReinitialize: true,
    validationSchema: ValidSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
      // if(props.edit) {
      //   editTest(values.id, values.name, values.age, values.place, values.status);
      // } else {
      //   addTest(values.name, values.age, values.place, values.status)
      // }
      // navigate("/home");
    },
  });

  // if (!test) return <p>Chargement...</p>;

  return (
    <div>
      <Navbar />
      <Contenu>
        {/* HEADER */}
        <div className="flex justify-between items-center px-5 mt-5">
          <Button onClick={() => navigate(-1)} className="">
            Retour
          </Button>
          {/* <h1 className="font-bold text-xl">
            {props.edit
              ? "Modifier votre candidature"
              : "Ajouter une candidature"}
          </h1> */}
          <p className="text-center">ID : {props.edit ? id : "new"}</p>
        </div>
        {/* FORM */}
        <Card className="w-full max-w-sm justify-self-center mt-2">
          <CardHeader>
            <CardTitle className="text-center text-xl">
              Ajouter une candidature
            </CardTitle>
            <CardAction><Button variant={"ghost"} size={"sm"} onClick={() => formik.resetForm()}>reset</Button></CardAction>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col justify-center gap-4"
            >
              <InputCandidature
                name={"company"}
                value={formik.values.company}
                onChange={formik.handleChange}
                placeholder={"test"}
                label="Test company"
              />

              <InputCandidature
                name={"job"}
                value={formik.values.job}
                onChange={formik.handleChange}
                placeholder={"job"}
                label="Test job"
              />
              <InputCandidature name={"date"} classname={""} label="test date">
                <InputDateCalendar
                  // edit={props.edit}
                  name="date"
                  value={formik.values.date}
                  onChange={(val) => formik.setFieldValue("date", val)}
                  placeholder={"Select date"}
                  // error={formik.touched.date && formik.errors.date}
                />
              </InputCandidature>
              <InputCandidature
                name={"place"}
                value={formik.values.place}
                onChange={formik.handleChange}
                placeholder={"place"}
                label="Test place"
              />
              {/* STATUS */}

              <InputCandidature name={"status"} label={"Test status"}>
                <StatusBox
                  edit={props.edit}
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
                label="Test link"
              />

              <InputCandidature name={"note"} label={"Test note"}>
                <Textarea
                  className=""
                  id="note"
                  name="note"
                  onChange={formik.handleChange}
                  value={formik.values.note}
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
          {/* <CardFooter className="flex justify-between">
            <Button variant={"secondary"} title="Archive" disabled>
              <Archive /> Archiver
            </Button>
            <DeleteTestDIalog id={Number(id)} />
          </CardFooter> */}
        </Card>
        {/* {props.edit && ( */}
        <div className="flex justify-around mt-20">
          <Button variant={"secondary"} title="Archive" disabled>
            <Archive /> Archiver
          </Button>

          <DeleteTestDIalog id={Number(id)} />
        </div>
        {/* )} */}
      </Contenu>
    </div>
  );
};

export default CandidaturePage;
