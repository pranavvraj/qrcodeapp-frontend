import "./App.css";
import Navbar from "./Components/Navbar";
import Tabs from "./Components/Tabs";
import Qrabout from "./Components/Qrabout";
import Createaccount from "./Components/Createaccount";
import Howto from "./Components/Howto";
import Types from "./Components/Types";
import Footer from "./Components/Footer";
import Faq from "./Components/Faq";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Tabs />
      <Qrabout />
      <Createaccount />
      <Howto />
      <Types />
      <Footer />
      <Faq />
    </div>
  );
}

export default App;
