import { useState ,useEffect} from 'react'
import Home from './Components/Home';
function App(){
  const [count,setCount]=useState(0);
  useEffect(()=>{
    console.log("useEffect called");
  },[]);
  console.log("App component rendered");

  return(
    <>
    <Home/>
        <div className="App">
      <header className="App-header">
        Hello from APP
        <div>
          <button onClick={()=>setCount(count+1)}>count is {count}</button>
        </div>
      </header>
     </div> 
    </>
  )
}
export default App;