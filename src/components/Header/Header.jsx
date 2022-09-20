import NavBar from "../NavBar/Navbar";
import "./header.css";

function Header() {
  let title = "Bienvenidos a Elite Gaming";

  return (
    <header>
      <NavBar />
      <h1 className="header_title">{title}</h1>
    </header>
  );
}

export default Header;
