import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from "@/supabaseClient";
import './DetailPage.css';

function DetailPage() {
  const { id } = useParams();
  const [crewmate, setCrewmate] = useState(null);

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabase.from('crewmates').select('*').eq('id', id).single();
      if (error) {
        console.error('Error fetching crewmate:', error);
      } else {
        setCrewmate(data);
      }
    };
    fetchCrewmate();
  }, [id]);

  if (!crewmate) return <p>Loading...</p>;

  return (
    <div className="detail-page">
      <h1>{crewmate.name}</h1>
      <p>Attribute: {crewmate.attribute}</p>
      <p>Extra Info: {crewmate.extra_info || 'N/A'}</p>
      <div className="actions">
        <Link to={`/edit/${crewmate.id}`}>Edit</Link>
        <Link to="/">Back to Summary</Link>
      </div>
    </div>
  );
}

export default DetailPage;