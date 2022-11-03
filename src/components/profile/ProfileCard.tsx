import Card from 'react-bootstrap/Card';
import { Accordion, Figure, Row, Col, Container } from 'react-bootstrap';
import Navbar from '../layout/DesktopProfileNavbar';
import Header from '../layout/Header';
import AccordionItem from './AccordionItem';
import AppContext from '../../context/AppContext';
import { useContext } from 'react';
import {
  MdInfoOutline,
  MdOutlineLightbulb,
  MdCalendarToday,
  MdFilterAlt,
} from 'react-icons/md';
import { filterCards } from '../../context/AppFunctions';

function ProfileCard({ lvl, xp, name }) {
  const {
    subjects,
    page,
    cardsPerPage,
    activities,
    subjectPalette,
    activityPalette,
    filters,
    windowHeight,
    dispatch,
  } = useContext(AppContext);

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
      <Card.Body
        className='p-0 m-0'
        style={{
          position: 'relative',
          overflowY: 'scroll',
          overflowX: 'hidden',
        }}
      >
        <Accordion
          style={{
            backgroundColor: 'transparent',
            borderBottom: '1px solid black',
          }}
          flush
        >
          <Container className='align-self-center justify-content-center mb-2 p-0'>
            <Row className='ms-0 me-0'>
              <Col className='d-flex flex-row align-items-center  justify-content-between g-0 ms-3 mt-2 me-3'>
                <div className='ms-1'>
                  <span style={{ position: 'relative', top: '-.25rem' }}>
                    <MdFilterAlt size={22} />
                  </span>
                  <span
                    className='h5 ms-1'
                    style={{ fontWeight: '600' }}
                  >
                    Filter
                  </span>
                </div>
                <button
                  value='Filter'
                  className='btn btn-primary'
                  style={{
                    backgroundColor: '#c491ff',
                    border: 'none',
                    color: 'black',
                    fontWeight: '600',
                    fontSize: '.80rem',
                  }}
                  onClick={() => {
                    filterCards(
                      filters,
                      windowHeight,
                      dispatch,
                      page,
                      cardsPerPage
                    );
                  }}
                >
                  Submit
                </button>
              </Col>
            </Row>
            <Row className='d-flex justify-content-around align-items-center mt-1 me-3 ms-3 '>
              <Col
                fluid
                className='pe-0'
              >
                <div
                  className='badge me-1'
                  style={{ backgroundColor: filters.subjectsColor }}
                >
                  {filters.subjects}
                </div>
                <div
                  className='badge'
                  style={{ backgroundColor: filters.activitiesColor }}
                >
                  {filters.activities}
                </div>
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
            itemPalette={subjectPalette}
          />
          <AccordionItem
            name='Activities'
            categories={activities}
            itemPalette={activityPalette}
            icon={
              <MdOutlineLightbulb
                size={20}
                className='me-1'
              />
            }
          />
          <AccordionItem
            name={'Deadline'}
            icon={
              <MdCalendarToday
                size={20}
                className='me-1'
              />
            }
            categories={''}
            itemPalette={''}
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
