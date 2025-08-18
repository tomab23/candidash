import LanguageDropdown from '@/components/LanguageDropdown'
import Navbar from '@/components/layout/Navbar'

const SettingsPage = () => {
  // const { user } = useAuth()
  // if (!user) return <Navigate to="/login" replace />

  return (
    <div>
        <Navbar />
        SettingsPage

        <div className='flex gap-4 items-center justify-center'>
          <h2 className='text-xl'>Langue</h2>
          <LanguageDropdown />
        </div>
    </div>
  )
}

export default SettingsPage