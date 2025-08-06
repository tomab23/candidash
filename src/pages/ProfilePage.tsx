import Navbar from "@/components/layout/Navbar"
import { useTheme } from "@/components/theme-provider"

const ProfilePage = () => {

  const { theme, setTheme } = useTheme()

  return (
    <div className="min-h-screen text-primary">
      <Navbar modeToggle={true} />

      profil page
      <h1 className="!text-red-800 dark:!text-green-600">TEST COLOR</h1>
      <p className="text-red-800 dark:text-green-600">Mon texte</p>
      <br /><br /><br />

          <div className="flex gap-2 items-center">
      <button onClick={() => setTheme("light")}>☀️ Light</button>
      <button onClick={() => setTheme("dark")}>🌙 Dark</button>
      <button onClick={() => setTheme("system")}>💻 System</button>
      <span className="text-sm text-muted-foreground">Thème actuel : {theme}</span>
    </div>
    </div>
  )
}

export default ProfilePage