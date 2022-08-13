import React from "react";
import './App.scss';
import{HashRouter as Router,Route, Routes,Navigate} from 'react-router-dom'
import { TeamPage } from './pages/TeamPage';
import { MatchPage } from './pages/MatchPage';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/teams/:teamName" element={ <TeamPage/>}/>
        <Route path="/teams/:teamName/matches/:year" element={ <MatchPage/>}/>
        <Route path="/" element={ <HomePage/>}/>
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
       

        </Routes>
   
     </Router>
     
    </div>
  );
}

export default App;
