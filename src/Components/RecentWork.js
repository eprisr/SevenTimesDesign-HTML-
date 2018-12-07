import React from 'react';
import { Button } from 'reactstrap';

class RecentWork extends React.Component {
  render() {
    return (
			<React.Fragment>
				<section>
					<h6>RECENT WORK</h6>
					{/* divider */}
					<p>
						Creativity is allowing yourself to make mistakes. Design is
						knowing which ones to keep.
					</p>
					<p>SCOTT ADAMS</p>
					<Button>VIEW MORE</Button>
				</section>
			</React.Fragment>
		);
  }
}

export default RecentWork;
