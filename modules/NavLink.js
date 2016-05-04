import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
	render(){
		{/* ...spread attribute:  It clones our props and 
		in this use case it clones activeClassName to our desired component 
		for us to benefit from.*/}
		return <Link {...this.props} activeClassName="active"></Link>
	}
})