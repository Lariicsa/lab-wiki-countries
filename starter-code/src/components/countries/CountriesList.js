import React from 'react';
import { Link } from 'react-router-dom';


function CountriesMenu({ country }) {
  return (
    <div>
      <Link to={`/countries/${country.name.common}`}>
			<h3>{country.name.common}</h3>
      </Link>
    </div>
  );
}

export default CountriesMenu;