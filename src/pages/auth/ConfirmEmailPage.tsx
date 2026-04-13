import ImgTitle from "@/components/ImgTitle";
import Contenu from "@/helpers/Contenu";
import { ArrowLeftIcon, MailIcon } from "lucide-react";
import { Link } from "react-router-dom";

const ConfirmEmailPage = () => {
  return (
    <div className="min-h-screen">
      <Contenu>
        <div className="h-[15vh] flex justify-center items-center">
          <ImgTitle />
        </div>

        <div className="h-[65vh] flex flex-col items-center justify-center gap-5">
          <MailIcon className="w-14 h-14 bg-muted-foreground/30 rounded-2xl p-3" />
          <p className="text-2xl font-bold">Vérifiez vos emails</p>

          <div className="w-[60%] max-sm:w-[95%] text-center">
            <p className="text-muted-foreground">
              Nous avons envoyé un lien de confirmation dans votre boite de
              réception. Cliquez dessus pour acitver votre compte.
            </p>

{/* TODO ajouter l'email venu de la page d'inscription - navigate("/confirm, {state: "mail"}") */}
            <p className="mt-4 text-xl">mail@mail.com</p>
          </div>

          <p className="text-muted-foreground">
            Pas reçu ? Vérifiez vos spams.
          </p>

          <Link to={"/"} className="flex gap-1 items-center mt-5">
            <ArrowLeftIcon className="w-4 h-4 mt-0.5" /> Retour à la connexion
          </Link>
        </div>
      </Contenu>
    </div>
  );
};

export default ConfirmEmailPage;
