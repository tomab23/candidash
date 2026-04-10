import { supabase } from "@/lib/supabaseClient";

// ⬇️ Récupérer les données de la table "candidature" pour l'utilisateur connecté dans l'ordre des candidatures mis a jour
export const getCandidatures = async (userId: string) => {
  const { data, error } = await supabase
    .from("candidature")
    .select("*")
    .eq("user_id", userId)
    .eq("interest", false)
  if (error) throw new Error(error.message);
  return data;
};

// ⬇️📁 Récupérer les données de la table "candidature" archivé pour l'utilisateur connecté dans l'ordre des candidatures mis a jour
export const getArchives = async (userId: string) => {
  const { data, error } = await supabase
    .from("candidature")
    .select("*")
    .eq("user_id", userId)
    .eq("archive", true)
  if (error) throw new Error(error.message);
  return data;
};

// ⬇️👍 Récupérer les données de la table "candidature" interest pour l'utilisateur connecté dans l'ordre des candidatures mis a jour
export const getInterest = async (userId: string) => {
  const { data, error } = await supabase
    .from("candidature")
    .select("*")
    .eq("user_id", userId)
    .eq("interest", true)
  if (error) throw new Error(error.message);
  return data;
};

// ⬇️ Récupérer les données de la table "candidature" pour l'utilisateur connecté dans l'ordre de date de création
export const getCandidaturesbyDate = async (userId: string) => {
  const { data, error } = await supabase
    .from("candidature")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: true });
  if (error) throw new Error(error.message);
  return data;
};

// 🆕 Insérer un nouvel enregistrement dans la table "candidature"
export const insertCandidature = async (
  userId: string,
  company: string,
  job: string,
  date: string,
  status: string,
  link: string | undefined,
  note: string | undefined,
  place: string,
  contract: string,
  interest: boolean,
) => {
  const { error } = await supabase
    .from("candidature")
    .insert([{ user_id: userId, company, job, date, status, link, note, place, contract, interest }]);
  if (error) throw new Error(error.message);
};

// ❌ Supprimer dans la table "candidature" par id
export const deleteCandidature = async (id: number, userId: string) => {
  const { error } = await supabase
    .from("candidature")
    .delete()
    .eq("id", id)
    .eq("user_id", userId);
  if (error) throw new Error(error.message);
};

// 🔄 Modifier des informations dans la table "candidature" par id
export const updateCandidature = async (
  id: number,
  userId: string,
  company: string,
  job: string,
  date: string,
  status: string,
  link: string | undefined,
  note: string | undefined,
  place: string,
  contract: string,
  interest: boolean,
) => {
  const { error } = await supabase
    .from("candidature")
    .update({ company, job, date, status, link, note, place, contract, interest })
    .eq("id", id)
    .eq("user_id", userId);
  if (error) throw new Error(error.message);
};

// 1️⃣ Récupérer une candidature par son id
export const getCandidatureById = async (id: number, userId: string) => {
  const { data, error } = await supabase
    .from("candidature")
    .select("*")
    .eq("id", id)
    .eq("user_id", userId)
    .maybeSingle();

  if (error) throw new Error(error.message);
  return data;
};

// ❌ Supprimer toutes les infos de candidature de l'utilisateur puis l'utilisateur
export const deleteUser = async (userId: string) => {
  // Supprimer les données liées
  const { error: canError } = await supabase.from("candidature").delete().eq("user_id", userId)
  if (canError) throw canError

  // Supprimer l'utilisateur
  const { error: userError } = await supabase.auth.admin.deleteUser(userId)
  if (userError) throw userError

  return true
}

// Mettre ou Resote archive
export const toggleArchive = async (
  id: number,
  userId: string,
  currentArchive: boolean
) => {
  const { error } = await supabase
    .from("candidature")
    .update({ archive: !currentArchive })
    .eq("id", id)
    .eq("user_id", userId);
  if (error) throw new Error(error.message);
};

// ❌ Supprimer toutes les archives de l'utilisateur
export const deleteAllArchives = async (userId: string) => {
  const { error } = await supabase
    .from("candidature")
    .delete()
    .eq("user_id", userId)
    .eq("archive", true);
  if (error) throw new Error(error.message);
};
