// Bringing in the required import from 'react-router-dom'
import {Outlet} from "react-router-dom"
import Navbar from "./pages/Navbar"
import Footer from "./pages/Footer"

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Navbar />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
