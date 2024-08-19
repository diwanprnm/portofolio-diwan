
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import plnPicture from '../assets/rankweb.png'
import diarvisPicture from '../assets/webdiarvis.png'
import tthPicture from '../assets/tth.png'
import ystPicture from '../assets/yst.png'


function Projects() {
  return (
     <section id='projects'>
        <div className='wrapper'>
          <h1>Projects</h1>
          <Row xs={1} md={3} className='g-4'>
              <Col md={4}>
              <Card bg='primary' text='white' width="30%">
                <Card.Img variant="top" src={plnPicture} />
                <Card.Body>
                  <Card.Title>Project PLN Succesor</Card.Title>
                  <Card.Text>
                  Web pengelolaan kenaikan jabatan di PT.PLN menggunakan framework laravel dan Next.js.
                  </Card.Text>
                  <br/>
                  <Button href="https://github.com/diwanprnm/PLN-Successor" variant="outline-light" target='_blank'>Github</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
            <Card bg='primary' text='white' width="30%">
                <Card.Img variant="top" src={diarvisPicture} />
                <Card.Body>
                  <Card.Title>Project Web Diarvis</Card.Title>
                  <Card.Text>
                  Web pengelolaan aset daerah milik Pemerintah Kabupaten Bandung menggunakan framework laravel.
                  </Card.Text>
                  <br/>
                  <Button href='https://github.com/diwanprnm/Diarvis/tree/diwan' target='_blank' variant="outline-light">Github</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
            <Card bg='primary' text='white'>
                <Card.Img variant="top" src={tthPicture} />
                <Card.Body>
                  <Card.Title>Project Telkom Test House</Card.Title>
                  <Card.Text>
                  Web yang membantu pengelolaan proses pengujian perangkat telekomunikasi di PT.Telkom menggunakan Laravel
                  </Card.Text>
                  <Button href='https://github.com/diwanprnm/Telkom-Test-House' target='_blank' variant="outline-light">Github</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br/>
          <Row xs={1} md={3} className='g-4'>
          <Col md={4}>
            <Card bg='primary' text='white'>
                <Card.Img variant="top" src={ystPicture} />
                <Card.Body>
                  <Card.Title>Project Yayasan Sekar Telkom</Card.Title>
                  <Card.Text>
                    Web yang mengelola program dari Yayasan Sekar Telkom menggunakan Laravel dan React.js
                  </Card.Text>
                  <Button href='https://github.com/diwanprnm/YST' target='_blank' variant="outline-light">Github</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
           
    
        </div>
        
     </section>
  )
}

export default Projects
