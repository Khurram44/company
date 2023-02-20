import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Row, Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import PortfolioItem from 'sections/portfolio/parts/PortfolioItem.js'
import AnimatedHeading from 'components/animated-heading'
import address from "../../assets/address.png"
import Deedmed from "../../assets/deedmed.png"
import More from "../../assets/morethanus.png"
import Proxy from "../../assets/prox.png"
import Poly from "../../assets/poly.png"
import Travel from "../../assets/travel.png"


import Ying from "../../assets/ying.webp"



class PortfolioOne extends React.Component {
    
    render() {

        const Section = styled.section`
          background-color: #050505;
          padding: 100px 0;
        `
        const PortfolioContainer = styled.div`
            padding: 0 50px;
            @media (max-width:767px) {
              padding: 0 50px;
            }
        `

        return (
            <Section id="portfolio">
                  <Col md={12}>
                    <Container>
                      <AnimatedHeading text="Recent Projects" />
                    </Container>
                  <PortfolioContainer>
                      <Row>
                        {this.portfolio()}
                      </Row>
                  </PortfolioContainer>
                </Col>
            </Section>
        )
    }

  portfolio() {
      // const  {items}  = 
      // {
      //   "data": {
      //     "items": {
      //       "edges": [
      //         {
      //           "content": {
      //             "frontmatter": {
      //               "id": 1,
      //               "title": "Front-end Development by Ali",
      //               "category": "React.js",
      //               "link": "https://github.com",
      //               "image": {
      //                 "childImageSharp": {
      //                   "fluid": {
      //                     "src": "/static/a2989e06b3660c7be8a26e1969c6ff26/a7715/image.jpg"
      //                   }
      //                 }
      //               }
      //             }
      //           }
      //         },
      //         {
      //           "content": {
      //             "frontmatter": {
      //               "id": 2,
      //               "title": "Front-end Project",
      //               "category": "React.js",
      //               "link": "https://github.com",
      //               "image": {
      //                 "childImageSharp": {
      //                   "fluid": {
      //                     "src": "/static/a2989e06b3660c7be8a26e1969c6ff26/a7715/image.jpg"
      //                   }
      //                 }
      //               }
      //             }
      //           }
      //         },
      //         {
      //           "content": {
      //             "frontmatter": {
      //               "id": 3,
      //               "title": "Angular Project",
      //               "category": "Angular.js",
      //               "link": "https://github.com",
      //               "image": {
      //                 "childImageSharp": {
      //                   "fluid": {
      //                     "src": "/static/a2989e06b3660c7be8a26e1969c6ff26/a7715/image.jpg"
      //                   }
      //                 }
      //               }
      //             }
      //           }
      //         },
      //         {
      //           "content": {
      //             "frontmatter": {
      //               "id": 4,
      //               "title": "Angular + Ionic ",
      //               "category": "Angular.js",
      //               "link": "https://github.com",
      //               "image": {
      //                 "childImageSharp": {
      //                   "fluid": {
      //                     "src": "/static/a2989e06b3660c7be8a26e1969c6ff26/a7715/image.jpg"
      //                   }
      //                 }
      //               }
      //             }
      //           }
      //         },
      //         {
      //           "content": {
      //             "frontmatter": {
      //               "id": 5,
      //               "title": "UI Deisgn for Company",
      //               "category": "UI/UX Design",
      //               "link": "https://github.com",
      //               "image": {
      //                 "childImageSharp": {
      //                   "fluid": {
      //                     "src": "/static/a2989e06b3660c7be8a26e1969c6ff26/a7715/image.jpg"
      //                   }
      //                 }
      //               }
      //             }
      //           }
      //         },
      //         {
      //           "content": {
      //             "frontmatter": {
      //               "id": 6,
      //               "title": "UX Development for Company",
      //               "category": "UI/UX Design",
      //               "link": "https://github.com",
      //               "image": {
      //                 "childImageSharp": {
      //                   "fluid": {
      //                     "src": "/static/a2989e06b3660c7be8a26e1969c6ff26/a7715/image.jpg"
      //                   }
      //                 }
      //               }
      //             }
      //           }
      //         }
      //       ]
      //     }
      //   },
      //   "extensions": {}
      // }
   const set =  [
    {
      "content": {
        "frontmatter": {
          "id": 1,
          "title": "Appointment booking",
          "category": "Mobile App",
          "image": {
            "childImageSharp": {
              "fluid": {
                "src": Deedmed
              }
            }
          }
        }
      }
    },
    {
      "content": {
        "frontmatter": {
          "id": 2,
          "title": "More Than Us (Concerts)",
          "category": "Mobile App",
          "image": {
            "childImageSharp": {
              "fluid": {
                "src": More
              }
            }
          }
        }
      }
    },
    {
      "content": {
        "frontmatter": {
          "id": 3,
          "title": "Ying (Handyman)",
          "category": "Mobile Application",
          "image": {
            "childImageSharp": {
              "fluid": {
                "src": Ying
              }
            }
          }
        }
      }
    },
    {
      "content": {
        "frontmatter": {
          "id": 4,
          "title": "Proximity Healthcare",
          "category": "Website",
          "image": {
            "childImageSharp": {
              "fluid": {
                "src": Proxy
              }
            }
          }
        }
      }
    },
    {
      "content": {
        "frontmatter": {
          "id": 5,
          "title": "Star Travel and Tours UK Ltd",
          "category": "Website",
          "image": {
            "childImageSharp": {
              "fluid": {
                "src": Travel
              }
            }
          }
        }
      }
    },
    {
      "content": {
        "frontmatter": {
          "id": 6,
          "title": "Polygame",
          "category": "Website",
          "image": {
            "childImageSharp": {
              "fluid": {
                "src":Poly
              }
            }
          }
        }
      }
    }
  ]
      const {items} = this.props
      console.log(items,"items")
      
      return set.map((value, index) => {
        return (
          <Col md={4} key={index}>
              <PortfolioItem 
                index={index} 
                image={value.content.frontmatter.image.childImageSharp.fluid.src} 
                text={value.content.frontmatter.title} 
                category={value.content.frontmatter.category}
                type="col"
              />
          </Col>
        )
      })
    }
}

export default props => (
  <StaticQuery
      query={graphql`
          query {
              items: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(portfolio)/"}}, sort: {fields: [frontmatter___id], order: ASC}, limit: 6) {
                edges {
                  content: node {
                    frontmatter {
                      id
                      title
                      category
                      link
                      image {
                        childImageSharp {
                          fluid(maxWidth: 1000) {
                            src
                          }
                        }
                      }
                    }
                  }
                }
              }
            }           
          `}
      render={({ items }) => <PortfolioOne items={items.edges} />}
  />
)