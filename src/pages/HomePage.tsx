import Navbar from "@/components/layout/Navbar"
import { useTheme } from "@/components/theme-provider"

const HomePage = () => {

  const { theme, setTheme } = useTheme()

  return (
    <div className="min-h-screen">
      <Navbar modeToggle={false} />

      <br /><br /><br />

      <div className="p-4 bg-white text-black dark:bg-black dark:text-white">
  Couleur selon le thème
</div>

    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? "☀️ Mode clair" : "🌙 Mode sombre"}
    </button>
    </div>
  )
}

export default HomePage