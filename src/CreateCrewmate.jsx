import React, { useState } from 'react';
import { supabase } from "@/supabaseClient";
import { useNavigate } from 'react-router-dom';

function CreateCrewmate() {
  const [name, setName] = useState('');
  const [attribute, setAttribute] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ name, attribute }); // Debugging log
    const { data, error } = await supabase.from('crewmates').insert([{ name, attribute }]);
    if (error) {
      console.error('Error inserting crewmate:', error);
    } else {
      console.log('Crewmate added successfully:', data); // Debugging log
      navigate('/');
    }
  };

  return (
    <div>
      <h1>Create a New Crewmate</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Attribute:
          <select value={attribute} onChange={(e) => setAttribute(e.target.value)} required>
            <option value="">Select an Attribute</option>
            <option value="Strength">Strength</option>
            <option value="Speed">Speed</option>
            <option value="Intelligence">Intelligence</option>
          </select>
        </label>
        <button type="submit">Add Crewmate</button>
      </form>
    </div>
  );
}

export default CreateCrewmate;