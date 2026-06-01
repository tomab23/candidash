import { supabase } from "@/lib/supabaseClient";
import { parseSupabaseError } from "@/utils/supabaseError";


// ⬇️ Récupérer les données de la table "profile"
export const getProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from("profile")
    .select("*")
    .eq("user_id", userId)
    .single()
  if (error) throw new Error(error.message);
  return data;
};

// ⬇️ Récupérer le status du profile
export const getStatus = async (userId: string) => {
  const { data, error } = await supabase
    .from("profile")
    .select("open")
    .eq("user_id", userId)
    .maybeSingle()
  if (error) throw new Error(error.message);
  return data?.open;
};

// 🆕 Ajouter dans la table "profile"
export const insertProfile = async (
  userId: string,
  username: string | null,
  open: boolean
) => {
  const { error } = await supabase
    .from("profile")
    .insert([{ user_id: userId, username, open }]);
  if (error) throw new Error(error.message);
};

// 🔄 Modifier des informations dans la table "profile" par id
export const updateProfile = async (
  id: number,
  userId: string,
  username: string,
  open: boolean
) => {
  const { error } = await supabase
    .from("profile")
    .update({ username, open })
    .eq("id", id)
    .eq("user_id", userId);
  if (error) {
    throw new Error(parseSupabaseError(error));
  }
};