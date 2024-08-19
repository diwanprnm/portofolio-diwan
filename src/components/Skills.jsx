import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import htmlPicture from '../assets/html.png'
import cssPicture from '../assets/css-3.png'
import phpPicture from '../assets/php.png'
import mysqlPicture from '../assets/mysql.png'
import postgrePicture from '../assets/postgre.png'
import laravelPicture from '../assets/laravel-2.svg'
import reactPicture from '../assets/react.png'
import vuePicture from '../assets/vue.png'
import bootstrapPicture from '../assets/bootstrap.png'
import jqueryPicture from '../assets/jquery.png'
import gitPicture from '../assets/git.png'
import githubPicture from '../assets/github.png'
import gitlabPicture from '../assets/gitlab.png'
import ciPicture from '../assets/ci-logo.png'

function Skills() {
  return (
    <section id='skills'> 
    <div className='wrapper'>
      <h1>Skills</h1>
      <Card>
        <Card.Header as="h3">Languanges and Databases</Card.Header>
        <br/>
        <Card.Body>
          <Row xs={2} md={6}>
            <Col>
            <Image src={htmlPicture} height={140} width={140} />
            <p align="center">HTML</p>
            </Col>
            <Col>
               <Image src={cssPicture} height={140} width={140}/>
              <p align="center">CSS</p>
           </Col>
           <Col>
               <Image src={phpPicture} height={140} width={140}/>
              <p align="center">PHP</p>
           </Col>
            <Col>
               <Image src={mysqlPicture} height={140} width={140}/>
              <p align='center'>MySQL</p>
           </Col>
            <Col>
               <Image src={postgrePicture} height={140} width={140}/>
              <p align="center">PostgreSQL</p>
           </Col>
          </Row>
        </Card.Body>
      </Card>
      <br/>
      <Card>
        <Card.Header as="h3">Frameworks</Card.Header>
        <Card.Body>
          <Row xs={2} md={6}>
            <Col>
                <Image src={laravelPicture} height={140} width={140}/>
                <p align="center">Laravel</p>
            </Col>
            <Col>
                <Image src={reactPicture} height={140} width={140}/>
                <p align="center">React.js</p>
            </Col>
             <Col>
                <Image src={vuePicture} height={140} width={140}/>
                <p align="center">Vue.js</p>
            </Col>
            <Col>
                <Image src={bootstrapPicture} height={140} width={140}/>
                <p align="center">Bootstrap</p>
            </Col>
            <Col>
                <Image src={ciPicture} height={140} width={140}/>
                <p align="center">CodeIgniter</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <br/>
      <Card>
        <Card.Header as="h3">Libraries</Card.Header>
        <Card.Body>
          <Row xs={2} md={6}>
              <Col>
                 <Image src={jqueryPicture} height={140} width={140}/>
                <p align="center">JQuery</p>
              </Col>
          </Row>
        </Card.Body>
      </Card>
      <br/>
      <Card>
        <Card.Header as="h3">Other
        </Card.Header>
        <Card.Body>
          <Row xs={2} md={6}>
            <Col>
              <Image src={gitPicture} height={140} width={140}/>
              <p align="center">Git</p>
            </Col>
            <Col>
              <Image src={githubPicture} height={140} width={140}/>
              <p align="center">Github</p>
            </Col>
             <Col>
              <Image src={gitlabPicture} height={140} width={140}/>
              <p align="center">Gitlab</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>

    </section>
  )
}

export default Skills
