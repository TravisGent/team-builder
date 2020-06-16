import React, { useState } from 'react';
import App from "./App";
import './App.css';

const TeamMember = props => {
    return (
        <div className="teamMember">
            <p>{props.myData.name}</p>
            <p>{props.myData.email}</p>
            <p>{props.myData.role}</p>
        </div>
    );
}

export default TeamMember;