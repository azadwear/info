import LinkTree from "./components/LinkTree";
import {Routes, Route} from "react-router-dom"
import ContactUs from "./ContactUs";
function App() {
  return (
    
    <Routes>
      {/* <Route path="/linktree-react" element={<LinkTree /> }>  */}
      <Route path="/" element={<LinkTree /> }> 
      </Route>
       <Route path="/contact" element ={<ContactUs />} />
    </Routes>
      
    
   
  );
}

export default App;

