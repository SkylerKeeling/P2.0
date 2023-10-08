import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Mywork from "./components/Mywork"
import Contact from "./components/Contact"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/header",
    element: <Header />,
  },
  {
    path: "/footer",
    element: <Footer />,
  },
  {
    path: "/navbar",
    element: <Navbar />,
  },
  {
    path: "/mywork",
    element: <Mywork />,
  },
])

const App = () => {
  return (
    <main>
      <RouterProvider router={routes} fallbackElement={<Home />} />
    </main>
  )
}

export default App
