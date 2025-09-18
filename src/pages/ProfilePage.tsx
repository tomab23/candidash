import Navbar from "@/components/layout/Navbar";
import StatCard from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import StringToDate from "@/helpers/StringToDate";
import { useCandidature } from "@/hooks/useCandidature";
import i18n from "@/i18n/i18n";
import { intervalToDuration } from "date-fns";
import { List, SquareUserRound } from "lucide-react";

const ProfilePage = () => {
  const { user } = useAuth();
  const { candidatures } = useCandidature();

  const dateRegister = new Date(String(user?.created_at)).setHours(0, 0, 0, 0);
  const today = new Date().setHours(0, 0, 0, 0);

  const interval = intervalToDuration({
    start: new Date(dateRegister),
    end: new Date(today),
  });

  const day = interval.days && interval.days > 1 ? " days" : " day";
  const jour = interval.days && interval.days > 1 ? " jours" : " jour";
  const month = interval.months && interval.months > 1 ? " months " : " month ";

  return (
    <div>
      <Navbar />
      <div className="h-full max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-2xl font-bold mt-2 mb-10">Profile</h1>
        {/*  */}
        <div className="flex flex-col gap-5 mt-10">
          {/* USER INFO AUTH */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <SquareUserRound className="w-20 h-20" />
              <div>
                <p className="text-lg font-semibold">{user?.email}</p>
                <p className="italic text-sm max-sm:text-xs">
                  Inscript depuis :{" "}
                  {StringToDate(String(user?.created_at), true)}{" "}
                  {interval.months && interval.months && (
                    <span>
                      {i18n.language === "fr"
                        ? `| Il y a ${interval.months} mois ${
                            interval.days && " et"
                          } ${interval.days + jour}`
                        : `| ${interval.months + month} ${
                            interval.days && " and"
                          } ${interval.days + day} ago`}
                    </span>
                  )}
                </p>
              </div>
            </div>
            <Button variant="outline" disabled>
              Modifier mon profil
            </Button>
          </div>
          {/* MORE */}
          <div className="grid grid-rows-1 grid-cols-4 sm:grid-cols-6 gap-4">
            <StatCard
              title={"Candidatures"}
              value={candidatures.length}
              icon={<List className="h-4 w-4" />}
            />
            {/* <StatCard title={"Test"} value={tests.length} icon={<List />} /> */}
            {/* <StatCard title={"Test"} value={tests.length} icon={<List />} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
