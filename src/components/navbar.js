import { Link } from "react-router-dom";
const Navbar = () => {
 

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
            <h1>LOGO</h1>
        </div>
        <div >
          
        </div>
        <div className="navElemnt">
          <ul>
            <li>
              <Link to="/"><h3>Home</h3></Link>
            </li>
            <li>
             <Link to="contracts"> <h3>Contract</h3></Link>
            </li>
            <li>
             <Link to="contact-us"> <h3>Contact Us</h3></Link>
            </li>
            <li>
             <Link to="faq"> <h3>FAQs</h3></Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

