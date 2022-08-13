import React from "react";
import {Link} from "react-router-dom"

import './MatchSmallCard.scss'


export const MatchSmallCard=({match,teamName})=> {

  if(!match) return null;

  const otherTeam= match?.team1===teamName? match?.team2:match?.team1
  const isMatchWon=teamName===match.matchWinner

  

  return (
    <div className={`MatchSmallCard ${isMatchWon?'won-card':'loss-card'}`}>
      <span className="vs">vs</span>
      <h1><Link to={`/teams/${otherTeam}`}>{otherTeam}</Link></h1>
      <p>{match.matchWinner} won by {match.resultMargin} {match.result}</p>
     
    </div>
  );
}


