import DeleteTestDIalog from "@/components/custom/DeleteTestDialog";
import { StatusTestBox } from "@/components/custom/StatusTestBox";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { useTest } from "@/hooks/useTest";
import type Test from "@/models/Test";
import { useFormik } from "formik";
import { Archive } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

type Props = {
  edit: boolean;
};

const TestPage = (props: Props) => {
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
      id: test ? test.id : 0,
      name: test ? test.name : "",
      age: test ? test?.age : 0,
      place: test ? test?.place : "",
      gender: test ? test?.gender : "Select genre",
    },
    enableReinitialize: true,
    // validationSchema: ValidSchema,
    onSubmit: (values) => {
      if(props.edit) {
        editTest(values.id, values.name, values.age, values.place, values.gender);
      } else {
        addTest(values.name, values.age, values.place, values.gender)
      }
      navigate("/home");
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
          <h1 className="font-bold">{props.edit ? "Edit" : "New test"}</h1>
          <p className="text-center">ID : {props.edit ? id : "new"}</p>
        </div>
        <div>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col items-center justify-center gap-4 mt-5"
          >
            <input
              className="outline p-1"
              id="name"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              placeholder="name"
            />
            <input
              className="outline p-1"
              id="age"
              name="age"
              onChange={formik.handleChange}
              value={formik.values.age}
              type="number"
              placeholder="age"
            />
            <input
              className="outline p-1"
              id="place"
              name="place"
              onChange={formik.handleChange}
              value={formik.values.place}
              placeholder="place"
            />
            {/* STATUS */}
            <StatusTestBox
              name="gender"
              value={formik.values.gender}
              onChange={
                (val) => formik.setFieldValue("gender", val)
              }
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

              <DeleteTestDIalog id={Number(id)} name={formik.values.name} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestPage;
