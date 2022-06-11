import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal'

const SectionTwo = () => {
  return (
    <>
        <Wrap>
            <Fade bottom>
                <div className="container mt-5">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-5 col-sm-12 mt-5">
                            <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/180e927c-0542-4428-beb7-1411502fe3bb/bvlatuR/std/1040x584/MS-Interior-Grid-A-Desktop" style={{width:"100%"}} alt="Stay Connected" />
                        </div>
                        <div className="col-md-5 col-sm-12 mt-5 pt-5 pl-lg-5">
                            <h4 className="text-start text-white">Stay Connected</h4>
                            <p className="text-start text-white">
                                Instantly connect with multi-device Bluetooth, or fast charge devices with wireless 
                                and 36-watt USB-C charging.
                            </p>
                        </div>
                        <div className="col-md-5 col-sm-12 mt-5">
                            <h4 className="text-start text-white">Immersive Sound</h4>
                            <p className="text-start text-white">
                                A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive 
                                listening and studio-grade sound quality.
                            </p>
                        </div>
                        <div className="col-md-5 col-sm-12 mt-5">
                            <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/180e927c-0542-4428-beb7-1411502fe3bb/bvlatuR/std/1040x584/MS-Interior-Grid-A-Desktop" style={{width:"100%"}} alt="Stay Connected" />
                        </div>
                        <div className="col-md-5 col-sm-12 mt-5">
                            <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/ab165f41-fa4e-4abe-b82a-51bdc295cf42/bvlatuR/std/1040x584/MS-Interior-Grid-D-Desktop" style={{width:"100%"}} alt="Stay Connected" />
                        </div>
                        <div className="col-md-5 col-sm-12 mt-5">
                            <h4 className="text-start text-white">Room for Everything</h4>
                            <p className="text-start text-white">
                                With front and rear trunks and fold-flat seats you can fit your bike without taking the 
                                wheel off—and your luggage too.
                            </p>
                        </div>
                    </div>
                </div>
            </Fade>
        </Wrap>
        <Wrapped>
            <div className="container mt-5 pt-5">
                <div className="row">
                    <div className="col-4 mt-5 pt-5 text-center">
                        <h4 className="text-white">1,020hp</h4>
                        <p className="text-white">Peak Power</p>
                    </div>
                    <div className="col-4 mt-5 pt-5 text-center">
                        <h4 className="text-white">9.23 s</h4>
                        <p className="text-white">@155 mph 1/4 mile</p>
                    </div>
                    <div className="col-4 mt-5 pt-5 text-center">
                        <h4 className="text-white">1.99 s</h4>
                        <p className="text-white">0-60 mph*</p>
                    </div>
                </div>
            </div>
        </Wrapped>
        <div className="container p-5">
            <div className="container p-2">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <h6 className="text-secondary" style={{fontSize:'25px',fontWeight:'400'}}>Plaid</h6>
                        <h2 className="text-dark">Beyond Ludicrous</h2>
                        <RightButton>
                            Order Now
                        </RightButton>
                    </div>
                    <div className="col-md-8 col-sm-12 pl-5">
                        <p>
                            Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery 
                            architecture for all Model S trims enables back-to-back track runs without performance degradation.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <Wraps>
            <div className="container p-5">
                <div className="container p-2">
                    <h2 className="text-dark">Electric Powertrain</h2>
                    <p className="mt-3 col-md-10 col-sm-12">
                    Model S platforms unite powertrain and battery technologies for unrivaled performance, range and 
                    efficiency. New module and pack thermal architecture allows faster charging and gives you more power 
                    and endurance in all conditions.
                    </p>
                </div>
            </div>
            <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/0f44fadf-7d40-43b6-b94d-de289b38840c/bvlatuR/std/1920x900/model-s-performance-dual-motor-desktop_carousel-new" alt="Electric Powertrain" style={{width:"90%", borderRadius:"20px"}} className="mt-3" />
            <div className="container mt-4">
                <div className="row justify-content-between">
                    <div className="col-md-5 pt-3 col-sm-12 mt-5" style={{borderTop: "2px solid black"}}>
                        <h4 className="text-dark">Model S</h4>
                        <p>
                            Dual Motor All-Wheel Drive unlocks more range than any other vehicle in our current lineup, 
                            with insane power and maximum control
                        </p>
                        <div className="row mt-2 justify-content-between">
                            <div className="col-4 text-start">
                                <h4 className="text-dark">3.1 s</h4>
                                <span>0-6 mph</span>
                            </div>
                            <div className="col-4 text-start">
                                <h4 className="text-dark">405 mi</h4>
                                <span>Range (EPA est.)</span>
                            </div>
                            <div className="col-4 text-start">
                                <h4 className="text-dark">670 hp</h4>
                                <span>Peak Power</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 pt-3 col-sm-12 mt-5" style={{borderTop: "2px solid black"}}>
                        <h4 className="text-dark">Model S Plaid</h4>
                        <p>
                            Maintain 1,000+ horsepower all the way to 200 mph with Tri-Motor All-Wheel Drive, featuring 
                            torque vectoring and three independent carbon-sleeved rotors.
                        </p>
                        <div className="row mt-2 justify-content-between">
                            <div className="col-4 text-start">
                                <h4 className="text-dark">1.99 s*</h4>
                                <span>0-6 mph</span>
                            </div>
                            <div className="col-4 text-start">
                                <h4 className="text-dark">396 mi</h4>
                                <span>Range (EPA est.)</span>
                            </div>
                            <div className="col-4 text-start">
                                <h4 className="text-dark">1,020 hp</h4>
                                <span>Peak Power</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="mt-5 text-center">* With rollout subtracted</p>
        </Wraps>
        <Wrapp>

        </Wrapp>

        <Wrap>
            <Fade bottom>
            <div className="container p-5">
                <div className="container p-2">
                    <div className="row">
                        <div className="col-md-5 col-sm-12">
                            <h6 className="text-light" style={{fontSize:'25px',fontWeight:'400'}}>Exterior</h6>
                            <h2 className="text-white">Designed for Efficiency</h2>
                            <RightButtons>
                                Order Now
                            </RightButtons>
                        </div>
                        <div className="col-md-7 col-sm-12 pl-3">
                            <p className="text-light">
                                With a drag coefficient of just .208 Cd, the lowest on the planet, Model S is built for 
                                speed, endurance and range. Improved aerodynamics and a wider chassis offer more responsive 
                                performance so you can take corners quicker and with more confidence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
                <div className="container mt-5">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-5 col-sm-12 mt-5">
                            <h4 className="text-start text-white">Relentless Performance</h4>
                            <p className="text-start text-white">
                                Staggered, performance wheels and tires keep the car planted and help transfer maximum 
                                power down to the road.
                            </p>
                        </div>
                        <div className="col-md-5 col-sm-12 mt-5">
                            <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/fe86a447-03fe-43ce-bf53-daff2a81210d/bvlatuR/std/3949x2217/Model-S-Exterior-Grid-A-Desktop-Global" style={{width:"100%"}} alt="Stay Connected" />
                        </div>
                        <div className="col-md-5 col-sm-12 mt-5">
                            <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/1020d97e-9a6f-4932-9914-0ce889ecfaa6/bvlatuR/std/3840x2156/Model-S-Exterior-Grid-B-Desktop-Global" style={{width:"100%"}} alt="Stay Connected" />
                        </div>
                        <div className="col-md-5 col-sm-12 mt-5 pt-5 pl-lg-5">
                            <h4 className="text-start text-white">Optimized Aerodynamics</h4>
                            <p className="text-start text-white">
                                Attention to detail on all exterior surfaces makes Model S the most aerodynamic production 
                                car on Earth.
                            </p>
                        </div>
                        <div className="col-md-5 col-sm-12 mt-5">
                            <h4 className="text-start text-white">Refined Styling</h4>
                            <p className="text-start text-white">
                            An iconic silhouette meets refreshed, elegant proportions.
                            </p>
                        </div>
                        <div className="col-md-5 col-sm-12 mt-5">
                            <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/b592fbac-9ccd-4951-94b8-f5c5157dfe5b/bvlatuR/std/3657x2039/Model-S-Exterior-Grid-C-Desktop-Global" style={{width:"100%"}} alt="Stay Connected" />
                        </div>
                    </div>
                </div>
            </Fade>
        </Wrap>

        <Contain>
            <Divs>
                <div className="col-md-8 col-sm-12">
                    <video autoplay="true" loop="true" preload="true" className="d-block w-100">
                        <source src="/assets/video/plain.mp4" type="video/mp4" />
                        This browser doesn't support video tag.
                    </video>
                </div>
                <div className="col-md-4 col-sm-12 pt-3 pl-3">
                    <span className="text-secondary" style={{fontSize:"25",}}>Range</span>
                    <h4>Go Anywhere</h4>
                    <p className="mt-5 text-dark">
                        With up to 405 miles of estimated range and access to the world’s largest and most powerful fast 
                        charging network, you’ll spend less time plugged in and more time on the road.
                    </p>
                    <RightButton className="btn btn-outline-secondary mt-5">
                        ORDER NOW
                    </RightButton>
                </div>
            </Divs>
        </Contain>

        <Contain>
            <div className="container mt-5">
                <h3 className="text-start">Freedom to Travel</h3>
                <p className="mt-2">
                    Enter a destination on your touchscreen and Trip Planner will automatically calculate your route with 
                    Superchargers along the way.
                </p>
            </div>
            
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
                                <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/f43bfbe5-2246-4e1e-a9a6-ffe490154fcc/bvlatuR/std/2450x1124/map_florida_bg-2x" alt="Electric Powertrain" style={{width:"100%", borderRadius:"20px"}} className="mt-3" />

                                <div className="carousel-caption text-start d-none d-md-block">
                                    <p className="text-dark">
                                        San Francisco to Los Angeles
                                    </p>
                                    <h5 className="text-dark">383 Miles</h5>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/d9e26485-e44c-4666-82fc-7a87550cf70d/bvlatuR/std/2450x1124/map_berkeley_bg-2x" alt="Electric Powertrain" style={{width:"100%", borderRadius:"20px"}} className="mt-3" />
                                
                                <div className="carousel-caption text-start d-none d-md-block">
                                    <p className="text-dark">
                                    Berkeley to Lake Tahoe
                                    </p>
                                    <h5 className="text-dark">178 miles</h5>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/86eac453-d308-4724-9a9a-d00343ac2ad3/bvlatuR/std/2450x1124/map_newyork_bg-2x" alt="Electric Powertrain" style={{width:"100%", borderRadius:"20px"}} className="mt-3" />
                                
                                <div className="carousel-caption text-start d-none d-md-block">
                                    <p className="text-dark">
                                    Manhattan to Boston
                                    </p>
                                    <h5 className="text-dark">211 miles</h5>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/f43bfbe5-2246-4e1e-a9a6-ffe490154fcc/bvlatuR/std/2450x1124/map_florida_bg-2x" alt="Electric Powertrain" style={{width:"100%", borderRadius:"20px"}} className="mt-3" />
                                
                                <div className="carousel-caption text-start d-none d-md-block">
                                    <p className="text-dark">
                                    Fort Lauderdale to Orlando
                                    </p>
                                    <h5 className="text-dark">195 miles</h5>
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

            <RightButton className="mt-5 mb-5">
                Learn more
            </RightButton>
        </Contain>

        <Contain>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <span className="text-secondary" style={{fontSize:"25",}}>Safety</span>
                        <h2>High Impact Protection</h2>
                        <p className="mt-3 mb-5 text-dark">
                            Model S is built from the ground up as an electric vehicle, with a high-strength architecture 
                            and floor-mounted battery pack for incredible occupant protection and low rollover risk. Every 
                            new Model S includes Tesla’s latest active safety features, such as Automatic Emergency Braking, 
                            at no extra cost.
                        </p>
                        <RightButton className="btn btn-outline-secondary mt-5">
                            ORDER NOW
                        </RightButton>
                    </div>
                    <div className="col-md-8 col-sm-12">
                        <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/d9cf0882-127e-406a-9f2d-a599c5988bd8/bvlatuR/std/3840x2160/Model-S-Safety-Hero-Desktop-Global" style={{width:"100%"}} alt="safty" />
                    </div>
                </div>
            </div>
        </Contain>
    </>
  )
}

