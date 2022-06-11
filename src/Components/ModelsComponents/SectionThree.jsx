import React from 'react'
import styled from 'styled-components'

const SectionThree = () => {
  return (
    <>
    
        <Wrapped>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="row justify-content-around">
                            <div className="col-12 mt-2 text-start">
                                <h1 className="text-dark">360°</h1>
                                <p className="col-md-8 text-dark">Rear, side and forward-facing cameras provide maximum visibility</p>
                            </div>
                            <div className="col-12 mt-2 text-start">
                                <h1 className="text-dark">250m</h1>
                                <p className="col-md-8 text-dark">Powerful visual processing at up to 250 meters of range</p>
                            </div>
                            <div className="col-12 mt-2 text-start">
                                <h1 className="text-dark bi bi-dot"></h1>
                                <p className="col-md-8 text-dark">Tesla Vision detects nearby cars, helps prevent potential collisions and assists with parking</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapped>
        <Wrap>            
            <div className="container p-5">
                <div className="container p-2">
                    <div className="row">
                        <div className="col-md-5 col-sm-12">
                            <h6 className="text-secondary" style={{fontSize:'25px',fontWeight:'400'}}>Autopilot</h6>
                            <h2 className="text-dark">Future of Driving</h2>
                            <RightButton>
                                Order Now
                            </RightButton>
                        </div>
                        <div className="col-md-7 col-sm-12 pl-3">
                            <p className="text-dark">
                                Autopilot enables your car to steer, accelerate and brake automatically within its lane 
                                under your active supervision, assisting with the most burdensome parts of driving. With 
                                over-the-air software updates, the latest enhancements are available instantly.
                            </p>
                        </div>
                    </div>
                   <div className="mt-5 pt-5">
                        <h3 className="text-dark mt-4">Features</h3>
                        <p className="text-dark">
                            Full Self-Driving capability introduces additional features and improves existing functionality to 
                            make your car more capable over time including:
                        </p>
                   </div>
                </div>
            </div>
        </Wrap>

        <Contain className="row justify-content-center">
            <video autoplay="true" loop="true" preload="true" style={{width:"100%"}}>
                <source src="/assets/video/anime.mp4" type="video/mp4" />
                This browser doesn't support video tag.
            </video>
            <div className="row col-md-8 col-sm-12 justify-content-center align-items-center">
                <div className="col-3 text-center p-2">
                    <div style={{borderTop:"2px solid",}}>
                    <h4 className="text-dark">Negate on Autopilot</h4>
                    <span>Active guidance from on-ramp to off-ramp</span>
                    </div>
                </div>
                <div className="col-3 text-center p-2">
                    <div style={{borderTop:"2px solid",}}>
                    <h4 className="text-dark">Auto Lane Change</h4>
                    <span>Automatically change lanes while driving on highways</span>
                    </div>
                </div>
                <div className="col-3 text-center p-2">
                    <div style={{borderTop:"2px solid",}}>
                    <h4 className="text-dark">Summon</h4>
                    <span>Automatically retrieve your car</span>
                    </div>
                </div>
                <div className="col-3 text-center p-2">
                    <div style={{borderTop:"2px solid",}}>
                    <h4 className="text-dark">Autopark</h4>
                    <span>Parallel and perpendicular parking with single touch  </span>
                    </div>
                </div>
            </div>
        </Contain>
        <div className="bg-dark mt-3">
            <div className="container">
                <div className="row mt-2">
                    <div className="col-md-7 col-sm-12">
                        <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/649c549e-12b4-40c6-9294-7e996b8d3ccb/bvlatuR/std/4096x3071/Model-S-Specs-Hero-Desktop-LHD" style={{width:"100%"}} alt="imagess" />
                    </div>
                    <div className="col-md-5 col-sm-12"></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SectionThree
const Wrap = styled.div`
    padding-top: 8%;
    padding-bottom: 3%;
    width: 100vw;
    height: auto;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
`

const Wrapped = styled(Wrap)`
    height: 400px;
    justify-content: none !important;
    align-items: none !important;
    background-image: url("https://tesla-cdn.thron.com/delivery/public/image/tesla/c960989c-3359-4caf-8cc7-afb07c372d6f/bvlatuR/std/4096x2560/Autopilot-Hero-Vision-Desktop");
`
const RightButton = styled.div`
    opacity: 0.75;
    border: 2px solid;
    border-color: #000;
    height: 40px;
    width: 250px;
    margin-top: 20px;
    color: #000 !important;
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

const RightButtons = styled(RightButton)`
    border-color: #fff !important;
    color: #fff !important;
`

const Contain = styled.div`
    height: 400px;
    background-color: #fff !important;
    padding-bottom: 5%;
    margin-top: 0;
`
const Wraps = styled(Wrap)`
    background-color: black !important;
`