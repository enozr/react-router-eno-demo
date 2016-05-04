import React from 'react'

export default React.createClass({
	render() {
		return <div>
			Repos page<br /><br />
			
			<h3>url param: {this.props.params.userName} & {this.props.params.repoName} </h3>
			
			<div>
			/repos/:userName/:repoName <br />
			The parts that start with : are url parameters whose values 
			will be parsed out and made available to route components on 
			this.props.params[name].<br /><br />
			You should probably add some prop types to help others and 
			yourself out later.</div>

			{this.props.children}
		</div>
	}
})