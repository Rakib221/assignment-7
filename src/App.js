import React from 'react';
import {useEffect,useState} from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import About from './Components/About/About';
import SelectPlayerAndDetails from './Components/SelectPlayerAndDetaiils/SelectPlayerAndDetails';
import FadeLoader from "react-spinners/FadeLoader";


function App() {
  const [loading,setLoading] = useState(false);
  useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
        setLoading(false);
      },2000)
  },[]);
  return (
       <div>
         {
           loading ?
           (
              <div className="pre-loader">
                <FadeLoader color="red" loading={loading}  size={150} />
              </div>
           )
           :
           (
            <div>
                <Navigation></Navigation>
                <About></About>
                <SelectPlayerAndDetails></SelectPlayerAndDetails>      
            </div>
           )
         }
       </div>
  );
}

export default App;
