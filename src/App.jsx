import {React,} from 'react';
import Name from './components/Name';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Algorithms from './components/Algo';





const App = () => {
    
    
    return (
        <>
        <Name></Name>
        <Router>
            <Routes>
                
                <Route path='/' exact Component={Home}/>
                <Route path='/algo' Component={Algorithms}></Route>
            </Routes>
        </Router>
        
            

        </>
    );
};

export default App;
