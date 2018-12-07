import React from 'react';
import { Link } from 'react-router-dom';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap';
import logo from '../img/seventimes-vertical.png';

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<React.Fragment>
				<Navbar expand='lg'>
					<NavbarBrand>
						<Link to='/' >
							<img src={logo} alt='' height='20'></img>
						</Link>
					</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className='ml-auto' navbar>
							<NavItem>
								<NavLink href='/portfolio'>Portfolio</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href='/'>About</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href='/'>Contact</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</React.Fragment>
		);
	}
}

export default Header;