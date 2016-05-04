import React from "react"

export default React.createClass({

	/* 新建一个组件让其在 Inbox 内部渲染 */
	render() {
	    return <div>
	    	<h3>Message：</h3>
	    	<p>
	    		this.props.params.id: {this.props.params.id}, <br />
	    		this.props.location.query.name: {this.props.location.query.name}
	    	</p>
	    </div>
	},

	componentDidMount() {
		// 来自于路径url parameters  `/inbox/messages/:id`
		// this.props.params[name]
		const paramId = this.props.params.id

		const queryName = this.props.location.query.name;

		console.log("paramId ----" + paramId);
		console.log("queryName ----" + queryName);

		// undefined query
		const sname = this.props.location.query.sname;
		if(sname) {
			console.log("queryName ----" + sname + this.props.location.query.age);
		} else {
			console.log("location.query: sname is undefined...");
		}

		/*通过 query 字符串来访问参数。
		比如你访问 /foo?bar=baz，你可以通过访问 this.props.location.query.bar 
		从 Route 组件中获得 "baz" 的值。*/

		// fetchMessage(id, function(err, message){
		// 	this.setState({message: message});
		// })
	}

})