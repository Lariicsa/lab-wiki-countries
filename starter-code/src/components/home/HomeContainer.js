import React from 'react';
import { Link } from 'react-router-dom';

function HomeContainer(props) {
  console.log(props);
  return (
    <div className="columns is-centered">
      <div className="column is-8">
		<h1>Rick And Morty API, (free torrent, free virus)</h1>
      <Link to="/characters">
        <button>Characters</button>
      </Link>
		</div>
    </div>
  );
}

export default HomeContainer;
