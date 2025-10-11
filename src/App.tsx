import "./App.css";
import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
import Message from "./components/Message";
import Greeting from  "./components/Greeting";
import Condition from "./components/Condition";

function App() {
  const company = "Functo";


  return (
    <>
      <Navbar companyName={company} />
      <Heading />
     <Message />
     <Greeting message="Hello World!" id={1}/>
     <Condition isPacked={true} name="Milk" />
    </>
  );
}

export default App;
