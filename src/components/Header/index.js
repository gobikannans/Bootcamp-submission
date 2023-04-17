import {Link} from "react-router-dom"
import "./index.css"


const Header=()=>(
    <nav className="nav-container">
        <div className="logo-container">
            <Link to="/">
              <img src="https://res.cloudinary.com/dpjowvn70/image/upload/v1681727852/FD_camp_1_vudjav.png" className="header-logo" alt="logo"/>
           </Link>
         </div>
    </nav>
)

export default Header