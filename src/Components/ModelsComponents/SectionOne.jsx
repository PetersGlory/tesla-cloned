import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

const SectionOne = () => {
  return (
      <>
        <Wrap>
            <Fade bottom>
                <ItemText>
                    <h1>Model S</h1>
                    <p>Plaid</p>
                </ItemText>
            </Fade>
            <Buttons className="row">
                    <div className="container mt-5 pt-5 col-md-9 col-sm-12">
                        <div className="row">
                            <div className="col-3 mt-5 pt-5 text-center">
                                <h4 className="text-white">396 mi</h4>
                                <p className="text-white">Range (EPA est.)</p>
                            </div>
                            <div className="col-3 mt-5 pt-5 text-center">
                                <h4 className="text-white">1.99s</h4>
                                <p className="text-white">0-60 mph*</p>
                            </div>
                            <div className="col-3 mt-5 pt-5 text-center">
                                <h4 className="text-white">200 mph</h4>
                                <p className="text-white">Top Speed†</p>
                            </div>                        
                            <div className="col-3 mt-5 pt-5 text-center">
                                <h4 className="text-white">1,020 hp</h4>
                                <p className="text-white">Peak Power</p>
                            </div>
                        </div>
                    </div>
                    <RightButton className="col-sm-12 col-md-3 text-center">
                        Order Now
                    </RightButton>
            </Buttons>
        </Wrap>
        <Grad>
        <h1 className="text-center text-white">Interior of the Future</h1>
        </Grad>
        <Section>
            
        </Section>
        
        <Sections>
            <Fade bottom>
                <div className="container">
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <video autoplay="true" loop="true" preload="true" className="d-block w-100">
                                    <source src="/assets/video/tesla1.mp4" type="video/mp4" />
                                    This browser doesn't support video tag.
                                </video>

                                <div className="carousel-caption text-start d-none d-md-block">
                                    <h5 className="text-white">Cinematic Experience</h5>
                                    <p className="text-white">
                                        A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors 
                                        and exceptional responsiveness for gaming, movies and more.
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <video autoplay="true" loop="true" preload="true" className="d-block w-100">
                                    <source src="/assets/video/tesla2.mp4" type="video/mp4" />
                                    This browser doesn't support video tag.
                                </video>
                                
                                <div className="carousel-caption text-start d-none d-md-block">
                                    <h5 className="text-white">Yoke Steering</h5>
                                    <p className="text-white">
                                        A bold new approach gives you a true connection to Model S, offering better 
                                        steering feel and unobstructed views of your dash and the road ahead. Tap the 
                                        brake and Model S automatically selects the correct direction to start your trip.
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <video autoplay="true" loop="true" preload="true" className="d-block w-100">
                                    <source src="/assets/video/tesla3.mp4" type="video/mp4" />
                                    This browser doesn't support video tag.
                                </video>
                                
                                <div className="carousel-caption text-start d-none d-md-block">
                                    <h5 className="text-white">Perfect Environment</h5>
                                    <p className="text-white">
                                        Air vents are hidden throughout the cabin, while tri-zone temperature controls, 
                                        ventilated seats and HEPA filtration deliver the perfect environment.
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <video autoplay="true" loop="true" preload="true" className="d-block w-100">
                                    <source src="/assets/video/tesla4.mp4" type="video/mp4" />
                                    This browser doesn't support video tag.
                                </video>
                                
                                <div className="carousel-caption text-start d-none d-md-block">
                                    <h5 className="text-white">Redesigned Second Row</h5>
                                    <p className="text-white">
                                        Seating for three adults, with extra legroom, headroom and a stowable armrest with 
                                        integrated storage and wireless charging.
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <video autoplay="true" loop="true" preload="true" className="d-block w-100">
                                    <source src="/assets/video/tesla5.mp4" type="video/mp4" />
                                    This browser doesn't support video tag.
                                </video>
                                
                                <div className="carousel-caption text-start d-none d-md-block">
                                    <h5 className="text-white">Console-Grade Gaming</h5>
                                    <p className="text-white">
                                        Up to 10 teraflops of processing power unlock in-car gaming on-par with today’s newest 
                                        consoles. Play from any seat with wireless controller and headset compatibility.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </Fade>
        </Sections>
        
    </>
  )
}

export default SectionOne
const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: url('/assets/images/model-s.jpg');
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`
const Buttons = styled.div`
    // display: inline-flex;
    justify-content: center !important;
    margin-bottom: 40px;
    color: white !important;
`

const RightButton = styled.div`
    opacity: 0.75;
    border: 2px solid;
    border-color: #fff;
    height: 40px;
    width: 250px;
    color: #fff !important;
    border-radius: 100px;
    display:flex;
    justify-content: center;
    align-items: center;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 15px;
    cursor: pointer;
    margin: 8px;
`

const Section = styled(Wrap)`
    background-image: url(https://tesla-cdn.thron.com/delivery/public/image/tesla/c0c475f7-2856-46e1-87ab-dd67ec8dd43f/bvlatuR/std/2880x1800/MS-Interior-Hero-Desktop);
`

const Grad = styled.div`
    padding-top: 30px;
    background: linear-gradient(to bottom, #333, #333 50%, #eee 75%, #333 75%);
    height: 200px;
    width: 100vw;
`

const Sections = styled(Wrap)`
    padding-top: 4%;
    background-image: none !important;
    background-color: black;
    height: auto !important;

    .container{
        background-color: black;
    }

`