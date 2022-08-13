import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {useParams} from 'react-router-dom'
import { MatchDetailCard } from "../components/MatchDetailCard";
import {YearSelector} from "../components/YearSelector";

import './MatchPage.scss'



export function MatchPage() {
    const[matches,setMatches]= useState([]);

    const {teamName,year}=useParams()
   
    //console.log(teamName);
   

useEffect(
    ()=> {
        const fetchMatches= async ()=>{
            const response= await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}/matches?year=${year}`);
            const data= await response.json();
            setMatches(data);
            console.log(data);
           
        }
        fetchMatches()

    }
,[teamName,year])
 

  return (
    <div className="MatchPage">
      <div className="year-selector">
        <h3>Select Year</h3>
         <YearSelector  teamName={teamName} />
      </div>
      <div>

     <h1>{teamName} Matches in {year}</h1>
     {(matches.map((match)=><MatchDetailCard  key={match.id} teamName={teamName} match={match}/>))}

      </div>

    </div>
  );
}


