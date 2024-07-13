import "../styles/header.scss";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";

function Header() {
  return (
    <nav>
      <h1>TechStar.</h1>
      <main>
        <Link to={"/#home"}>Home</Link>
        <Link to={"/contact"}>Contact</Link>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#brands"}>Brands</HashLink>
        <Link to={"/services"}>Services</Link>
      </main>
    </nav>
  );
}

export default Header;
