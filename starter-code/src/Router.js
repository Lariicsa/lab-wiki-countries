import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import HomeContainer from './components/home/HomeContainer';
import CountriesContainer from './components/countries/CountriesContainer';
import CountryDetail from './components/country/CountryDetail';

function Router() {
  return (
    <>
	 <section className="section">
			<div className="container">
			<ul>
		 <li>1</li>
		 <li>2</li>
		 <li>3</li>
		 <li>4</li>
	 </ul>
			<BrowserRouter>
			
			<NavLink exact to="/" activeClassName="active">
				Home
			</NavLink>
			<Switch>
				<Route exact path="/" component={HomeContainer} />
				<Route exact path="/countries" component={CountriesContainer} />
				<Route exact path="/countries/:name" component={CountryDetail} />
			</Switch>
		</BrowserRouter>
			</div>
	 </section>
	 </>
  );
}

export default Router;
