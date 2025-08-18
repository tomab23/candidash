import LanguageDropdown from '@/components/LanguageDropdown'
import Navbar from '@/components/layout/Navbar'

const SettingsPage = () => {

  return (
    <div>
        <Navbar />
        <div className='h-full max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8'> 
        <h1 className='text-center text-2xl font-bold mt-2 mb-10'>Settings</h1>
        <div className='flex gap-4 items-center justify-center'>
          <h2 className='text-xl'>Langue</h2>
          <LanguageDropdown />
        </div>
        </div>

    </div>
  )
}

export default SettingsPage