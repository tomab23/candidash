import type { UpdateIcon } from "@/enums/UpdateIcon";

// "add" | "correction" | "update" | "delete"
export type UpdateInfo = {
  id: number;
  update: UpdateIcon; // 👈 ici tu réutilises ton type
  date: string;
  version: string;
  fr: string;
  en: string;
  classname: string;
};
export const UpdateInfoList: UpdateInfo[] = [
  {
    id: 1,
    update: "update",
    date: "2025-10-01",
    version: "bêta 0.2",
    fr: "Ajout du choix de contrat pour les candidatures",
    en: "Added contract selection for applications",
    classname: "mt-5",
  },
  {
    id: 2,
    update: "add",
    date: "2025-10-02",
    version: "bêta 0.3",
    fr: "Ajouter le tableau de vos archives",
    en: "Add your archive table",
    classname: "",
  },
  {
    id: 3,
    update: "add",
    date: "2025-10-03",
    version: "bêta 0.3",
    fr: "Archiver une candidature",
    en: "Archive an application",
    classname: "mt-5",
  },
  {
    id: 4,
    update: "add",
    date: "2025-10-03",
    version: "bêta 0.4",
    fr: "Vos candidature par contrat",
    en: "Your application by contract",
    classname: "",
  },
];
