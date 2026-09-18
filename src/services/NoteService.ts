import { supabase } from "@/lib/supabaseClient";

// ⬇️ Récupérer les données de la table "candidature" pour l'utilisateur connecté dans l'ordre de la date de candidature 
// (dernère date en premier)
export const getNotes = async (userId: string) => {
  const { data, error } = await supabase
    .from("note")
    .select("*")
    .eq("user_id", userId)
    // .order("date", { ascending: false })
  if (error) throw new Error(error.message);
  return data;
};


// ⬇️ Récupérer les données de la table "candidature" pour l'utilisateur connecté dans l'ordre de date de création
// export const getCandidaturesbyDate = async (userId: string) => {
//   const { data, error } = await supabase
//     .from("candidature")
//     .select("*")
//     .eq("user_id", userId)
//     .order("created_at", { ascending: true });
//   if (error) throw new Error(error.message);
//   return data;
// };

// 🆕 Insérer un nouvel enregistrement dans la table "note"
export const insertNote = async (
  userId: string,
  title: string,
  note: string,
) => {
  const { error } = await supabase
    .from("note")
    .insert([{ user_id: userId, title, note }]);
  if (error) throw new Error(error.message);
};

// ❌ Supprimer dans la table "note" par id
export const deleteNote = async (id: string, userId: string) => {
  const { error } = await supabase
    .from("note")
    .delete()
    .eq("id", id)
    .eq("user_id", userId);
  if (error) throw new Error(error.message);
};

// 🔄 Modifier des informations dans la table "note" par id
export const updateNote = async (
  id: string,
  userId: string,
  title: string,
  note: string,
) => {
  const { error } = await supabase
    .from("note")
    .update({ title, note})
    .eq("id", id)
    .eq("user_id", userId);
  if (error) throw new Error(error.message);
};

// 1️⃣ Récupérer une note par son id
export const getNoteById = async (id: string, userId: string) => {
  const { data, error } = await supabase
    .from("note")
    .select("*")
    .eq("id", id)
    .eq("user_id", userId)
    .maybeSingle();

  if (error) throw new Error(error.message);
  return data;
};


// ❌ Supprimer toutes les note de l'utilisateur
export const deleteAllNotes = async (userId: string) => {
  const { error } = await supabase
    .from("note")
    .delete()
    .eq("user_id", userId)
  if (error) throw new Error(error.message);
};
