import React from 'react'
import {Link} from 'react-router'
import Foot from './Foot'
import Home from './Home'
import NavLink from "./NavLink"

export default React.createClass({
  render() {
    return <div>

    	<ul className="nav nav1">
    		<li>React Router Link:</li>
		    <li><Link to="/info" activeClassName="active">Info</Link></li>
		    <li><NavLink to="/info" >Info with NavLink</NavLink></li>

	    	<li><Link to="/repos" activeStyle={{ color: 'red'}}>Repos</Link></li>
	    	<li><Link to="/repos/eno/url-param" activeClassName="active">Repos with url param</Link></li>

	    	<li><Link to="/inbox/" activeClassName="active">inbox</Link></li>
	    	<li><Link to="/inbox/messages/Jkei3c32?name=Eno&age=30" activeClassName="active">inbox nest with query & url param(relative url)</Link></li>
	    	<li><Link to="/messages/Jkei3c32?name=Eno&age=30" activeClassName="active">inbox nested absolute url</Link></li>

	    	<li><Link to="/redirect" activeClassName="active">Redirect</Link></li>

	    	<li><Link to="/about" activeClassName="active">About</Link></li>
    	</ul>

    	{/*
		 把 <a> 变成 <Link>， 等于上面的链接 
    		网址取决于browserHistory和hashHistory，/ 或 /#/
    		<Router history={hashHistory}>

    		activeClassName & activeStyle only work for Link,
    		it knows if the path it links to is active so you can style it differently
    	*/}
		<ul className="nav nav2">
	    	<li>HTML a link :</li>
	    	<li><a href="#/info" activeClassName="active">Info</a></li>
	    	<li><a href="#/repos" activeClassName="active">Repos</a></li>
    	</ul>

    	<div className="wrapper">

	    	<p>Hello, React Router!</p>
	    	{/* 
	    		{this.props.children || <Home/>}
	    		if no children in App, render Home... 
	    		same with <IndexRoute component={Home}/> in Router config
	    	*/}
	    	{this.props.children}

    		<Foot/>
    	</div>
    </div>
  }
})
