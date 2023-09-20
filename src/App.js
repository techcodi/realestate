import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Company from "./components/Companies/Company";
import Residencie from "./components/Residencies/Residencie";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Company />
      <Residencie />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default App;
