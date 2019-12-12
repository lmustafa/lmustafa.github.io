import React, { Component } from "react";
import './index.css';
import './team-pic-arcturus-fall-2019.jpg';
import './google_puck.jpg';
import { Container, Row, Col } from 'reactstrap';

 
class Home extends Component {
  render() {
    return (
        <div>

        <div id="center">
            <div class="inner">
                <header>
                    <h2>Company</h2>
                    <p>This work term I was an 'Innovation Web and Voice Developer' at Sun Life Financial.</p>
                    <img id="arcpic" src={require('./team-pic-arcturus-fall-2019.jpg')} />
                </header>
                <br></br>
      <br></br>
                    <p>This is a picture of my team. Our name is Arcturus, named after the brightest       star in the northern hemisphere. As an innovation team, we make it our goal to continuously explore new ideas and build exciting prototypes.
                    </p>
            </div>
            <div class="inner">
                <header>
                    <h2>Insurance and Innovation</h2>
                    <br></br>
                  
                </header>
            </div>
        </div>

         <Row>

        <Col xs="6">
        <img src={require('./google_puck.jpg')} /> 
        </Col>

        <Col xs="6">
        <p>I didn't know much about Sun Life or even insurance when I started this work term. Above all, I was unsure of the purpose of an innovation team for an insurance company. This term has opened my eyes to how innovation works at a big company and how important it is to stay at the forefront of these developments. I have also learned a lot of new technologies in the process, this term we focused mainly on voice technology. Working with Amazon Alexa and Google Home, we discovered new ways voice could be used within insurance.
        </p> 
        </Col>
      </Row>
</div>
        // <!-- Features -->
				
    //   <div>
    //     <h2>HELLO</h2>
    //     <p>Cras facilisis urna ornare ex volutpat, et
    //     convallis erat elementum. Ut aliquam, ipsum vitae
    //     gravida suscipit, metus dui bibendum est, eget rhoncus nibh
    //     metus nec massa. Maecenas hendrerit laoreet augue
    //     nec molestie. Cum sociis natoque penatibus et magnis
    //     dis parturient montes, nascetur ridiculus mus.</p>
 
    //     <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
    //   </div>
    );
  }
}
 
export default Home;