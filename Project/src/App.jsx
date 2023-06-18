import { useState } from "react";
import "./App.css";
import Card from "./components/card";
import Head from "./components/Head";
import Map from "./Components/Map";

function App() {
  const [isOn, setIsOn] = useState(false);

  const openMap = () => setIsOn(true);
  return (
    <>
      <Head />
      {isOn ? <Map /> : <Card openMap={openMap} />}
    </>
  );
}

export default App;
