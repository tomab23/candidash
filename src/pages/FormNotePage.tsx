import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Contenu from "@/helpers/Contenu";
import { useNote } from "@/hooks/useNote";
import type Note from "@/models/Note";
import { useFormik } from "formik";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import InputCandidature from "@/components/custom/InputCandidature";
import { Textarea } from "@/components/ui/textarea";
import { DialogDeleteNote } from "@/components/dialogs/DialogDeleteNote";

const FormNotePage = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { editNote, addNote } = useNote();
  const [note, setNote] = useState<Note>();

  const requiredMsg = t("ERROR.REQUIRED");

  const ValidSchema = Yup.object().shape({
    title: Yup.date().required(requiredMsg),
    note: Yup.string().required(requiredMsg),
  });

  const formik = useFormik({
    initialValues: {
      title: note?.note ?? "",
      note: note?.note ?? "",
    },
    enableReinitialize: true,
    validationSchema: ValidSchema,
    onSubmit: async (values) => {
      // alert(JSON.stringify(values));

      if (id) {
        await editNote(id, values.title, values.note);
      } else {
        await addNote(values.title, values.note);
      }

      navigate(-1);
    },
  });

  return (
    <div>
      <Navbar />
      <Contenu>
        <Header title={id ? t("HEADER.EDIT") : t("HEADER.ADD")} />

        <Card className="w-full justify-self-center mt-5">
          <CardHeader>
            <CardTitle className="text-xl max-sm:text-lg">
              {id ? t("NOTE.EDIT") : t("NOTE.ADD")}
            </CardTitle>
            {id && (
              <p className="text-xs text-muted-foreground">Note crée le : </p>
            )}
            <CardAction>
              <Button
                variant={"ghost"}
                size={"sm"}
                onClick={() => formik.resetForm()}
              >
                {t("FORM.RESET")}
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            {/* FORM */}
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col justify-center gap-4"
            >
              <InputCandidature
                name={"title"}
                value={formik.values.title}
                onChange={formik.handleChange}
                placeholder={t("NOTE.TITLE")}
                label={t("NOTE.TITLE")}
                classname="w-72 max-sm:w-[17.5rem]"
              />

              <InputCandidature name={"note"} label={"Note"}>
                <Textarea
                  className="h-40"
                  id="note"
                  name="note"
                  onChange={formik.handleChange}
                  value={formik.values.note ? formik.values.note : ""}
                  placeholder={t("PLACEHOLDER.NOTE")}
                />
              </InputCandidature>

              <div className={`mt-5 flex items-center ${id ? "justify-between" : "justify-end"}`}>
                {id && 
                <DialogDeleteNote id={id} title={note?.title} />
                }
                <Button type="submit">
                  {id ? t("NOTE.EDIT") : t("NOTE.BUTTON")}
                </Button>
              </div>

              {/* ERRORS */}
              {formik.submitCount > 0 &&
                Object.values(formik.errors).length > 0 && (
                  <div className="text-destructive">{t("NOTE.ERROR")}</div>
                )}
            </form>
          </CardContent>
        </Card>
      </Contenu>
    </div>
  );
};

export default FormNotePage;
