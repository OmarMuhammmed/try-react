import "./index.scss";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li
          style={{
            color: "red",
            fontSize: "20px",
            listStyleType: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          Home
        </li>
        <li className="nav-bar-list">About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
