import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {

  const dottedBackground = {
    backgroundImage: "radial-gradient(lightgray 1px, transparent 0)",
    backgroundSize: "7px 7px"
  }

  return (
    <main className="text-gray-800 bg-gray-100 px-4">
      <div className="container mx-auto relative" style={dottedBackground}>
        <Header/>
        <Home/>
        <div className="mx-4">
          <About/>
        </div>
      </div>
    </main>
  );
}

export default App;
