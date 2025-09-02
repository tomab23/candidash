import Navbar from "@/components/layout/Navbar";
import { Search, SquarePlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTest } from "@/hooks/useTest";
import TestCard from "@/components/TestCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SkeletonTestCard from "@/components/skeleton/SkeletonTestCard";

import { useState } from "react";
import FilterCandidature from "@/components/FilterCandidature";
import Contenu from "@/helpers/Contenu";
import CandidatureCard from "@/components/CandidatureCard";
import NoList from "@/components/NoList";

const HomePage = () => {
  const { tests } = useTest();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const list = true;

  // const testsByDate = tests.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  // const testsById = tests.sort((a, b) => a.id - b.id);

  return (
    <div className="">
      <Navbar />
      <Contenu>
        {/* HEADER */}
        <div className="flex justify-between my-5 items-center">
          <div>
            <h1 className="text-3xl font-bold">Mes Candidatures</h1>
            <p>
              {/* {tests.length} candidature{tests.length > 1 && "s"} au total */}
              0 candidature / applications au total
            </p>
          </div>
          <Button onClick={() => navigate("/test")} className="">
            <SquarePlus />
            test
          </Button>
          <Button onClick={() => navigate("/candidature")} className="">
            <SquarePlus />
            Nouvelle candidature
          </Button>
        </div>
        {/* SEARCH & FILTER */}
        <div className="flex gap-2 mb-8 flex-wrap">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Rechercher par entreprise, poste ou lieu..."
              // value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          {/* <FilterTest /> */}
          <FilterCandidature
            status={statusFilter}
            setStatus={setStatusFilter}
          />
        </div>
        <p className="text-center">Filtre : {statusFilter}</p>
        {/* LIST */}
        {!tests && <SkeletonTestCard />}
        {tests && (
          <div className="flex justify-center max-sm:mb-10">
            <div className=" grid grid-cols-3 gap-4 xl:grid-cols-4 xl:gap-y-2 xl:gap-x-6 max-sm:grid-cols-2">
              {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 */}
              {tests
                .map((test) => <TestCard key={test.id} test={test} />)
                .reverse()}
            </div>
          </div>
        )}
        <br />
        <br />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CandidatureCard n={true} />
            <CandidatureCard n={false} />
            <CandidatureCard n={false} />
          </div>
        <NoList />
      </Contenu>
    </div>
  );
};

export default HomePage;
