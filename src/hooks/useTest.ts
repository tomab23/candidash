import { useCallback, useEffect, useState } from "react"
import { useAuth } from "@/context/AuthContext"
import { getTestData, insertTestData, updateTestData, deleteTestData, getTestById } from "@/services/TestService"
import type Test from "@/models/Test"

export const useTest = () => {
  const { user } = useAuth()
  const [tests, setTests] = useState<Test[]>([])
  const [loading, setLoading] = useState(false)
  // const [count, setCount] = useState<number | null>(null)

//   récupere tous les tests de l'utilisateur
const fetchTests = useCallback(async () => {
  if (!user) return
  setLoading(true)
  try {
    const data = await getTestData(user.id)
    setTests(data)
  } catch (err) {
    console.error(err)
  } finally {
    setLoading(false)
  }
}, [user])

// ajouter un test
  const addTest = async (name: string, age: number, place: string, gender: string) => {
    if (!user) return
    await insertTestData(user.id, name, age, place, gender)
    await fetchTests()
  }

//  mettre a jour un test
  // const editTest = async (id: number, name: string, age: number, place: string) => {
  //   if (!user) return
  //   await updateTestData(id, user.id, name, age, place)
  //   await fetchTests()
  // }
  const editTest = useCallback(
    async (id: number, name: string, age: number, place: string, gender: string) => {
      if (!user) return
      await updateTestData(id, user.id, name, age, place, gender)
      await fetchTests()
    },
    [user, fetchTests]
  )

//   supprimer un test
  const removeTest = async (id: number) => {
    if (!user) return
    await deleteTestData(id, user.id)
    setTests((prev) => prev.filter((t) => t.id !== id))
  }
//   const removeTest = useCallback(
//     async (id: number) => {
//       if (!user) return
//       await deleteTestData(id, user.id)
//       setTests((prev) => prev.filter((t) => t.id !== id))
//       setCount((prev) => (prev !== null ? prev - 1 : prev))
//     },
//     [user]
//   )

//  récuperer un test par son id
  const fetchTestById = async (id: number) => {
    if (!user) return null
    return await getTestById(id, user.id)
  }


  // useEffect(() => {
  //   const load = async () => {
  //     if (user) {
  //       await fetchTests()
  //     } else {
  //       setTests([])
  //     }
  //   }
  //   load()
  // }, [user, fetchTests])

    // Effect pour charger les données initiales
  useEffect(() => {
    const load = async () => {
      if (user) {
        await fetchTests()
      } else {
        setTests([])
        // setError(null)
      }
    }
    load()
  }, [user, fetchTests])

  return {
    tests,
    loading,
    fetchTests,
    addTest,
    editTest,
    removeTest,
    fetchTestById,
    // count,
    // fetchTestCount,
  }
}
