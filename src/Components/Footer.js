import React from "react";

class Footer extends React.Component {
  render() {
    return <React.Fragment>
        <div className="container-fluid">
					<div className='row'>
						<div className="col-4">
							<h6>ABOUT US</h6>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
								do eiusmod tempor incididunt ut labore dolore magna aliqua.
							</p>
							<p>Copyright 2018 All Rights Reserved. Seven Times Design</p>
						</div>
						<div className="col-4">
							<h6>RECENT REPOS</h6>
						</div>
						<div className="col-4">
							<h6>STAY CONNECTED</h6>
						</div>
					</div>
        </div>
      </React.Fragment>;
  }
}

export default Footer;
