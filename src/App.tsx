import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import SectionRoutes from './SectionRoutes'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <BrowserRouter>
      <div className={`min-h-screen bg-gray-50 dark:bg-gray-900`}>
        <Header theme={theme} setTheme={setTheme} />
        <main>
          <SectionRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App