import { useCallback, useEffect, useState } from "react"
import { useAuth } from "@/context/AuthContext"
import { getCandidatures, insertCandidature, updateCandidature, deleteCandidature, getCandidatureById  } from "@/services/CandidatureService"
import type Candidature from "@/models/Candidature"

export const useCandidature = () => {
  const { user } = useAuth()
  const [candidatures, setCandidatures] = useState<Candidature[]>([])
  const [loading, setLoading] = useState(false)
  // const [count, setCount] = useState<number | null>(null)

//  récupere toutes les candidatures de l'utilisateur
const fetchCandidatures = useCallback(async () => {
  if (!user) return
  setLoading(true)
  try {
    const data = await getCandidatures(user.id)
    setCandidatures(data)
  } catch (err) {
    console.error(err)
  } finally {
    setLoading(false)
  }
}, [user])

// ajouter une candidature
const addCandidature = async (
  company: string,
  job: string,
  date: Date,
  status: string,
  link: string | undefined,
  note: string | undefined,
  place: string
  ) => {
    if (!user) return
    await insertCandidature(user.id, company, job, date, status, link, note, place)
    await fetchCandidatures()
  }

//  mettre a jour une candidature
  const editCandidature = useCallback(
    async (id: number,   company: string,
  job: string,
  date: Date,
  status: string,
  link: string | undefined,
  note: string | undefined,
  place: string
) => {
      if (!user) return
      await updateCandidature(id, user.id, company, job, date, status, link, note, place)
      await fetchCandidatures()
    },
    [user, fetchCandidatures]
  )

//   supprimer une candidature
  const removeCandidature = async (id: number) => {
    if (!user) return
    await deleteCandidature(id, user.id)
    setCandidatures((prev) => prev.filter((c) => c.id !== id))
  }
//   const removeCandidature = useCallback(
//     async (id: number) => {
//       if (!user) return
//       await deleteCandidature(id, user.id)
//       setCandidatures((prev) => prev.filter((c) => c.id !== id))
//       setCount((prev) => (prev !== null ? prev - 1 : prev))
//     },
//     [user]
//   )

//  récuperer une candidature par son id
  const fetchCandidatureById = async (id: number) => {
    if (!user) return null
    return await getCandidatureById(id, user.id)
  }

// Effect pour charger les données initiales
  useEffect(() => {
    const load = async () => {
      if (user) {
        await fetchCandidatures()
      } else {
        setCandidatures([])
        // setError(null)
      }
    }
    load()
  }, [user, fetchCandidatures])

  return {
    candidatures,
    loading,
    fetchCandidatures,
    addCandidature,
    editCandidature,
    removeCandidature,
    fetchCandidatureById,
    // count,
    // fetchTestCount,
  }
}
