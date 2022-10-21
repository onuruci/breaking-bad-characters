import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import Spinner from 'react-bootstrap/Spinner'
import { Container } from 'react-bootstrap'
import Stack from 'react-bootstrap/Stack'
import { Row, Col } from 'react-bootstrap'
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('../../components/Header'), { ssr: false })

const Post = () => {
  const router = useRouter()
  const { cid } = router.query

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    if(isLoading && cid) {
      fetch('/api/characters/'+cid)
      .then((res) => res.json())
      .then((data) => {
        setData(data.characters[0])
        console.log(data.characters[0])
        setLoading(false)
      })
    }
  }, [isLoading, cid]);

  return (
    <div>
      <Header/>
      <Container>
        {
          !isLoading ? 
          <Row style={{marginTop:'4rem'}} xl={2} lg={2} md={1} sm={1} xs={1}>
          <Col sm={5}>
            <div style={{width: '90%',margin: '0 auto 0 auto'}}>
              <img
                src={data.img}
                width="100%"
                height="auto"
                alt="Error"
              />
            </div>
          </Col>
          <Col sm={5}>
            <Stack direction="vertical" gap={4} className='char_info'>
              <div className='char_name'>
                {data.name}
              </div>
              <Stack direction="horizontal" gap={4} className="mid">
                AKA. <div className='itl'>{data.nickname}</div>
              </Stack>
              <Stack direction="vertical" gap={2}>
              {
                data.occupation.map(occupation => {
                  return(
                    <div key={occupation} className='char_data smid'>
                      {occupation}
                    </div>
                  );
                })
              }
              </Stack>
              <Stack direction="vertical" gap={2} style={{marginTop: '4rem'}}>
                <Stack direction="horizontal" gap={4} className="sm">
                  Birthday: <div className='char_data'>{data.birthday}</div>
                </Stack>
                <Stack direction="horizontal" gap={4} className="sm">
                  Status: <div className='char_data'>{data.status}</div>
                </Stack>
                <Stack direction="horizontal" gap={4} className="sm">
                  Portrayed: <div className='char_data'>{data.portrayed}</div>
                </Stack>
              </Stack>
            </Stack>
          </Col>
          </Row>
          :
          <Row>
            <Col sm={1} style={{marginLeft:'auto', marginRight:'auto', marginTop:'6rem'}}>
              <Spinner animation="border"/>
            </Col>
          </Row>
        }
      </Container>
    </div>
  );
  
}

export default Post
