import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from "@/supabaseClient";

function EditCrewmate() {
  const { id } = useParams();
  console.log('Editing crewmate with ID:', id); // Debugging log

  const [name, setName] = useState('');
  const [attribute, setAttribute] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabase.from('crewmates').select('*').eq('id', id).single();
      if (error) {
        console.error(error);
      } else {
        setName(data.name);
        setAttribute(data.attribute);
      }
    };
    fetchCrewmate();
  }, [id]); // Only run when `id` changes

  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log('Updating crewmate:', { name, attribute }); // Debugging log
    const { error } = await supabase
      .from('crewmates')
      .update({ name, attribute })
      .eq('id', id);
    if (error) {
      console.error('Error updating crewmate:', error); // Log the error
    } else {
      console.log('Crewmate updated successfully'); // Log success
      navigate('/');
    }
  };

  const handleDelete = async () => {
    const { error } = await supabase.from('crewmates').delete().eq('id', id);
    if (error) {
      console.error(error);
    } else {
      navigate('/');
    }
  };

  return (
    <div>
      <h1>Edit Crewmate</h1>
      <form onSubmit={handleUpdate}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Attribute:
          <select
            value={attribute}
            onChange={(e) => setAttribute(e.target.value)}
            required
          >
            <option value="Strength">Strength</option>
            <option value="Speed">Speed</option>
            <option value="Intelligence">Intelligence</option>
          </select>
        </label>
        <button type="submit">Update</button>
      </form>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default EditCrewmate;