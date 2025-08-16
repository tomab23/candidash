import { createContext, useContext, useEffect, useState } from "react"
import type { ReactNode } from "react"
import { supabase } from "@/lib/supabaseClient"
import type { User } from "@supabase/supabase-js"
import type Test from "@/models/Test"

type AuthContextType = {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<{ error: string | null }>
  register: (email: string, password: string) => Promise<{ error: string | null }>
  logout: () => Promise<void>
  getTestData: () => Promise<Test[] | null>
  getTestById: (id: number) => Promise<Test | null> // 🆕
  insertTestData: (name: string, age: number, place: string) => Promise<{ error: string | null }>
  deleteTestData: (id: number) => Promise<{ error: string | null }>
    updateTestData: (
    id: number,
    name: string,
    age: number,
    place: string
  ) => Promise<{ error: string | null }>
  // loginWithProvider: (provider: "google" | "github") => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Récupère la session au démarrage
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null)
      setLoading(false)
    })

    // Écoute les changements d'état
    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => {
      subscription.subscription.unsubscribe()
    }
  }, [])

  const login = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password }) 
    return { error: error ? error.message : null }
  }

  const register = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({ email, password })
    return { error: error ? error.message : null }
  }

  const logout = async () => {
    await supabase.auth.signOut()
  }

  // ⬇️ Récupérer les données de la table "test" pour l'utilisateur connecté
  const getTestData = async () => {
    if (!user) return null

    const { data, error } = await supabase
      .from("test")
      .select("*")
      .eq("id_user", user.id) // "id_user" doit être la colonne FK vers auth.users.id

    if (error) {
      console.error("Erreur récupération test:", error.message)
      return null
    }

    return data
  }

  // 🆕 Insérer un nouvel enregistrement dans la table "test"
  const insertTestData = async (name: string, age: number, place: string) => {
    if (!user) return { error: "Utilisateur non connecté" }

    const { error } = await supabase.from("test").insert([
      {
        name,
        age,
        place,
        id_user: user.id,
      },
    ])

    return { error: error ? error.message : null }
  }

  // ❌ Supprimer dans la table "test" par id
  const deleteTestData = async (id: number) => {
  if (!user) return { error: "Utilisateur non connecté" }

  const { error } = await supabase
    .from("test")
    .delete()
    .eq("id", id) // ID de la ligne à supprimer
    .eq("id_user", user.id) // Sécurité côté front

  return { error: error ? error.message : null }
}

// 🔄 Modifier des informations dans la table "test"
const updateTestData = async (id: number, name: string, age: number, place: string) => {
  if (!user) return { error: "Utilisateur non connecté" }

  const { error } = await supabase
    .from("test")
    .update({
      name,
      age,
      place,
    })
    .eq("id", id)
    .eq("id_user", user.id) // sécurité côté front

  return { error: error ? error.message : null }
}

// 1️⃣ Récupérer un test par son id
const getTestById = async (id: number) => {
  if (!user) return null

  const { data, error } = await supabase
    .from("test")
    .select("*")
    .eq("id", id)
    .eq("id_user", user.id)
    .single()

  if (error) {
    console.error("Erreur getTestById:", error.message)
    return null
  }

  return data
}


  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        getTestData,
        insertTestData,
        deleteTestData,
        updateTestData,
        getTestById
        // loginWithProvider,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext)
  
  if (!context) {
    throw new Error("useAuth must be used inside an AuthProvider")
  }
  return context
}
