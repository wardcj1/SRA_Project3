import React, {Component} from "react";
import { Button, Panel, ButtonGroup, Col } from "react-bootstrap";


class ListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return(
			<div>
			 <Button onClick={this.props.highlight}>{this.props.description}</Button>
			 <p>{this.props.summary}</p>
			</div>
		)
	}
}

