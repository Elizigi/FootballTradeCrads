import React, { useState } from 'react';
import styles from "./Players.module.scss";
import Header from '../header/Header';

const PlayerForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        age: '',
        imageUrl: '',
        team: '',
        position: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

async function handleSubmit (event: React.FormEvent) {
        event.preventDefault();
        console.log('Form submitted:', formData);
        const fullName = formData.fullName
        const img = formData.imageUrl
        const team = formData.team
        const age = formData.age
        const position  = formData.position
        const response = await fetch('http://localhost:3000/api/heroes/add-hero',{
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include', 
        body: JSON.stringify({fullName,img,team,age,position})
        });
          if (response.status === 200) {
            alert("Player added successfully")
        } else {
            alert("try again")
        }
    };



    return (
        <div className={styles.formContainer}>
          <Header />
            <h2>Player Registration</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />

                <label htmlFor="team">Age</label>
                <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required />
                
                <label htmlFor="imageUrl">Image URL</label>
                <input type="url" id="imageUrl" name="imageUrl" value={formData.imageUrl} onChange={handleChange} required />
                
                <label htmlFor="team">Belongs to Team</label>
                <input type="text" id="team" name="team" value={formData.team} onChange={handleChange} required />

      
                
                <label htmlFor="position">Position on Field</label>
                <select id="position" name="position" value={formData.position} onChange={handleChange} required>
                    <option value="">Select Position</option>
                    <option value="Goalkeeper">Goalkeeper</option>
                    <option value="Defender">Defender</option>
                    <option value="Midfielder">Midfielder</option>
                    <option value="Forward">Forward</option>
                </select>
                
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PlayerForm;