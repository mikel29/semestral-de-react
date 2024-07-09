
import { BrowserRouter,Routes, Route,Link } from "react-router-dom"
import { Home } from "./Paginas/Home/"
import {Pagina1} from "./Paginas/Pagina1"

const App = ()=>{


return(
    <>
        <BrowserRouter>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link " to="/">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pagina1">Api</Link>
                        </li>
                        
                        
                    </ul>
                   
                </div>
            </div>
           </nav>
           <Routes>
           <Route path="/" element={<Home></Home>} ></Route>
           <Route path="/Pagina1" element={<Pagina1></Pagina1>} ></Route>
           </Routes>

        </BrowserRouter>
    
    
    </>
    
    )
  

}     
export default App 