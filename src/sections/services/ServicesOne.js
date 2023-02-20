import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import AnimationContainer from 'components/animation-container'
import AnimatedHeading from 'components/animated-heading'
import WebIcon from '../../assets/webicon.png'
import Mobapp from '../../assets/mobileapp.png'
import Desktop from '../../assets/desktop.png'
import Web3 from '../../assets/blockchain.png'
import Ecommerce from '../../assets/ecommerce.png'
import UX from '../../assets/ux.png'







class ServicesOne extends React.Component {


    shouldComponentUpdate() {
        return false
    }


    render() {
        const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-color: #111;
            background-image: url(https://t3.ftcdn.net/jpg/03/92/36/68/360_F_392366896_au5EwGR6uct7waNOjCQqnOu49QpOx6QN.jpg);
            background-size: cover;
            .heading {
                width: 100%;
            }
          }
        `

        const ServiceContainer = styled.div`
            background-color: rgba(0,0,0,.9);
            padding: 100px 0;
        `


        const ServiceElement = styled.div`
            margin-bottom: 20px;
            text-align: center;
            padding: 40px;
            border-radius: 20px;
            transition: .2s;
            &:hover {
                background-color: #000;
                box-shadow: 0 28px 60px rgb(4, 229, 229, .1);
                transform: translateY(-10px);
            }
        `
        const ServiceHeading = styled.h4`
            font-size: 30px;
            font-weight: 500;
            font-family: Teko;
            color: #fff;
        `
        const ServiceSeparator = styled.div`
            height: 5px;
            width: 50px;
            background-color: #04e5e5;
            margin-bottom: 10px;
            margin: auto;
         `
        const ServiceIcon = styled.div`
            margin-bottom: 20px;
            img {
                max-height: 70px;
            }
        `

        const ServiceList = styled.ul`
            padding: 0;
            margin: 11px 0 0 0;
        `

        const ServiceListElement = styled.li`
            list-style: none;
            color: #c5c5c5;
            font-weight: 300;
            font-size: 14px;
            margin: 5px 0px;
            text-align:"right"
            &::before {
                display: inline-block;
                content: '';
                border-radius: 2.5px;
                height: 5px;
                width: 5px;
                margin-right: 10px;
                background-color:#04e5e5;
                position: relative;
                bottom: 2.5px;
            }
        `

        return (
            <Section id="services">
                <ServiceContainer>
                    <Container>
                        <AnimatedHeading text="Our Services" />
                        <Row>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInLeft" delay={200}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                            <img src={Mobapp} alt="Mobile App Development" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            Mobile App Development
                                        </ServiceHeading>
                                        <ServiceSeparator />
                                        <ServiceList>
                                            <ServiceListElement>
                                            We offer extraordinary services in app designing to create brand’s visibility.
                                            </ServiceListElement>
                                            <ServiceListElement>
                                            Our experts create most affordable app design and development services considering the size of every business.
                                            </ServiceListElement>
                                            <ServiceListElement>
                                            We hire the best resources to help you create flexible, user friendly, and trendsetting app in the market
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInDown" delay={400}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                            <img src={WebIcon} alt="Mobile App Development" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            Web  Development
                                        </ServiceHeading>
                                        <ServiceSeparator />
                                        <ServiceList>
                                            <ServiceListElement>
                                            We offer extraordinary services in web designing to create brand’s visibility.
                                            </ServiceListElement>
                                            <ServiceListElement>
                                            Our experts create most affordable web design and development services considering the size of every business.
                                            </ServiceListElement>
                                            <ServiceListElement>
                                            We hire the best resources to help you create flexible, user friendly, and trendsetting website in the market
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInRight" delay={600}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                            <img src={UX} alt="Mobile App Development" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            UX/UI Design
                                        </ServiceHeading>
                                        <ServiceSeparator />
                                        <ServiceList>
                                            <ServiceListElement>
                                            We offer extraordinary services in UI/UX to create brand’s visibility.
                                            </ServiceListElement>
                                            <ServiceListElement>
                                            Our experts create most affordable UI/UX design considering the size of every business.
                                            </ServiceListElement>
                                            <ServiceListElement>
                                            We hire the best resources to help you create flexible, user friendly UI/UX Design.
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInLeft" delay={800}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                            <img src={Ecommerce} alt="Mobile App Development" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            E-commece Solutions
                                        </ServiceHeading>
                                        <ServiceSeparator />
                                        <ServiceList>
                                            <ServiceListElement>
                                            We offer extraordinary services in E-commerce Solutions.
                                            </ServiceListElement>
                                            <ServiceListElement>
                                            Our experts create most affordable E-commerce Solutions services considering the size of every business.
                                            </ServiceListElement>
                                            <ServiceListElement>
                                            We hire the best resources to help you create flexible, user friendly E-commerce Solutions in the market
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInUp" delay={1000}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                            <img src={Web3} alt="Mobile App Development" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                        Web3 Apps
                                        </ServiceHeading>
                                        <ServiceSeparator />
                                        <ServiceList>
                                            <ServiceListElement>
                                            We offer extraordinary services in  Web3 Apps Solutions.
                                            </ServiceListElement>
                                            <ServiceListElement>
                                            Our experts create most affordable  Web3 Apps  services considering the size of every business.
                                            </ServiceListElement>
                                            <ServiceListElement>
                                            We hire the best resources to help you create flexible, user friendly  Web3 Apps in the market
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInRight" delay={1200}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                            <img src={Desktop} alt="Mobile App Development" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            Desktop Applications
                                        </ServiceHeading>
                                        <ServiceSeparator />
                                        <ServiceList>
                                            <ServiceListElement>
                                            We offer extraordinary services in  Desktop Applications Solutions.
                                            </ServiceListElement>
                                            <ServiceListElement>
                                            Our experts create most affordable Desktop Applications  services considering the size of every business.
                                            </ServiceListElement>
                                            <ServiceListElement>
                                            We hire the best resources to help you create flexible, user friendly Desktop Applications in the market
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}

export default props => (
    <StaticQuery
        query={graphql`
      query {
        background: file(relativePath: {eq: "bg2.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 4000, quality: 100) {
              src
            }
          }
        }
        web: file(relativePath: {eq: "icons/web.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        mobile: file(relativePath: {eq: "icons/mobile.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        seo: file(relativePath: {eq: "icons/seo2.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        email: file(relativePath: {eq: "icons/email.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        ui: file(relativePath: {eq: "icons/sketch.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        network: file(relativePath: {eq: "icons/network.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
      }      
      `}
        render={({
            background,
            web,
            mobile,
            seo,
            email,
            ui,
            network }) => <ServicesOne
                background={background}
                web={web}
                mobile={mobile}
                seo={seo}
                email={email}
                ui={ui}
                network={network}
                {...props} />}
    />
)