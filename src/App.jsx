import { Toaster } from "react-hot-toast"
import { RouterProvider } from "react-router-dom"
import { router } from "routes/router/Router"

function App() {

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  )
}

export default App
