import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Status,
  StatusIndicator,
  StatusLabel,
} from "@/components/ui/shadcn-io/status";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useProfile } from "@/hooks/useProfile";
import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { CopyButton } from "../ui/shadcn-io/copy-button";
import { Loader2Icon } from "lucide-react";
import { useTranslation } from "react-i18next";

const PublicCard = () => {
  const { profile, editProfile } = useProfile();
  const { t } = useTranslation();
  const [loading, setLoading] = useState<boolean>(false);
  const [mess, setMess] = useState<string>("")

  const ValidSchema = Yup.object().shape({
    // username: Yup.string().min(3, "Minimum 3 caractères").required("Requis"),
    // open: Yup.boolean().required(),
    // TODO Yup profile edit
  });

  const handleSubmit = async (id: number, username: string, open: boolean) => {
  try {
    await editProfile(id, username, open);
    setMess(t("PROFILE.UPDATE"));
  } catch (error) {
    setMess((error as Error).message);
  }
};

  const formik = useFormik({
    initialValues: {
      id: profile ? profile.id : 0,
      username: profile ? profile.username : "",
      open: profile ? profile.open : false,
    },
    enableReinitialize: true,
    validationSchema: ValidSchema,
    onSubmit: (values) => {
      setLoading(true);
      setMess("")
      if (profile) {
        setTimeout(() => {
          handleSubmit(values.id, values.username, values.open);
          setLoading(false);
        }, 1000);
      }
    },
  });

//   TODO add alert valid change / sonner
//   TODO translate error message/valid message

  return (
    <form onSubmit={formik.handleSubmit}>
      <Card>
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="flex gap-2 items-center">
            <p className="max-sm:text-xs">{t("PUBLIC.TITLE")}</p>
            <Status status={formik.values.open ? "public" : "private"}>
              <StatusIndicator />
              <StatusLabel />
            </Status>
          </CardTitle>
          <CardAction>
            <div className="flex items-center gap-1.5">
              <Label htmlFor="open" className="max-sm:text-xs">
                Public
              </Label>
              <Checkbox
                id="open"
                name="open"
                checked={formik.values.open}
                onCheckedChange={(checked) =>
                  formik.setFieldValue("open", checked)
                }
              />
            </div>
          </CardAction>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col">
            <div>
              <p
                className={`font-bold mb-1 ${
                  !formik.values.open && "text-muted-foreground"
                }`}
              >
                Pseudo
              </p>
              <Input
                autoComplete="additional-name"
                type="text"
                placeholder="Pseudo"
                id="username"
                name="username"
                disabled={!formik.values.open}
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {mess !== "" && <p>{mess}</p>}
            </div>

            <Button type="submit" className="self-end mt-5" disabled={loading}>
              {loading ? <Loader2Icon className="animate-spin" /> : t("BUTTON.VALIDATE")}
            </Button>

            <div className="mt-5 text-sm flex gap-2 items-center max-sm:flex-wrap">
              <p>{t("PUBLIC.LINK")} : </p>
              {formik.values.open && (
                <a
                  href={`https://candidash.netlify.app/user/${profile?.username}`}
                  className="italic hover:underline" 
                >
                  https://candidash.netlify.app/user/{profile?.username}
                </a>
              )}
              <CopyButton
                content={formik.values.open ? `https://candidash.netlify.app/user/${profile?.username}` : ""}
                size="sm"
                className="ml-1"
                disabled={!formik.values.open}
                type="button"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </form>
  );
};

export default PublicCard;
