import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Layout from "../components/Layout"

export default function about() {
  return (
    <Layout>
      <Container fluid>
        <Row className="justify-content-center vh-100">
          <Col lg="6">
            <p className="fs-1 text-primary text-center ">About me</p>
            <br />
            <p className="text-center">
            Hi, I am Sarvesh from india and professional front-end developer, I've completed masters in computer application from one of the reputated university in india. Since 7yr's working on core UI technologies along with UI and  Web frameworks like ReactJs, Angular, VueJs, more on. Developed variaty of web application and mobile applications which helping client to focus on business and reduce the operating costs. 
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
