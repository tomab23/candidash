import Navbar from "@/components/layout/Navbar";
import { useAuth } from "@/context/AuthContext";
import type Test from "@/models/Test";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TestPage = () => {
  const { getTestById, updateTestData } = useAuth();
  const params = useParams();
  const testId = params.id;

  const [test, setTest] = useState<Test | null>(null);
  const [message, setMessage] = useState("message a venir");

  useEffect(() => {
    const fetch = async () => {
      const data = await getTestById(Number(testId));
      setTest(data);
    };
    fetch();
  }, [getTestById, testId]);

  //   const handleUpdate = async () => {
  //     const { error } = await updateTestData(id, name, age, place)
  //     if (error) {
  //       setMessage("Erreur : " + error)
  //     } else {
  //       setMessage("Mise à jour réussie ✅")
  //     }
  //   }

  const formik = useFormik({
    initialValues: {
    //   id: test?.id,
    //   created: test?.created_at,
      name:test ? test.name : "",
      age:test ? test?.age : 0,
      place: test ? test?.place : "",
    //   user: test?.id_user,
    },
    enableReinitialize: true,
    // validationSchema: ValidSchema,
    onSubmit: (values) => {
      // signInUser(values.email, values.password);
      alert(JSON.stringify(values));
      //   handleSubmit(values.name, values.age, values.place);
    },
  });

    if (!test) return <p>Chargement...</p>;

  return (
    <div>
      <Navbar />
      <br />
      <p className="text-center">ID : {testId}</p>
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
            Ajouter
          </button>
        </form>
        <p className="text-center mt-10">{message}</p>
      </div>
    </div>
  );
};

export default TestPage;
