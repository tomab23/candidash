import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Contenu from "@/helpers/Contenu";
import { useCandidature } from "@/hooks/useCandidature";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArchiveRestore, Edit, Trash2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ArchivesPage = () => {
  const { archives } = useCandidature();
  const navigate = useNavigate();
  const { t } = useTranslation();

  // console.log(archives);

  return (
    <div>
      <Navbar />
      <Contenu>
        <Header title={"Archives"} />

        <div className="flex justify-between my-5">
                  <p className="font-semibold text-xl">
          {t("ARCHIVES.TITLE")} : {archives.length}
        </p>
        <Button variant={"destructive"} disabled>Delete all</Button>
        </div>

        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead>{t("FORM.COMPANY")}</TableHead>
              <TableHead>{t("FORM.JOB")}</TableHead>
              <TableHead>{t("FORM.CONTRACT")}</TableHead>
              <TableHead className="text-center">{t("FORM.PLACE")}</TableHead>
              <TableHead className="text-center">{t("HEADER.EDIT")}</TableHead>
              <TableHead className="text-center">{t("RESTORE")}</TableHead>
              <TableHead className="text-center">
                {t("BUTTON.DELETE")}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {archives.map((a) => (
              <TableRow key={a.id}>
                <TableCell className="font-medium">{a.company}</TableCell>
                <TableCell>{a.job}</TableCell>
                <TableCell>{a.contract}</TableCell>
                <TableCell className="text-center">{a.place}</TableCell>
                <TableCell className="w-14">
                  <Edit
                    className="w-5 h-5 mx-auto hover:scale-110 hover:cursor-pointer"
                    onClick={() => navigate(`/candidature/${a.id}`)}
                  />
                </TableCell>
                <TableCell className="w-14">
                  <ArchiveRestore className="w-5 h-5 mx-auto dark:stroke-blue-300 stroke-blue-700 hover:scale-110 hover:cursor-pointer" />
                </TableCell>
                <TableCell className="w-14">
                  <Trash2 className="w-5 h-5 mx-auto stroke-destructive hover:scale-110 hover:cursor-pointer" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Contenu>
    </div>
  );
};

export default ArchivesPage;
