import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import routesArray from './routes'
import { Login, Sidebar } from './routes/LazyComponents';


function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route path='/login' exact={true} element={<Login/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
