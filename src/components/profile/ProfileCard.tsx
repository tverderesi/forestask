import Card from 'react-bootstrap/Card';
import { Accordion, Container } from 'react-bootstrap';
import Navbar from '../layout/DesktopProfileNavbar';
import Header from '../layout/Header';
import AccordionItem from './AccordionItem';
import AppContext from '../../context/AppContext';
import { useContext } from 'react';
import {
  MdInfoOutline,
  MdOutlineLightbulb,
  MdCalendarToday,
} from 'react-icons/md';
import { BsCheckLg } from 'react-icons/bs';
import ProfileHeader from './ProfileHeader';
import FiltersRow from './FiltersRow';
import FiltersHeader from './FiltersHeader';
import * as Style from './ProfileCardStyles';

function ProfileCard() {
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
    userData,
    gameLevels,
  } = useContext(AppContext);

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const locale = Intl.DateTimeFormat().resolvedOptions().locale;

  return (
    <Card style={Style.card}>
      <Card.Header
        style={Style.cardHeader}
        className='m-0'
      >
        <Header />
        <ProfileHeader
          userData={userData}
          gameLevels={gameLevels}
        />
      </Card.Header>
      <Card.Body
        className='p-0 m-0'
        style={{
          position: 'relative',
          overflowY: 'scroll',
        }}
      >
        <Accordion
          style={Style.accordion}
          flush
        >
          <Container className='align-self-center justify-content-center mb-2 p-0'>
            <FiltersHeader
              filters={filters}
              windowHeight={windowHeight}
              dispatch={dispatch}
              page={page}
              cardsPerPage={cardsPerPage}
            />
            <FiltersRow
              filters={filters}
              dispatch={dispatch}
              timeZone={timeZone}
              locale={locale}
            />
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

          <AccordionItem
            name={'Completed'}
            icon={
              <BsCheckLg
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
