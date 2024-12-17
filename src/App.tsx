import "./index.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Typer from "./components/Typer/Typer";

function App() {
  return (
    <div className="container flex flex-col justify-between h-screen">
      <Header />
      <div className="flex flex-col justify-center items-center">
        <Typer />
      </div>
      <Footer />
    </div>
  );
};

export default App;
