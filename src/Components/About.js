import React from 'react';
import { Button } from 'reactstrap';

class About extends React.Component {
  render() {
    return (
			<React.Fragment>
        <section>
					<h6>ABOUT</h6>
					{/* divider */}
					<p>
						The goal isn't to live forever, The goal is to create something
						that will.
					</p>
					<p>CHUCK PALAHNIUK</p>
					<p>VISUAL PROBLEM SOLVER</p>
					<p>
						The most simplified description of what I do. It is my job to
						evoke the proper emotions resulting in a solution catered to
						your needs. These needs can be, but are not limited to, increase
						in sales, raising awareness, providing entertainment, &c.
					</p>
					<p>WHO I'VE WORKED FOR</p>
					<p>INTERESTS</p>
					<Button>DOWNLOAD RESUME</Button>
        </section>
			</React.Fragment>
		);
  }
}

export default About;
