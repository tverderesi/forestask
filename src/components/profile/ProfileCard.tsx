import Card from 'react-bootstrap/Card';
import { Accordion, Figure, Row, Col, Container } from 'react-bootstrap';
import Navbar from '../layout/DesktopProfileNavbar';
import Header from '../layout/Header';
import AccordionItem from './AccordionItem';
import CardListContext from '../../context/CardListContext';
import { useContext } from 'react';
import {
  MdInfoOutline,
  MdOutlineLightbulb,
  MdCalendarToday,
  MdFilterAlt,
} from 'react-icons/md';
import Date from './Date';

function ProfileCard({ lvl, xp, name }) {
  const { subjects, subjectPallete, activities } = useContext(CardListContext);
  return (
    <Card
      style={{
        backdropFilter: 'blur(20px)',
        backgroundColor: 'hsla(210, 20%, 98%, 0.700)',
        borderRadius: '16px',
        border: 'none',
        height: '85vh',
        boxShadow: '5px 5px 20px #3a3a3a38',
        width: 'max(350px, 30vw) ',
      }}
    >
      <Card.Header
        style={{
          border: 'none',
          borderRadius: '16px 16px 0 0',
        }}
        className='m-0'
      >
        <Header />
        <Figure
          className='d-flex mt-2 mx-auto justify-content-between'
          style={{ height: '100px', width: '90%' }}
        >
          <img
            className='rounded-circle me-2'
            src='./media/profile_pic.jpg'
            alt='Sua Foto de Perfil'
          />
          <figcaption className='w-100'>
            <div
              className='d-flex flex-column ms-4 justify-content-between'
              style={{ height: '100px' }}
            >
              <span className='fs-5'>Hello, {name}</span>

              <span className='fs-6'>{xp} xp to level up!</span>

              <div className='d-flex flex-row justify-content-between align-items-center'>
                <div
                  className='progress w-100'
                  style={{
                    height: '25px',
                    borderRadius: '13px',
                    position: 'relative',
                  }}
                >
                  <div
                    className='text-center fw-bolder w-100'
                    style={{
                      lineHeight: '20px',
                      position: 'absolute',
                      top: '0',
                      left: 'auto',
                      right: 'auto',
                      zIndex: '1',
                    }}
                  >
                    Level {lvl}
                  </div>
                  <div
                    className='w-25 progress-bar'
                    style={{ backgroundColor: '#c491ff' }}
                  ></div>
                </div>
              </div>
            </div>
          </figcaption>
        </Figure>
      </Card.Header>
      <Card.Body className='p-0 m-0'>
        <Accordion
          style={{
            backgroundColor: 'transparent',
            borderBottom: '1px solid black',
          }}
          flush
        >
          <Container className='align-self-center justify-content-center mt-2 ms-2  mb-0'>
            <Row>
              <Col className='d-flex align-items-center'>
                <span style={{ position: 'relative', top: '-.25rem' }}>
                  <MdFilterAlt size={22} />
                </span>
                <span
                  className='p-2 h5'
                  style={{ fontWeight: '600' }}
                >
                  Filter
                </span>
              </Col>
            </Row>
          </Container>
          <AccordionItem
            icon={
              <MdInfoOutline
                size={20}
                className='me-1'
              />
            }
            name='Subjects'
            categories={subjects}
            itemPallete={subjectPallete}
          />
          <AccordionItem
            name='Activities'
            categories={activities}
            itemPallete={subjectPallete}
            icon={
              <MdOutlineLightbulb
                size={20}
                className='me-1'
              />
            }
          />
          <Date
            name={'Deadline'}
            icon={
              <MdCalendarToday
                size={20}
                className='me-1'
              />
            }
          />
        </Accordion>
      </Card.Body>
      <Card.Footer style={{ border: 'none' }}>
        <Navbar />
      </Card.Footer>
    </Card>
  );
}
export default ProfileCard;
