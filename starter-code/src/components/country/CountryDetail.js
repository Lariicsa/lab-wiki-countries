import React from 'react';
import countries from '../../countries.json'

function CountryDetail (props) {

	const findCountry = (name) => {
		console.log(name);
		
		return countries.find(country =>{
			if(country.name.common === name) {
				return true
			} 
			return false
		})
		}

		const { params } = props.match
		const theCountry = findCountry(params.name)
		console.log(params)
		console.log(theCountry)

		

		return(
			<div>
				<p>algo {theCountry.name}</p>
				<p>{ theCountry.capital }</p>
			</div>
		)

	}


export default CountryDetail;