import './App.css';
import Signup from './Components/Signup';
import Signin from './Components/Signin'
import { Route , Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

       </Routes>
    
    </div>
  );
}

export default App;
