import { Outlet } from "react-router-dom"
import Navbar from "../components/shared/Navbar/Navbar"
import Footer from "../components/shared/Footer/Footer"

// import Footer from "../Components/Shared/Footer/Footer"

const MainLayOut = () => {
  return (
    <div>
       <Navbar></Navbar>
      <div className="min-h-[calc(100vh-76px)]">
        <Outlet></Outlet>
      </div>
     <Footer></Footer>
    </div>
  )
}

export default MainLayOut