import Navigation from '../routers/Navigation';
import Navbar from './Navbar';
import "../scss/App.scss"
function App() {
  
  return (
    <div className="container-fluid">
      <div>
       <Navbar /> 
      <Navigation />
      </div>     
    </div>
  );
}
export default App;
