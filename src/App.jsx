import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Cards from "./Components/Cards/Cards";
import Categories from "./Components/Categories/Categories"
import Testimonials from "./Components/Testimonials/Testimonials"
import Footer from "./Components/Footer/Footer";
import Section from "./Components/Section/Section";
import SignupNavbar from "./Components/Signup/Navbar/Navbar";
function App() {

  return (
<>
<Navbar/>
<Header/>
 <Cards/>
<Categories/> 
<Section/>
 <Testimonials/> 
<Footer/>

{/* SIGNUP */}

<SignupNavbar/>
  

</>
  );
}

export default App;
