import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const NotFoundPage = () => {
    const { t } = useTranslation()
  return (
  <div className="min-h-screen flex items-center justify-center">
      <div className="text-center p-6 max-w-md mx-auto">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">{t("404.TITLE")}</h2>
        <p className="text-gray-600 dark:text-gray-200 mb-6">
          {t("404.TEXT")}
        </p>
        <Link
          to="/home"
          className="inline-block px-6 py-3 bg-primary hover:bg-primary/90 text-white dark:text-black font-medium rounded-lg transition"
        >
          {t("BUTTON.404")}
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage