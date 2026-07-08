import Header from '@/components/layout/Header'
import Navbar from '@/components/layout/Navbar'
import { Badge } from '@/components/ui/badge'
import Contenu from '@/helpers/Contenu'
import { useTranslation } from 'react-i18next'

const SearchPage = () => {
    const { t } = useTranslation();

  return (
    <div>
        <Navbar />
        <Contenu>
            <Header title={t("TITLE.SEARCH")} />
            <div className='flex justify-center mt-2'>
              <Badge >SOON</Badge>
            </div>
        </Contenu>
    </div>
  )
}

export default SearchPage