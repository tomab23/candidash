import i18n from "@/i18n/i18n";

type SupabaseError = {
  message: string;
  code?: string;   // ex: Postgres error codes ("23505")
  status?: number; // ex: HTTP status (409, 400, etc.)
};

export const parseSupabaseError = (error: SupabaseError): string => {
  if (!error) return i18n.t("ERROR.REQUEST.unknown");


  // ⚙️ Cas 1 : erreurs d'auth (HTTP)
  switch (error.status) {
    case 400:
      return i18n.t("ERROR.REQUEST.badRequest");
    case 401:
      return i18n.t("ERROR.REQUEST.unauthorized");
    case 403:
      return i18n.t("ERROR.REQUEST.forbidden");
    case 404:
      return i18n.t("ERROR.REQUEST.notFound");
    case 409:
      return i18n.t("ERROR.REQUEST.conflict");
    case 422:
      return i18n.t("ERROR.REQUEST.invalidData");
  }

  // ⚙️ Cas 2 : erreurs Postgres
  switch (error.code) {
    case "23505":
      return i18n.t("ERROR.REQUEST.uniqueConstraint");
    case "23503":
      return i18n.t("ERROR.REQUEST.foreignKey");
    case "23514":
      return i18n.t("ERROR.REQUEST.checkConstraint");
  }

  // ⚙️ Cas 3 : fallback
  return i18n.t("ERROR.REQUEST.default", { message: error.message });
};
