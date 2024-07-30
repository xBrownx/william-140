import './App.css';
import MainParallax from "./components/MainParallax";

function App() {

    const handleScroll = (event) => {
    console.log('User scrolled:', event.target.scrollTop);

  };

  return (
    <div className="App" onScroll={handleScroll}>
      <MainParallax  />
    </div>
  );
}

export default App;
