import './App.css';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import {Mobile} from './Mobile';
import { useEffect } from 'react';

function App() {

  
  return (
    <>
      <Mobile>
        <Header />
        <Body />
        <Footer />
      </Mobile>
    </>
  );
}

export default App;
