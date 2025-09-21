import { Navigate } from "react-router-dom"
import { useAuth } from "@/context/AuthContext"
import type { JSX } from "react"
import { useTranslation } from "react-i18next"

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  const { user, loading } = useAuth()
  const { t } = useTranslation()

  if (loading) {
    return <div className="text-center">{t("LOADING")}...</div>
  }

  if (!user) {
    return <Navigate to="/" replace />
  }

  return children
}