export default SectionTwo

const Wrap = styled.div`
    padding-top: 8%;
    padding-bottom: 8%;
    width: 100vw;
    height: auto;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
`

const Wrapped = styled(Wrap)`
    height: 400px;
    background-image: url("https://tesla-cdn.thron.com/delivery/public/image/tesla/08585f00-c0b7-4bda-80e4-2b78406b5582/bvlatuR/std/4096x2560/Model-S-Performance-Hero-Desktop-LHD");
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

const Wraps = styled(Wrap)`
    background-color: #F4F4F4 !important;
    height: auto !important;
    padding-bottom: 3%;
`
const Wrapp = styled(Wrapped)`
    background-image: url("https://tesla-cdn.thron.com/delivery/public/image/tesla/1981e29b-2ce8-4620-9c6a-fe1eaf005656/bvlatuR/std/3456x2160/Model-S-Exterior-Hero-Desktop-Global");
`

const RightButtons = styled(RightButton)`
    border-color: #fff !important;
    color: #fff !important;
`

const Contain = styled(Wrap)`
    height: 100vh;
    background-color: #fff !important;
    padding-bottom: 5%;
    margin-top: 0;
    video{
        width: 100%;
    }
    .row{
        padding:0;
        margin:0;
    }
`
const Divs = styled.div`
    display: flex;
    margin-top:-120px !important;

    @media (max-width: 786px){
        flex-direction: column;
        margin-top:-140px !important;
    }
`