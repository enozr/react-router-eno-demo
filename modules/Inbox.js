import React from 'react'

export default React.createClass({
	render() {
	    return (
	      <div>
	        <h2>Inbox page header...</h2>
	        
	        

	        {/* render children, 渲染 child 路由组件 */}
	        {this.props.children || "Welcome to your Inbox(default msg)"}

	        <h3>
lesson4: By Small and Simple Things are Great Things Brought to Pass
The best way to build large things is to stitch small things together.
This is the real power of React Router, 
every route can be developed (even rendered!) as an independent application. 
Your route configuration stitches all these apps together however you'd like.
 Applications inside of Applications, boxes inside of boxes.<br /><br />
	        </h3>

	        <div>this is index footer</div>
	      </div>
	    )
  	}
});

