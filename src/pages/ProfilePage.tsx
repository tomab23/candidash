import Navbar from "@/components/layout/Navbar";
import StatCard from "@/components/StatCard";
import { useAuth } from "@/context/AuthContext";
import DateFormat from "@/helpers/DateFormat";
import IntervalDate from "@/helpers/IntervalDate";
import { useTest } from "@/hooks/useTest";
import { List, SquareUserRound } from "lucide-react";

const ProfilePage = () => {
  const { user } = useAuth();
  const { tests } = useTest();

  return (
    <div>
      <Navbar />
      <div className="h-full max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-2xl font-bold mt-2 mb-10">Profile</h1>
        {/*  */}
        <div className="flex flex-col gap-5 mt-10">
          {/* USER INFO AUTH */}
          <div className="flex items-center gap-1">
            <SquareUserRound className="w-20 h-20" />
            <div>
              <p className="text-lg font-semibold">{user?.email}</p>
              <p className="italic text-sm max-sm:text-xs">
                Inscript depuis : {DateFormat(String(user?.created_at))} | Il y
                a {IntervalDate(String(user?.created_at))}
              </p>
            </div>
          </div>
          {/* MORE */}
            <div className="grid grid-rows-1 grid-cols-4 sm:grid-cols-6 gap-4">
              <StatCard title={"Test"} value={tests.length} icon={<List className="h-4 w-4" />} />
              {/* <StatCard title={"Test"} value={tests.length} icon={<List />} /> */}
              {/* <StatCard title={"Test"} value={tests.length} icon={<List />} /> */}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
