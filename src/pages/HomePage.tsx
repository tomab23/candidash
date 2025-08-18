import Navbar from "@/components/layout/Navbar";
import DateFormat from "@/helpers/DateFormat";
// import * as Yup from "yup";
import { useFormik } from "formik";
import { Pen, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTest } from "@/hooks/useTest";

const HomePage = () => {
  const { tests, addTest, removeTest} = useTest();
  const navigate = useNavigate();
  const { t } = useTranslation();


  const formik = useFormik({
    initialValues: {
      name: "",
      age: 0,
      place: "",
    },
    enableReinitialize: true,
    // validationSchema: ValidSchema,
    onSubmit: (values) => {
      addTest(values.name, values.age, values.place);
    },
  });

  return (
    <div className="">
      <Navbar />
      <br />
      <br />

      <div className="h-full max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        {tests.map((test) => (
          <div className="flex justify-center items-center" key={test.id}>
            {test.name} - {test.age} ans - {test.place} - Ajouté le {" "} {DateFormat(test.created_at)}
            
            <button className="flex mx-2 items-center" onClick={() => navigate(`/test/${test.id}`)}>
              <Pen className="h-4 w-4 hover:cursor-pointer hover:scale-110 stroke-1 stroke-blue-300" />
            </button>
            <button className="flex mx-1 items-center" onClick={() => removeTest(test.id)}>
              <Trash2 className="h-4 w-4 hover:cursor-pointer hover:scale-110 stroke-1 stroke-red-600" />
            </button>
          </div>
        )).reverse()}
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
      <br /><br /><br />
      
      <p className="text-center">{t('HELLO')}</p>
      
 
      
    </div>
  );
};

export default HomePage;
