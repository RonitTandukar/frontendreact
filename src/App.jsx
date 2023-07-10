import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import useAuthContext from "./context/AuthContext";

function App() {
  const {user, logout} = useAuthContext()

  return (  
    <div className="bg-slate-100 min-h-screen">
      <nav className="bg-red-900 flex justify-between items-center relative text-white px-0 py-0 sm:px-4 mx-auto">
      <div className="container mx-auto flex flex-wrap justify-between">
       
        <a href="/" className="flex items-center">
          News 
        </a>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="mt-0 flex flex-col rounded-lg p-3 items-center md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
            <li className="mx-4 my-6 md:my-0 md:flex-col">
              <Link
                to="/home"
                className="block rounded py-2 pr-4 pl-3 text-blue"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            
            {user ? (
              <>
              <li className="mx-4 my-6 md:my-0">
                <button onClick={logout} className="block rounded py-2 pr-4 pl-3 text-white">
                  Logout 
                </button>
              </li>
              <li className="mx-4 my-6 md:my-0 md:flex-col">
              <Link
                to="/home"
                className="block rounded py-2 pr-4 pl-3 text-blue"
                aria-current="page"
              >
                {user.name}
              </Link>
            </li>
              </>
            ) : (
            <> 
              <li className="mx-4 my-6 md:my-0">
              <Link
                to="/login"
                className="block rounded py-2 pr-4 pl-3 text-blue"
                aria-current="page"
              >
                Login
              </Link>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <Link
                to="/register"
                className="block rounded py-2 pr-4 pl-3 text-white"
                aria-current="page"
                >Register</Link>
            </li>
            </>)}
          </ul>
        </div>
      </div>
      </nav>
      <div className="max-w-7xl mx-auto mt-6">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </div>
    </div>
    
  )
}

export default App
