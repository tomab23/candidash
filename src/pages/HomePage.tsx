import Navbar from "@/components/layout/Navbar";
import { SquarePlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTest } from "@/hooks/useTest";
import TestCard from "@/components/TestCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FilterTest from "@/components/FilterTest";
import SkeletonTestCard from "@/components/skeleton/SkeletonTestCard";

const HomePage = () => {
  const { tests } = useTest();
  const navigate = useNavigate();
  const { t } = useTranslation();

  // const testsByDate = tests.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  // const testsById = tests.sort((a, b) => a.id - b.id);

  return (
    <div className="">
      <Navbar />
      <p className="text-center my-5">{t("HELLO")}</p>
      <div className="h-full max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-2 mb-8">
          <Input type="search" placeholder="Search..." />
          <FilterTest />
          <Button onClick={() => navigate("/test")} className="">
            <SquarePlus />
            Ajouter
          </Button>
        </div>
        <p className="text-right mr-1 p-1 max-sm:mr-2 max-sm:text-sm">Nombre de tests : {tests.length}</p>
        {!tests && <SkeletonTestCard />}
        {tests && (
          <div className="flex justify-center max-sm:mb-10">
            <div className=" grid grid-cols-3 gap-4 xl:grid-cols-4 xl:gap-y-2 xl:gap-x-6 max-sm:grid-cols-2">
              {tests
                .map((test) => <TestCard key={test.id} test={test} />)
                .reverse()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
