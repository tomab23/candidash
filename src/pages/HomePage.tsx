import Navbar from "@/components/layout/Navbar";
import { useAuth } from "@/context/AuthContext";
import DateFormat from "@/helpers/DateFormat";
import Test from "@/models/Test";
import { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
// import * as Yup from "yup";
import { useFormik } from "formik";
import { Pen, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { getTestData, insertTestData, deleteTestData } = useAuth();
  const navigate = useNavigate();

  const [test, setTest] = useState<Test[]>([]);
   const [message, setMessage] = useState("message a venir");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTestData();
      if (data) setTest(data.reverse());
    };

    fetchData();
  }, [getTestData]);


  // Ajouter un test
  const handleSubmit = async (name: string, age: number, place: string) => {
    const { error } = await insertTestData(name, age, place);
    if (error) {
      setMessage(`Erreur : ${error}`);
    } else {
      setMessage("Enregistrement ajouté avec succès !");
    }
  };

  // Supprimer un test
  const handleDelete = async (id: number) => {
    const { error } = await deleteTestData(id);
    if (error) {
      alert("Erreur: " + error);
    } else {
      setTest(test.filter((row) => row.id !== id));
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      age: 0,
      place: "",
    },
    enableReinitialize: true,
    // validationSchema: ValidSchema,
    onSubmit: (values) => {
      // signInUser(values.email, values.password);
      // alert(JSON.stringify(values.email + values.password));
      handleSubmit(values.name, values.age, values.place);
    },
  });

  return (
    <div className="">
      <Navbar />
      <br />
      <br />

      <div>
        {test.map((user) => (
          <div className="flex justify-center items-center" key={user.id}>
            {user.name} - {user.age} ans - {user.place} - Ajouté le{" "}
            {DateFormat(user.created_at)}
            <button className="flex mx-2 items-center" onClick={() => navigate(`/test/${user.id}`)}>
              <Pen className="h-4 w-4 hover:cursor-pointer hover:scale-110 stroke-1 stroke-blue-300" />
            </button>
            <button className="flex mx-1 items-center" onClick={() => handleDelete(user.id)}>
              <Trash2 className="h-4 w-4 hover:cursor-pointer hover:scale-110 stroke-1 stroke-red-600" />
            </button>
          </div>
        ))}
      </div>
      <br />
      <br />

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
  );
};

export default HomePage;
