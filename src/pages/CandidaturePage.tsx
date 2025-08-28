import DeleteTestDIalog from "@/components/custom/DeleteTestDialog";
import { StatusBox } from "@/components/custom/StatusBox";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Contenu from "@/helpers/Contenu";
import { useTest } from "@/hooks/useTest";
import Candidature from "@/models/Candidature";
import { useFormik } from "formik";
import { Archive } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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

  const formik = useFormik({
    initialValues: {
      id: "",
      company: "",
      job: "",
      date: "",
      status: "Select status...",
      link: "",
      note: "",
    },
    enableReinitialize: true,
    // validationSchema: ValidSchema,
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
        <Card className="w-full max-w-sm justify-self-center mt-5">
          <CardHeader>
            <CardTitle className="text-center text-xl">Ajouter une candidature</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col items-center justify-center gap-4 mt-5"
            >
              <Input
                className=""
                id="company"
                name="company"
                onChange={formik.handleChange}
                value={formik.values.company}
                placeholder="company"
              />
              <Input
                className=""
                id="job"
                name="job"
                onChange={formik.handleChange}
                value={formik.values.job}
                placeholder="job"
              />
              <Input
                type="date"
                className=""
                id="date"
                name="date"
                onChange={formik.handleChange}
                value={formik.values.date}
                placeholder="date"
              />
              {/* STATUS */}
              <StatusBox
                edit={props.edit}
                name="status"
                value={formik.values.status}
                onChange={(val) => formik.setFieldValue("status", val)}
              />
              <Input
                className=""
                id="link"
                name="link"
                onChange={formik.handleChange}
                value={formik.values.link}
                placeholder="link*"
              />

              <Textarea
                className=""
                id="note"
                name="note"
                onChange={formik.handleChange}
                value={formik.values.note}
                placeholder="Type your note here.*"
              />
              <Button
                className="mt-5"
                type="submit"
              >
                {props.edit ? "Modifier la candidature" : "Valider la candidature"}
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
