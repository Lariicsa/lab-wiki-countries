import React, { Component } from 'react';
import countries from '../../countries.json'
import CoutriesList from './CountriesList';

class CountriesContainer extends Component {
	state = {
		countries
	 }

//   componentDidMount() {
// 	const { countries } = this.state;
//   }

  render() {
	const { countries } = this.state;
    if (!countries) return <p>Loading...</p>;
    return (
      <div>
       {countries.map((country, i) => (
          <CoutriesList key={i} country={country} />
        ))}
      </div>
    );
  }
}

export default CountriesContainer;