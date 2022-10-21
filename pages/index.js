import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import Link from 'next/link'
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('../components/Header'), { ssr: false })

function Home({data}) {
  return (
    <div>
      <Header/>
      <Container>
        <Row xl={4} lg={4} md={3} sm={2} xs={1}>
          {data.map((d, i) => 
          (
            <Col key = {d.name} style={{marginTop:'1rem'}}>
              <Card>
                <Link href={`profile/${encodeURIComponent((i > 56 ? i+55 : i+1))}`}>
                  <a className='anchor'>
                  <div className='imagecontainer' >
                    <Card.Img variant="top" src={d.img} style={{position:'absolute'}} alt="Error"/>
                  </div>  
                  <Card.Body>
                    <Card.Title>{d.name}</Card.Title>
                    <Card.Text>
                      {d.occupation[0]}
                    </Card.Text>
                  </Card.Body>
                  </a>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}


export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://www.breakingbadapi.com/api/characters`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Home;