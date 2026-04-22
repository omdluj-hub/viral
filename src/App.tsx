import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Admin from './pages/Admin'

function App() {
  const location = useLocation()

  useEffect(() => {
    // Traffic tracking logic for centralized admin page
    const trackVisit = async () => {
      try {
        await fetch('https://adminpage-xi.vercel.app/api/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            site_id: 'viral',
            visited_path: location.pathname,
            referrer: document.referrer || 'direct',
            userAgent: navigator.userAgent
          }),
          mode: 'no-cors'
        });
      } catch (error) {
        console.error('Tracking request failed:', error);
      }
    }

    trackVisit()
  }, [location.pathname])
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  )
}

export default App
