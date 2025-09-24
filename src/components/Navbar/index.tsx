import "./index.scss";

interface IProps {
  companyName: string;
}

const Navbar = ({ companyName }: IProps) => {
  return (
    <nav>
      <h1>{companyName}</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
