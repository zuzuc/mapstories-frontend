import React from 'react'
import { useHistory } from 'react-router-dom';
import './About.css'
import { IoLogoLinkedin } from 'react-icons/io';
import { IoLogoGithub } from 'react-icons/io';
import { Card, CardDeck } from 'react-bootstrap';
// import Footer from "./../../components/footer/Footer";

function About() {
    const history = useHistory();
    const handleLinkedInJoshClick = (e) => {
        let path = window.open('https://www.linkedin.com/in/hyunki-chae-08b43a157/');
        history.push(path);
    };

    const handleGitJoshClick = (e) => {
        let path = window.open('https://github.com/Joshchae?tab=repositories');
        history.push(path);
    }

    const handleLinkedInFranziClick = (e) => {
        let path = window.open('https://www.linkedin.com/in/franziska-luig/');
        history.push(path);
    };

    const handleGitFranziClick = (e) => {
        let path = window.open('https://github.com/zuzuc');
        history.push(path);
    }

    const handleLinkedInJoldonClick = (e) => {
        let path = window.open('https://www.linkedin.com');
        history.push(path);
    };

    const handleGitJoldonClick = (e) => {
        let path = window.open('https://github.com/Joldon?tab=repositories');
        history.push(path);
    }

    return (
        <div>
            <div>
                <div className='blue-box' style={{ textAlign:'center' }}>
                    <h4>Welcome to MapStories
                    </h4>
                    <h5>
                    Thank you for your visit. We are a platform dedicated to data-visualisation through maps and sharing real-life stories.   
                    </h5>
                    <br />
                    <h6>
                    The platform intends to provide an impetus for marginalised voices to be included in discussions on climate-induced human mobility. Users can explore the interactive map that entails individual migration stories submitted by people that are affected by the adverse effects of climate change. 
                    </h6>
                    <h6>
                    This website also helps to explore a macro-picture of conflicts across the world displaying an interactive choropleth map that shows different intensity levels of conflicts and fatalities in each country.
                    </h6>

                </div>
                <div>
                    <div className='about-box'>
                    <CardDeck expand="sm">
                        <Card style={{ height: '15rem', cursor: 'default' }}>
                            <Card.Body>
                            <Card.Title>Josh</Card.Title>
                            <Card.Text>
                                Full-stack Web/App Developer,<br /> with business-mindset and Entrepreneurship.
                                <br />
                                <li><IoLogoLinkedin onClick={handleLinkedInJoshClick} /></li>
                                <li><IoLogoGithub onClick={handleGitJoshClick} /></li>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ height: '15rem', cursor: 'default' }}>
                            <Card.Body>
                            <Card.Title>Franzi</Card.Title>
                            <Card.Text>
                                Full-Stack Web/App Developer <br />with an interdisciplinary background in Environmental Justice and International Relations.  <br />
                                <li><IoLogoLinkedin onClick={handleLinkedInFranziClick} /></li>
                                <li><IoLogoGithub onClick={handleGitFranziClick} /></li>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ height: '15rem', cursor: 'default' }}>
                            <Card.Body>
                            <Card.Title>Joldon</Card.Title>
                            <Card.Text>
                            Full-stack Web/App Developer <br /> with a professional background in Political Science
                                <li><IoLogoLinkedin onClick={handleLinkedInJoldonClick} /></li>
                                <li><IoLogoGithub onClick={handleGitJoldonClick} /></li>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                    </div>
                </div>
            </div>
            <div>
                <br />
            </div>
            {/* <Footer/> */}
        </div>
    );
 
     
}

export default About;
