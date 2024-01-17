// Page components
import HomePage from "./pages/homePage/home.page";
import AdminPage from "./pages/admin/admin.page";
// React router
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/admin" element={<AdminPage/>} />
      </Routes>
    </>
  )
}

export default App
