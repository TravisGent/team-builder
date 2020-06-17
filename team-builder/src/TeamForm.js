import React, { useState } from "react";

const TeamForm = props => {
  const [name, setName] = useState({
    name: "",
    email: "",
    role: ""
  });

  const newMember = (event) => {
    setName({
      ...name, 
      [event.target.name]: event.target.value
    })
  }
  return ( 
    <div className="forms">
        <form onSubmit={event => {
            event.preventDefault();
            props.addNewTeamMember(name);
            setName({name: "", email: "", role: ""});
        }}>
            <label htmlFor="name">Name</label>
                <input 
                    id="name"
                    name="name"
                    type="text" 
                    placeholder="Enter Name" 
                    onChange={newMember} 
                    value={name.name}
                />
            <label htmlFor="email">Email</label>
                <input 
                    id="email"
                    name="email"
                    type="text" 
                    placeholder="Enter Email" 
                    onChange={newMember} 
                    value={name.email} 
                />
            <label htmlFor="role">Role</label>
                <input 
                    id="role"
                    name="role"
                    type="text" 
                    placeholder="Enter Role" 
                    onChange={newMember} 
                    value={name.role}
                />
            <br />
            <button type="submit">Submit</button>
        </form>
    </div>
  );
};

export default TeamForm;