import React, { useEffect } from 'react';
import { ZOHO } from './vendor/ZSDK';

function App() {

  console.log("INITIALIZING")

  useEffect(() => {
    async function init() {
      console.log("BEFORE PAGELOAD");
      await ZOHO.embeddedApp.on("PageLoad",function(data) {
        console.log("PageLoad", data);
      })
      console.log("AFTER PAGELOAD");
      return await ZOHO.embeddedApp.init();
    }
    init();
  }, [])

  return (
    <div className="App">
      <h1>WIDGET WITH REACT</h1>
    </div>
  );
}

export default App;
