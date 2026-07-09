import { useCallback, useEffect, useState } from "react"
import { useAuth } from "@/context/AuthContext"
import { deleteNote, getNoteById, getNotes, insertNote, updateNote } from "@/services/NoteService"
import type Note from "@/models/Note"

export const useTest = () => {
  const { user } = useAuth()
  const [notes, setNotes] = useState<Note[]>([])
  const [loading, setLoading] = useState(false)

//   récupere toutes les notes de l'utilisateur
const fetchNotes = useCallback(async () => {
  if (!user) return
  setLoading(true)
  try {
    const data = await getNotes(user.id)
    setNotes(data)
  } catch (err) {
    console.error(err)
  } finally {
    setLoading(false)
  }
}, [user])

// ajouter une note
  const addNote = async (title: string, note : string) => {
    if (!user) return
    await insertNote(user.id, title, note)
    await fetchNotes()
  }


  const editNote = useCallback(
    async (id: number, title: string, note : string) => {
      if (!user) return
      await updateNote(id, user.id, title, note)
      await fetchNotes()
    },
    [user, fetchNotes]
  )

//   supprimer une note
  const removeNote = async (id: number) => {
    if (!user) return
    await deleteNote(id, user.id)
    setNotes((prev) => prev.filter((t) => t.id !== id))
  }


//  récuperer une note par son id
  const fetchNoteById = async (id: number) => {
    if (!user) return null
    return await getNoteById(id, user.id)
  }



    // Effect pour charger les données initiales
  useEffect(() => {
    const load = async () => {
      if (user) {
        await fetchNotes()
      } else {
        setNotes([])
        // setError(null)
      }
    }
    load()
  }, [user, fetchNotes])

  return {
    notes,
    loading,
    fetchNotes,
    addNote,
    editNote,
    removeNote,
    fetchNoteById,
  }
}
