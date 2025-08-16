import LanguageDropdown from "@/components/LanguageDropdown"
import { ModeToggle } from "@/components/mode-toggle"

const ForgotPasswordPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
          <div className="absolute top-10 flex gap-5 ">
      <ModeToggle />
      <LanguageDropdown />
    </div>
      ForgotPassword</div>
  )
}

export default ForgotPasswordPage