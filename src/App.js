import { Brand, Navbar, Cta} from "./components";
import {Blog, Features, Footer, Header, Possibilty, WhatGPt3 } from './containers'
import './App.css'


function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPt3/>
      <Features/>
      <Possibilty/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
