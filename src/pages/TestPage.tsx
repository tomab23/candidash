import Navbar from "@/components/layout/Navbar";
import { useTest } from "@/hooks/useTest";
import type Test from "@/models/Test";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const TestPage = () => {
  const { fetchTestById, editTest } = useTest();
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
    },
    enableReinitialize: true,
    // validationSchema: ValidSchema,
    onSubmit: (values) => {
      editTest(values.id, values.name, values.age, values.place);
      navigate("/home");
    },
  });

  // if (!test) return <p>Chargement...</p>;

  return (
    <div>
      <Navbar />
      <br />
      <p className="text-center">ID : {id}</p>
      <br />
      <br />
      <br />
      <br />

      <div>
        <form
          onSubmit={formik.handleSubmit}
          className="flex justify-center gap-4"
        >
          <input
            className="outline"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="name"
          />
          <input
            className="outline"
            id="age"
            name="age"
            onChange={formik.handleChange}
            value={formik.values.age}
            type="number"
            placeholder="age"
          />
          <input
            className="outline"
            id="place"
            name="place"
            onChange={formik.handleChange}
            value={formik.values.place}
            placeholder="place"
          />
          <button
            className="border-1 border-red-600 px-2 cursor-pointer"
            type="submit"
          >
            Modifier
          </button>
        </form>
      </div>
    </div>
  );
};

export default TestPage;
