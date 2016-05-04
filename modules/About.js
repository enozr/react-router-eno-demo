import React from 'react'

export default React.createClass({
	render() {
		return <div>
			<h2>About page: </h2>

	    	<p>React Router is built with history. In a nutshell, 
	    	a history knows how to listen to the browser's address bar 
	    	for changes and parses the URL into a location object that 
	    	the router can use to match routes and render the correct set of components.
			<br /><br />
			There are three types of histories you'll come across most often, 
			but note that anyone can build a custom history implementation 
			for consumption with React Router.</p>

			<ul>
				<li>browserHistory</li>
				<li>hashHistory</li>
				<li>createMemoryHistory</li>
			</ul><br />

			<h3>IE8, IE9 Support for browserHistory</h3>
			
			<p>
We feature detect to see if we can use the browser's native window.history API.
 If not, any call to transition around the app will result in a full page reload, 
 which allows you to build your app and have a better experience for newer browsers,
  but still support old ones.<br /><br />

You might wonder why we don't fall back to hash history; 
the problem is that URLs become non-deterministic. 
If a visitor on hash history shares a URL with a visitor on browser history, 
and then they share that back, we end up with a terrible cartesian product of 
infinite potential URLs.
			</p>


			<h3>Should I use hashHistory?</h3>
			<p>
			In general, though, production web applications should use browserHistory
			 for the cleaner URLs, and for support for server-side rendering, 
			 	which is impossible with hashHistory.<br />
			Some older browsers do not support the HTML5 History API. 
			If it's important to you to not use full page reloads for navigation 
			on those older browsers, then you will also need to use hashHistory.
			</p>
			<a href="https://github.com/reactjs/react-router/blob/master/docs%2Fguides%2FRouteMatching.md">Route Matching</a>
			
			<br /><br />

			<a href="https://github.com/reactjs/react-router/blob/master/docs/guides/MinimizingBundleSize.md">Minimizing Bundle Size</a>
			<p>Import directly from react-router/lib to avoid pulling in unused modules.</p>
			<p>use: import Link from 'react-router/lib/Link'</p>
			<p>Not: import "{" Link, Route, Router "}" from 'react-router'</p>
			<br /><br />
	    </div>
	}
})