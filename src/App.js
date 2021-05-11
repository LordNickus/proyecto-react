import './App.css';
import Home from './Home';
import Nosotros from './Nosotros';
import Noticias from './Noticias';
import Viajes from './Viajes';
import Consejos from './Consejos';
import ElRincon from './ElRincon';
import {
    BrowserRouter as Router,
    Route,
    Switch, 
    Link
} from 'react-router-dom';
import MaterialYoutube from './MaterialYoutube';

function App() {
    return(
        <Router>
           <Switch>
           <Route path="/MaterialYoutube">
                <MaterialYoutube />
            </Route>

            <Route path="/ElRincon">
                <ElRincon />
            </Route>
            
            <Route path="/Consejos">
                <Consejos />
            </Route>

            <Route path="/Viajes">
                <Viajes />
            </Route>

            <Route path="/Noticias">
                <Noticias />    
            </Route>

            <Route path="/Nosotros">
                <Nosotros />
            </Route>
           
            <Route path="/">
                <Home />
            </Route>

           </Switch>
        </Router>

        
    );
  }


export default App
