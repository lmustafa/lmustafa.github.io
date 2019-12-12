import React, { Component } from "react";
import './index.css';
import { Container, Row, Col } from 'reactstrap';
 
class Goals extends Component {
  render() {
    return (
    <div id="center">
      <div>
        {/* <h2>Goals for the Semester</h2> */}
        {/* <br></br> */}
      </div>
        <Row>
        <Col xs="6" sm="4">
        <h3>Technical Skills</h3>
        <img src={require('./study11.PNG')} /> 
        <br></br>
        <br></br>
        <p>One of my main goals for this semester was to 
            improve my technical skills. I had the opportunity to
            achieve this goal by learning and working on new technologies, mainly voice.
            I developed prototypes in Goolge Home and Amazon Alexa while learning more about 
            version control, React, and Azure/AWS.
        </p>
        </Col>

        <Col xs="6" sm="4">
        <h3>Communication Skills</h3>
        <img src={require('./study2.PNG')} /> 
        <br></br>
        <br></br>
        <p>
            The second skill I was most interested in tackling was communication.
            Working on an agile team really helped me work on this skill. Agile requires a 
            daily checkin with your team and well as several team meetings - Refinement, Retro, Planning.
            All these meeting ensure everyone is aware of the work you're contributing and vice versa, and that
            you have the option to get help if necessary.
        </p>
        </Col>

        <Col sm="4">
        <h3>Time Management</h3>
        <img src={require('./study3.PNG')} /> 
        <br></br>
        <br></br>
        <p>
             Maintaing a routine can become difficult when you're switching between work and school every four months, but a good
            routine is essential for success in both. My team also focused on improving itself each sprint,
            we regulary discussed more ways to become efficient, such as: assignning time to our tasks, splitting work up by days, etc.
        </p>
        </Col>
      </Row>
    </div>
    );
  }
}
 
export default Goals;