import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";
import { Mobile } from "./Mobile";

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
