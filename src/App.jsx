import { RouterProvider } from "react-router-dom"
import { router } from "routes/router/Router"

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
