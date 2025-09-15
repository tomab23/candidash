import { supabase } from "@/lib/supabaseClient";

// ⬇️ Récupérer les données de la table "candidature" pour l'utilisateur connecté dans l'ordre des candidatures mis a jour
export const getCandidatureData = async (userId: string) => {
  const { data, error } = await supabase
    .from("candidature")
    .select("*")
    .eq("user_id", userId);
  if (error) throw new Error(error.message);
  return data;
};

// ⬇️ Récupérer les données de la table "candidature" pour l'utilisateur connecté dans l'ordre de date de création
export const getCandidatureDatabyDate = async (userId: string) => {
  const { data, error } = await supabase
    .from("candidature")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: true });
  if (error) throw new Error(error.message);
  return data;
};

// 🆕 Insérer un nouvel enregistrement dans la table "candidature"
export const insertCandidatureData = async (
  userId: string,
  company: string,
  job: string,
  date: Date,
  status: string,
  link: string,
  note: string
) => {
  const { error } = await supabase
    .from("candidature")
    .insert([{ user_id: userId, company, job, date, status, link, note }]);
  if (error) throw new Error(error.message);
};

// ❌ Supprimer dans la table "candidature" par id
export const deleteCandidatureData = async (id: number, userId: string) => {
  const { error } = await supabase
    .from("candidature")
    .delete()
    .eq("id", id)
    .eq("user_id", userId);
  if (error) throw new Error(error.message);
};

// 🔄 Modifier des informations dans la table "candidature" par id
export const updateCandidatureData = async (
  id: number,
  userId: string,
  company: string,
  job: string,
  date: Date,
  status: string,
  link: string,
  note: string
) => {
  const { error } = await supabase
    .from("test")
    .update({ company, job, date, status, link, note })
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
