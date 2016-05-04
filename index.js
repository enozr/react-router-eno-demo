import React from 'react'
import { render } from 'react-dom'

import App from './modules/App'
import Home from './modules/Home'
import Info from './modules/Info'
import About from './modules/About'
import Repos from './modules/Repos'
import Inbox from './modules/Inbox'
import NoMatch from './modules/NoMatch'
import Message from './modules/Message'

import {Router, Route, Link, Redirect, hashHistory, browserHistory, IndexRoute} from 'react-router'

import createBrowserHistory from 'history/lib/createBrowserHistory'

// const history = createBrowserHistory();
// <Router history={history}>

/**	history={hashHistory}
	history={browserHistory} -- support server-side rendering
	createMemoryHistory	-- implement server rendering
Modern browsers let JavaScript manipulate the URL without making an http request,
 so we don't need to rely on the hash (#) portion of the url to do routing
*/

render((
	<Router history={hashHistory} >
		<Route path="/" component={App} >

			{/* index page,  or use {this.props.children || <Home/>} in component */}
			<IndexRoute component={Home}/>

			{/* add router: http://localhost:8080/#/info    http://localhost:8080/#/repos   */}
			<Route path="info" component={Info}></Route>

			<Route path="/repos" component={Repos}>
				{/* nested route(and nested active Link), absolute url, route with url params */}
				<Route path="/repos/:userName/:repoName" component={Repos}></Route>
			</Route>

			<Route path="inbox" component={Inbox}>
				{/* relative url: "#/inbox/messages/Jkei3c32?name=Eno&age=30" */}
				<Route path="messages/:id" component={Message}></Route>
				{/* absolute url: "#/messages/Jkei3c32?name=Eno&age=30" */}
				<Route path="/messages/:id" component={Message}></Route>
			</Route>

			{/**/}
			<Redirect from="/redirect" to="/info"/>

			<Route path="/about" component={About}></Route>

			<Route path="*" component={NoMatch}/>
		</Route>
	</Router>
), document.getElementById('app'))

// render(<App/>, document.getElementById('app'))
