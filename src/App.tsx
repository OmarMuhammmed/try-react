import "./App.css";
import Navbar from "./components/Navbar";
import Heading from "./components/Heading"

function App() {
  const company = "Functo";

  return (
    <>
      <Navbar companyName={company} />
      <Heading />
    </>
  );
}

export default App;
