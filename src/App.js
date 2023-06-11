
import Navbar from "./components/Navbar"
import "./styles.css"
import Home from "./Pages/Home"
import About from "./Pages/About"
import CompanyList from "./Pages/CompanyList"
import Tasks from "./Pages/Tasks"
import Signup from "./components/Signup"
import UserPool from "./UserPool";

function App() {
  let component
  switch (window.location.pathname){
   case "/":
    component = <Home />
    break

    case "/about":
        component = <About />
      break
      case "/tasks":
        component = <Tasks />
      break
    case "/companyList":
        component = <CompanyList />
      break
    case "/SignUp":
        component = <Signup/>
        break
  }
  return (
   
    <>
      <Navbar />
      {component}

      
      </>

      
  )
}


export default App;
