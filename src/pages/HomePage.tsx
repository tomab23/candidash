import Navbar from "@/components/layout/Navbar";
import { Search, SquarePlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useState } from "react";
import FilterCandidature from "@/components/FilterCandidature";
import Contenu from "@/helpers/Contenu";
import CandidatureCard from "@/components/CandidatureCard";
import NoList from "@/components/NoList";
import { useCandidature } from "@/hooks/useCandidature";

const HomePage = () => {
  const { candidatures, loading } = useCandidature();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [statusFilter, setStatusFilter] = useState<string>("all");

  // console.log(candidatures);
  

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
              {candidatures.length} candidature{candidatures.length > 1 && "s"} au total
              {/* 0 candidature / applications au total */}
            </p>
          </div>
          <Button onClick={() => navigate("/candidature")} className="">
            <SquarePlus />
            Nouvelle candidature
          </Button>
        </div>
        {/* SEARCH & FILTER */}
        <div className="flex gap-2 mb-5 flex-wrap">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Rechercher par entreprise, poste ou lieu..."
              // value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <FilterCandidature
            status={statusFilter}
            setStatus={setStatusFilter}
          />
        </div>
        <p className="text-center">Filtre : {statusFilter}</p>
        {/* LIST */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {candidatures.map((c) => (
              <CandidatureCard key={c.id} candidature={c} />
            )).reverse()}
          </div>
        {loading && <p className="text-center mt-5">Chargement...</p>}
        {candidatures.length === 0 && !loading && <NoList />}
      </Contenu>
    </div>
  );
};

export default HomePage;
