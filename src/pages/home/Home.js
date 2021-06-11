import React from 'react';
import Particles from 'react-tsparticles';
import './../../App.css';
import './Home.css';
import Button from 'react-bootstrap/Button';

function Home() {

      return (
      <div>
        <div className='position-text-particles'>
          <div className='welcome-buttons'>
            <div className='welcome'>
              <h1><strong>Welcome to MapStories</strong></h1>
            </div>
            <div className='buttons'>
              {/* <SlideButton /> */}
                <Button variant="success" href="/Conflicts" >Conflicts</Button>
                <Button variant="success" href="/ClimateMigration/Map" >Climate-induced Migration</Button>        
            </div>
          </div>
          </div>

            <Particles id="tsparticles"
              options={{
                backgroundMode: {
                    enable: true, 
                    zIndex: -1,
                },
                particles: {
                  number: {
                    value: 100,
                    // limit: 300,
                    density: {
                      enable: true,
                      value_area: 400
                    }
                  },
                  color: {
                    value: "#ffffff"
                  },
                  shape: {
                    type: "star",
                    stroke: {
                      width: 0,
                      color: "#000000"
                    },
                    polygon: {
                      nb_sides: 5
                    },
                  },
                  opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                      enable: false,
                      speed: 1,
                      opacity_min: 0.1,
                      sync: false
                    }
                  },
                  size: {
                    value: 2,
                    random: true,
                    anim: {
                      enable: true,
                      speed: 40,
                      size_min: 0.1,
                      sync: false
                    }
                  },
                  line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1
                  },
                  move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                      enable: false,
                      rotateX: 600,
                      rotateY: 1200
                    }
                  }
                },
                interactivity: {
                  detect_on: "canvas",
                  events: {
                    onHover: {
                      enable: true, //or false
                      mode: "repulse", //bubble
                      parallax: {
                        enable: false,
                        force: 60,
                        smooth: 10
                      }
                    },
                    onClick: {
                      enable: true,
                      mode: "push"
                    },
                    resize: true
                  },
                  modes: {
                    grab: {
                      distance: 400,
                      lineLinked: {
                        opacity: 1
                      }
                    },
                    bubble: {
                      distance: 400,
                      size: 40,
                      duration: 2,
                      opacity: 8,
                      speed: 3
                    },
                    repulse: {
                      distance: 200
                    },
                    push: {
                      particles_nb: 4
                    },
                    remove: {
                      particles_nb: 2
                    }
                  }
                },
                retina_detect: true,
                fps_limit: 60,
                background: {
                  image: "url('https://cdn.pixabay.com/photo/2016/03/29/21/13/triangles-1289379_1280.png')",
                  // image: "url('https://cdn.pixabay.com/photo/2018/03/20/18/23/cartography-3244166_960_720.png')",
                  // image: "url('https://cdn.pixabay.com/photo/2013/06/06/15/36/world-117174_960_720.png')",
                  // image: "url('https://cdn.pixabay.com/photo/2017/03/16/21/09/galaxy-2150265_960_720.png')",
                  // image: "url('https://cdn.pixabay.com/photo/2012/04/18/01/45/world-36479_960_720.png')",
                    
                    position: "50% 50%",
                    repeat: "no repeat",
                    size: "cover",
                    height: "100%",
                }
              }}
            />
          
  
      </div>
    );
}

export default Home;
