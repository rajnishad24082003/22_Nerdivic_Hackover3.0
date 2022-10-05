
import img2 from "./image/event_up-removebg-preview.png";
import "./style.css";

function Navbar()
{
    return(<>
        <nav className="navbar navbar-expand-lg bg-light" style={{"color":"black"}}>   
          <a className="navbar-brand" href="#"><img src={img2} className="logonavbar"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{"--bs-scroll-height": "100px"}}>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className=" Getbtn nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Get Started
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                  <li><a className="dropdown-item" href="/As_admin">As Admin</a></li>
                  <li><a className="dropdown-item" href="/As_organiser">As Organizer</a></li>
                  <li><a className="dropdown-item" href="As_customer">As Visiter</a></li>
                </ul>
              </li>
            
            </ul>
            <div className="d-flex m-1">
              <a href="/Sign_in" className="btn " type="submit">Sign in</a>
            </div>
          </div>
          </nav>
    </>)
}

export default Navbar;