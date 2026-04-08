import InterestCard from "@/components/cards/InterestCard";
import Navbar from "@/components/layout/Navbar"
import Contenu from "@/helpers/Contenu"
import { useCandidature } from "@/hooks/useCandidature";

export const InterestPage = () => {
    const { interests } = useCandidature();

    console.log(interests);
    
  return (
    <div>
        <Navbar />
        <Contenu>
            <p>Interest Page</p>
            <InterestCard />
        </Contenu>
    </div>
  )
}
