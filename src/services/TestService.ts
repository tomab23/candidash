import { supabase } from "@/lib/supabaseClient"

  
  // ⬇️ Récupérer les données de la table "test" pour l'utilisateur connecté dans l'ordre des test mis a jour
export const getTestData = async (userId: string) => {
  const { data, error } = await supabase
    .from("test")
    .select("*")
    .eq("id_user", userId)
  if (error) throw new Error(error.message)
  return data
}

  // ⬇️ Récupérer les données de la table "test" pour l'utilisateur connecté dans l'ordre de date de création
export const getTestDatabyDate = async (userId: string) => {
  const { data, error } = await supabase
    .from("test")
    .select("*")
    .eq("id_user", userId)
    .order('created_at', { ascending: true })
  if (error) throw new Error(error.message)
  return data
}

  // 🆕 Insérer un nouvel enregistrement dans la table "test"
export const insertTestData = async (userId: string, name: string, age: number, place: string, gender: string) => {
  const { error } = await supabase.from("test").insert([{ name, age, place, id_user: userId, gender }])
  if (error) throw new Error(error.message)
}

  // ❌ Supprimer dans la table "test" par id
export const deleteTestData = async (id: number, userId: string) => {
  const { error } = await supabase
    .from("test")
    .delete()
    .eq("id", id)
    .eq("id_user", userId)
  if (error) throw new Error(error.message)
}

// 🔄 Modifier des informations dans la table "test"
export const updateTestData = async (id: number, userId: string, name: string, age: number, place: string, gender: string) => {
  const { error } = await supabase
    .from("test")
    .update({ name, age, place, gender })
    .eq("id", id)
    .eq("id_user", userId)
  if (error) throw new Error(error.message)
}

// 1️⃣ Récupérer un test par son id
export const getTestById = async (id: number, userId: string) => {
  const { data, error } = await supabase
    .from("test")
    .select("*")
    .eq("id", id)
    .eq("id_user", userId)
    .maybeSingle()

  if (error) throw new Error(error.message)
  return data
}