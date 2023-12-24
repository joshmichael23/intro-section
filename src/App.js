
import './style.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Content from './components/Content';
import Footer from './components/Footer';
import MobileMenu from './components/Mobile-Menu';
import { useEffect, useState } from "react";

function App() {

  const [value, setValue] = useState(false);
  return (
    <div className="App">
      <Header setValue={setValue}></Header>
      <Hero></Hero>
      <Content></Content>
      <Footer></Footer>
      <MobileMenu setValue={setValue} value={value}></MobileMenu>
    </div>
  );
}

export default App;
