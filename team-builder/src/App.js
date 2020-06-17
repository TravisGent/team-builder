import React, { useState } from 'react';
import './App.css';
import TeamMember from "./TeamMember";

function App() {
  const [name, setName] = useState({
    name: "",
    email: "",
    role: ""
  });

  const [teamList, setTeamList] = useState([
    {
        name: "Mr. Placeholder",
        email: "placeholder@gmail.com",
        role: "Tech Role"
    }
  ]);

  const addNewTeamMember = member => {
    setTeamList([...teamList, member]);
  }

  const newMember = (event) => {
    event.preventDefault();
      setTeamList({
        ...teamList, 
      [event.target.name]: event.target.value,
      })
  }
  console.log(teamList);
  return (
    <div className="App">
      <div className="forms">
        <form onSubmit={event => {
          event.preventDefault();
          addNewTeamMember(teamList);
          setName({name: "", email: "", role: ""});
        }}>
          <label htmlFor="name">Name</label>
            <input 
              id="name"
              name="name"
              type="text" 
              placeholder="Enter Name" 
              onChange={addNewTeamMember} 
              value={newMember.name}
            />
          <label htmlFor="email">Email</label>
            <input 
              id="email"
              name="email"
              type="text" 
              placeholder="Enter Email" 
              onChange={addNewTeamMember} 
              value={newMember.email} 
            />
          <label htmlFor="role">Role</label>
            <input 
              id="role"
              name="role"
              type="text" 
              placeholder="Enter Role" 
              onChange={addNewTeamMember} 
              value={newMember.role}
            />
          <br /><button type="submit">Submit</button>
        </form>
      </div>
      {teamList.map(myDataObj => {
        return <TeamMember key={myDataObj.name} myData={myDataObj} />
      })}
    </div>
  );
}

export default App;
