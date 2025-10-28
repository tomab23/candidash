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
    fr: "Choix de contrat pour les candidatures",
    en: "Contract selection for applications",
    classname: "mt-5",
  },
  {
    id: 2,
    update: "add",
    date: "2025-10-02",
    version: "bêta 0.3",
    fr: "Un tableau pour vos archives",
    en: "A chart for your archives",
    classname: "",
  },
  {
    id: 3,
    update: "add",
    date: "2025-10-03",
    version: "bêta 0.3",
    fr: "Vos candidature par contrat",
    en: "Your application by contract",
    classname: "mt-5",
  },
    {
    id: 4,
    update: "add",
    date: "2025-10-06",
    version: "bêta 0.4",
    fr: "Archiver et restorer une candidature",
    en: "Archive and restore an application",
    classname: "",
  },
      {
    id: 5,
    update: "add",
    date: "2025-10-06",
    version: "bêta 0.4",
    fr: "Supprimer une archive",
    en: "Delete an archive",
    classname: "",
  },
        {
    id: 6,
    update: "add",
    date: "2025-10-20",
    version: "bêta 0.4",
    fr: "Bouton pour supprimer toutes vos archives",
    en: "Button deletes all your archives",
    classname: "mt-5",
  },
          {
    id: 7,
    update: "add",
    date: "2025-10-28",
    version: "bêta 0.5",
    fr: "Mettre votre profil en public et création ou modification de votre pseudo",
    en: "Make your profile public and create or change your username",
    classname: "",
  },
];
