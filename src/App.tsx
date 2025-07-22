import { ThemeProvider } from "./components/theme-provider"
import RouterApp from "./routes/RouterApp"

function App() {

    return (
      <ThemeProvider defaultTheme="light" storageKey="candidash-theme">
     <div className="bg-background">
      <RouterApp />
      </div>
    </ThemeProvider>
  )
}

export default App
