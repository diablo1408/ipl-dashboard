import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { TeamTile } from "../components/TeamTile";






import "./HomePage.scss";

export function HomePage() {
  const [teams, setTeams] = useState([]);

 // const { teamName } = useParams();

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team`);
      const data = await response.json();
      setTeams(data);
      //console.log(team);
    };
    fetchTeams();
  }, []);

 

  return (
    <div className="HomePage">
     

      <div className="team-grid">
            {teams.map(team=><TeamTile key={team.id} teamName={team.teamName}/> )}
      </div>
     
    </div>
  );
}
