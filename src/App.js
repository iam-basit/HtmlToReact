import React, { Fragment } from 'react';
import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.bundle.min.js"
function App() {
  return (
    <div className="container-fluid">
      <div className="row header">
        <div className="col-sm-3">
          <img src="/assets/ln.png" className="float-end my-3 d-block"/>
        </div>
        <div className="col-sm"></div>
        <div className="col-sm-3">
          <span className="text-light signin"> Sign in</span>
          <button className="btn btn-border text-light mx-5">Join Now</button>
        </div>
      </div>
		  <div className="row bb">
        <div className="col-sm-4 mx-auto mid-form">
          <img src="/assets/logo.png" className="img-fluid logo mx-auto d-block"/>
            <form>
              <input type="text" placeholder="Email address or Phone Number" className="form-control my-3"/>
              <input type="password" placeholder="Password" className="form-control my-3"/>
              <input type="submit" className="btn btn-primary form-control"/>
            </form>
              
            <span className="text-primary pass">Forgot password?</span><br/>
            <span className="member">Not a member?</span><span className="text-primary">Join Now</span>
            <div className="last"></div>
        </div>
			</div>
			<div className="row footer">
				<div className="col"></div>
				<div className="col">linkedin</div>
				<div className="col">user agreement</div>
				<div className="col">privacy policy</div>
				<div className="col">community guildelines</div>
				<div className="col">cookie policy</div>
				<div className="col">copyright policy</div>
				<div className="col">unsubscribe</div>
				<div className="col"></div>
			</div>
		</div>
   
  );
}

export default App;
