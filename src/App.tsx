import React from 'react';
import './App.css';
import Photo from './Photo.tsx';
import Hero from './Hero.tsx';
import About from './About.tsx';
import Navbar from './Navbar.tsx';
function App() {
  return (
    <div className="App relative overflow-visible h-fit center flex flex-col items-center justify-center"
    style={{
      backgroundImage: "url('bg-tile.png')",
      backgroundSize: "2%"
    }}>
      <Hero/>
      <About />
    <div className="fixed bottom-0.5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Navbar/>
    </div>
    </div>
  );
}

export default App;
