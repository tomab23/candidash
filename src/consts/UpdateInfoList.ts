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
    version: "v0.2",
    fr: "Choix de contrat pour les candidatures",
    en: "Contract selection for applications",
    classname: "mt-5",
  },
  {
    id: 2,
    update: "add",
    date: "2025-10-02",
    version: "v0.3",
    fr: "Un tableau pour vos archives",
    en: "A chart for your archives",
    classname: "",
  },
  {
    id: 3,
    update: "add",
    date: "2025-10-03",
    version: "v0.3",
    fr: "Vos candidature par contrat",
    en: "Your application by contract",
    classname: "mt-5",
  },
    {
    id: 4,
    update: "add",
    date: "2025-10-06",
    version: "v0.4",
    fr: "Archiver et restorer une candidature",
    en: "Archive and restore an application",
    classname: "",
  },
      {
    id: 5,
    update: "add",
    date: "2025-10-06",
    version: "v0.4",
    fr: "Supprimer une archive",
    en: "Delete an archive",
    classname: "",
  },
        {
    id: 6,
    update: "add",
    date: "2025-10-20",
    version: "v0.4",
    fr: "Bouton pour supprimer toutes vos archives",
    en: "Button deletes all your archives",
    classname: "mt-5",
  },
          {
    id: 7,
    update: "add",
    date: "2025-10-28",
    version: "v0.5",
    fr: "Mettre votre profil en public et création ou modification de votre pseudo",
    en: "Make your profile public and create or change your username",
    classname: "",
  },
  {
    id: 8,
    update: "correction",
    date: "2025-10-28",
    version: "v0.5",
    fr: "Correction d'un problème avec le bouton copier pour le lien de votre profil",
    en: "Fixed an issue with the copy button for your profile link",
    classname: "",
  },
  {
    id: 9,
    update: "correction",
    date: "2026-01-27",
    version: "v0.5",
    fr: "Correction du problème lié aux textes trop long qui créaient des décalages sur les cartes de candidature",
    en: "Fixed an issue where overly long text caused misalignment on application cards",
    classname: "",
  },
  {
    id: 10,
    update: "correction",
    date: "2026-02-09",
    version: "v0.5",
    fr: "Correction d'un problème d'affichage de la traduction",
    en: "Fixed an issue with translation display",
    classname: "",
  },
  {
    id: 11,
    update: "correction",
    date: "2026-02-09",
    version: "v0.5",
    fr: "Correction d'un problème visuel sur mobile pour le lien du profil public dans les paramètres",
    en: "Fixed a visual issue on mobile for the public profile link in Settings",
    classname: "",
  },
  {
    id: 12,
    update: "update",
    date: "2026-02-09",
    version: "v0.5",
    fr: "Traduction de la carte profil dans les paramètres",
    en: "Translation of the profile card in the settings",
    classname: "",
  },
];
