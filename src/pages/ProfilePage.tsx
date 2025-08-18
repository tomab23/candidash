import Navbar from "@/components/layout/Navbar";
import { useAuth } from "@/context/AuthContext";
import DateFormat from "@/helpers/DateFormat";
import IntervalDate from "@/helpers/IntervalDate";
import { useTest } from "@/hooks/useTest";

const ProfilePage = () => {
  const { user } = useAuth();
  const { tests } = useTest();


  return (
    <div>
      <Navbar />
      <div className="h-full max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className='text-center text-2xl font-bold mt-2 mb-10'>Profile</h1>
        <div className="flex flex-col gap-5 mt-10">
          <p>Votre adresse mail : {user?.email}</p>

          <p>Inscript depuis : {DateFormat(String(user?.created_at))} | Il y a {IntervalDate(String(user?.created_at))}</p> 

          <p>Nombre de test : {tests.length}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
