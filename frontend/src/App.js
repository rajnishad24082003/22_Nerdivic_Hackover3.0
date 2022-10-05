import Navbar from "./components/Navbar";
import Grid from "./components/Grid";
import As_organiser from "./components/As_organiser";

import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import As_admin from "./components/As_admin";
import As_customer from "./components/As_customer";
function App(){
return(
    <>
<BrowserRouter>
<Navbar/>
<Routes>
<Route exact path="/" element={<><Grid/></>}>
</Route>

<Route exact path="/As_admin" element={<As_admin/>}>
</Route>

<Route exact path="/As_customer" element={<As_customer/>}>
</Route>

<Route exact path="/As_organiser" element={<As_organiser/>}>
</Route>
</Routes>
</BrowserRouter>
</>
)
}

export default App;