import React, { Component } from "react";
import './index.css';
// import './src/images';
import './amphacks.PNG';
import './technica.PNG';
import './yale_good.PNG';
import { Container, Row, Col } from 'reactstrap';

 
class Stuff extends Component {
  render() {
    return (
<div>
      <div id="center">
            <p> Over the past four months I've attended a lot of hackathons. These have been great learning opportunities for me to
                gain new skills and form new friendships.
            </p>
        </div>

      <br></br>
      <br></br>
        <h2>AmpHacks</h2>
        <Row>

        <Col xs="6">
        <img src={require('./amphacks.PNG')} /> 
        </Col>

        <Col xs="6">
        <p>
            On September 25th I attended AmpHacks, a hackathon hosted by RBC promoting their summer Amplify program. 
            This was my first hackathon ever and an absolute blast. The bank had already formed the groups beforehand, ensuring
            each team had a good mix of different skillsets. My team was composed of two developers (myself included), a data scientist,
            and a business analyst - all from different universities in southern Ontario. Our team built a product called 'Finance Your Future',
            an attempt to solve the student debt crisis by replacing debt with ISAs. To make the event even more memorable, our team
            won second place. 
        </p> 
        </Col>
      </Row>

      <br></br>
      <br></br>

      <h2>YaleHacks</h2>
      
        <Row>

        <Col xs="6">
        <img src={require('./yale_good.PNG')} /> 
        </Col>

        <Col xs="6">
        <p>
            The other co-op students and I all decided to go to Yale's annual hackathon in October. Our boss was kind enough to allow us to 
            miss a day to take a bus sent by the univesity there. After 10 hours, we had finally arrived. Despite a lot of exhaustion,
            our first night there was still filled with a lot of energy and enthusiasm. It was exciting meeting students from all over the U.S and Canada - 
            we even met a few who had travelled from India. Together, we built a mobile application that allows users and travellers to discover unsafe
            areas in a community and alter their routes. Our goal was to enhance community engagement and increase civilian safety.
        </p> 
        </Col>
      </Row>

      <br></br>
      <br></br>

      <h2>Technica</h2>
        <Row>

        <Col xs="6">
        <img src={require('./technica.PNG')} /> 
        </Col>

        <Col xs="6">
        <p>
            Recently, I flew to the University of Maryland to attend Technica, the biggest all-women hackathon in the world. 
            My team, who were again students (and now friends) from all over the U.S, decided to tackle a problem from called '
            Most Innovative Way to Educate People on the Time-Value of Money'. We used iStage to create a VR experience similar to
            a story board which allowed players to choose different life paths that would lead to different financial outcomes. To
            our delight, we ended up winning the challenge. It was my first time experimenting with VR, a technology I'm very excited
            to learn more about and continue working with.
        </p> 
        </Col>
      </Row>
</div>
    );
  }
}
 
export default Stuff;