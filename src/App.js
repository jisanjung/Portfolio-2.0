import Header from "./components/Header";
import Home from "./components/Home";

function App() {

  const dottedBackground = {
    backgroundImage: "radial-gradient(lightgray 1px, transparent 0)",
    backgroundSize: "7px 7px"
  }

  return (
    <main className="text-gray-800 bg-gray-100">
      <div className="container mx-auto px-4" style={dottedBackground}>
        <Header/>
        <Home/>
      </div>
    </main>
  );
}

export default App;
