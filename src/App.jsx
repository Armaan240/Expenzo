import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Dashboard from './Pages/Dashboard';
import Transaction from './Pages/Transaction';
import Report from './Pages/Report';
function App(){
  return(
    <BrowserRouter>
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/transaction" element={<Transaction/>}/>
        <Route path="/reports" element={<Report/>}/>
        </Routes>
      <Link to ={'/transaction'}>Navigate</Link>
    </div>
    </BrowserRouter>
  );
}
export default App;