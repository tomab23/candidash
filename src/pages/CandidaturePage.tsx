import DeleteTestDIalog from "@/components/custom/DeleteTestDialog";
import { StatusBox } from "@/components/custom/StatusBox";
import { StatusTestBox } from "@/components/custom/StatusTestBox";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useTest } from "@/hooks/useTest";
import type Test from "@/models/Test";
import { useFormik } from "formik";
import { Archive } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

type Props = {
  edit: boolean;
};

const CandidaturePage = (props: Props) => {
  const { fetchTestById, editTest, addTest } = useTest();
  const { id } = useParams();
  const navigate = useNavigate();
  const [test, setTest] = useState<Test | null>(null);

  useEffect(() => {
    const loadTest = async () => {
      if (id) {
        const testData = await fetchTestById(parseInt(id));
        setTest(testData);
      }
    };
    loadTest();
  }, [id, fetchTestById]);

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
      <div className="h-full max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        <div className="flex justify-between items-center px-5 mt-5">
          <Button onClick={() => navigate(-1)} className="">
            Retour
          </Button>
          <h1 className="font-bold">
            {props.edit ? "Modification" : "Nouvelle candidature"}
          </h1>
          <p className="text-center">ID : {props.edit ? id : "new"}</p>
        </div>
        <div>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col items-center justify-center gap-4 mt-5"
          >
            <input
              className="outline p-1"
              id="company"
              name="company"
              onChange={formik.handleChange}
              value={formik.values.company}
              placeholder="company"
            />
            <input
              className="outline p-1"
              id="job"
              name="job"
              onChange={formik.handleChange}
              value={formik.values.job}
              placeholder="job"
            />
            <input
              type="date"
              className="outline p-1"
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
            <input
              className="outline p-1"
              id="link"
              name="link"
              onChange={formik.handleChange}
              value={formik.values.link}
              placeholder="link*"
            />

            <Textarea
              className="outline p-1"
              id="note"
              name="note"
              onChange={formik.handleChange}
              value={formik.values.note}
              placeholder="Type your note here.*"
            />
            <button
              className="border-1 border-red-600 px-2 cursor-pointer"
              type="submit"
            >
              {props.edit ? "Modifier" : "Ajouter"}
            </button>
          </form>
          {props.edit && (
            <div className="flex justify-around mt-20">
              <Button variant={"secondary"} title="Archive" disabled>
                <Archive /> Archiver
              </Button>

              <DeleteTestDIalog id={Number(id)} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CandidaturePage;
