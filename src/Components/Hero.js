import React from 'react';
import { Container, Jumbotron, Button } from 'reactstrap';

class Hero extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Jumbotron fluid>
				<Container fluid>
					<section>
						<img src='' alt='' />
						<h3>FEATURED PROJECT</h3>
						<h2>GM POWERTRAIN GREETER</h2>
						<h5>Continental Services</h5>
						<Button>VIEW PROJECT</Button>
						<Button>PORTFOLIO</Button>
					</section>
				</Container>
				</Jumbotron>
			</React.Fragment>
		);
	}
}

export default Hero;