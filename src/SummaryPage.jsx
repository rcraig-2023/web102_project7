import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import { Link } from 'react-router-dom';
import './SummaryPage.css';

function SummaryPage() {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    const fetchCrewmates = async () => {
      const { data, error } = await supabase
        .from('crewmates')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) {
        console.error('Error fetching crewmates:', error);
      } else {
        setCrewmates(data);
      }
    };
    fetchCrewmates();
  }, []);

  return (
    <div className="summary-page">
      <h1>Crewmates</h1>
      <Link to="/create" className="add-crewmate-link">+ Add New Crewmate</Link>
      <ul className="crewmates-list">
        {crewmates.length > 0 ? (
          crewmates.map((crewmate) => (
            <li key={crewmate.id} className="crewmate-item">
              <span className="crewmate-name">{crewmate.name}</span>
              <Link to={`/detail/${crewmate.id}`} className="detail-link">View Details</Link>
              <Link to={`/edit/${crewmate.id}`} className="edit-link">Edit</Link>
            </li>
          ))
        ) : (
          <p>No crewmates found. Add a new crewmate!</p>
        )}
      </ul>
    </div>
  );
}

export default SummaryPage;