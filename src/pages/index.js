import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
// import * as styles from "../styles/app.module.css"
import Layout from "../components/Layout"
import { Col, Container, Row, Card, Button } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <Layout>
      <Container fluid>
        <Row className="border border-1 vh-100">
          <Col
            className="d-flex justify-content-center align-items-center"
            sm="12"
            md="6"
            lg="6"
          >
            <Card className="border-0 w-100">
              <Card.Body className="align-self-center">
                <Card.Title>
                  <p className="fs-1 text-primary">Hello,</p>
                  <p className="fs-2 text-secondary">
                    I'm <u>Sarvesh</u> 👋
                  </p>
                </Card.Title>
                <Card.Text>
                  Front-end developer and thinker,
                  <br />
                  Based in India.
                </Card.Text>
                <Button variant="primary">Get in touch</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col
            className="d-flex flex-column justify-content-around"
            sm="12"
            md="6"
            lg="6"
          >
            <StaticImage
              src="../images/freelancee.svg"
              alt="freelancer"
              placeholder=""
              layout="fullWidth"
              objectFit="cover"
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
