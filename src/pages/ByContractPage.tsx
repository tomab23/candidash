import Header from "@/components/layout/Header"
import Navbar from "@/components/layout/Navbar"
import Contenu from "@/helpers/Contenu"
import { useLocation } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

type LocationState = {
  value: string;
  name: string;
};

const ByContractPage = () => {
    const location = useLocation();
    const state = location.state as LocationState;

    if (!state) return <NotFoundPage />;
    
    

  return (
    <div>
        <Navbar />
        <Contenu>
            <Header title={state?.name} />
                  <p>Value: {state?.value}</p>
        </Contenu>
    </div>
  )
}

export default ByContractPage