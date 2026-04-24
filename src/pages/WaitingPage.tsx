import Navbar from "@/components/layout/Navbar"
import { Spinner } from "@/components/ui/spinner"
import Contenu from "@/helpers/Contenu"

const WaitingPage = () => {
  return (
    <div>
      <Navbar />
      <Contenu>
        <div className="min-h-[92vh] flex justify-center items-center">
          <Spinner className="size-10" />
        </div>
      </Contenu>
    </div>
  )
}

export default WaitingPage