import React, { useState } from 'react';
import './App.css';
import TeamMember from "./TeamMember";
import TeamForm from './TeamForm';

function App() {
  const [teamList, setTeamList] = useState([
    {
        name: "Mr. Placeholder",
        email: "placeholder@gmail.com",
        role: "Tech Role"
    }
  ]);

  const addNewTeamMember = (member) => {
    setTeamList([...teamList, member]);
  }

  return (
    <div className="App">     
      <TeamForm addNewTeamMember={addNewTeamMember} />
      {teamList.map(myDataObj => {
        return <TeamMember key={myDataObj.name} myData={myDataObj} />
      })}
    </div>
  );
}

export default App;
