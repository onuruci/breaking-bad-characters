import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import Link from 'next/link'
import Image from 'next/image';
import { Stack } from 'react-bootstrap';

const Header = () => {
  return(
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <Link href='/'>
            <a className='anchor'>
              <Stack direction="horizontal" gap={4} className="sm">
                <Image
                  alt=""
                  src={"/bbicon.jpg"}
                  width="60"
                  height="60"
                  className="d-inline-block align-top"
                />
                <Image
                  alt=""
                  src={"/bblogo.png"}
                  width="100%"
                  height="60"
                  className="d-inline-block align-top"
                />
              </Stack>
            </a>          
          </Link>        
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;