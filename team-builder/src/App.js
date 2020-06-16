import React, { useState } from 'react';
import './App.css';
import TeamMember from "./TeamMember";

function App() {
  const [teamList, setTeamList] = useState([
    {
        name: "PlaceHolder",
        email: "placeholder@gmail.com",
        role: "Place Holder"
    }
  ]);

  const addNewTeamMember = member => {
    event.preventDefault();
    const newTeamMember = {
      name: member.name,
      email: member.email,
      role: member.role
    }
    setTeamList([...teamList, newTeamMember]);
  }

  const newMember = event => {
    addNewTeamMember(member);
  }

  return (
    <div className="App">
      <div className="forms">
        <form onSubmit={addNewTeamMember}>
          <label>Name</label>
            <input 
              id="name"
              type="text" 
              placeholder="Enter Name" 
              onChange={newMember} 
            />
          <label>Email</label>
            <input 
              id="email"
              type="text" 
              placeholder="Enter Email" 
              onChange={newMember} 
            />
          <label>Role</label>
            <input 
              id="role"
              type="text" 
              placeholder="Enter Role" 
              onChange={newMember}
            />
          <br /><button type="submit">Submit</button>
        </form>
      </div>
      <TeamMember addNewTeamMember={addNewTeamMember} />
      {teamList.map(myDataObj => {
        return <TeamMember key={myDataObj.name} myData={myDataObj} />
      })}
    </div>
  );
}

export default App;
