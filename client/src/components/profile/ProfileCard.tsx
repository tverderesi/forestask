import Navbar from '../layout/elements/DesktopProfileNavbar';
import CustomAccordionItem from './accordion/CustomAccordionItem';
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
import Header from '../layout/elements/Header';
import 'react-accessible-accordion/dist/fancy-example.css';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
function ProfileCard() {
  const {
    subjects,
    page,
    dataTheme,

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
    <div
      style={Style.card as React.CSSProperties}
      className='overflow-y-scroll'
    >
      <div style={Style.cardHeader}>
        <Header />
        <ProfileHeader
          userData={userData}
          gameLevels={gameLevels}
        />
      </div>
      <div className='p-5 relative overflow-y-scroll'>
        <div style={Style.accordion}>
          <div className='align-self-center justify-content-center mb-2 p-0'>
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
          </div>
          <Accordion>
            <CustomAccordionItem
              icon={
                <MdInfoOutline
                  size={20}
                  className='mr-1'
                />
              }
              name='Subjects'
              categories={subjects}
              itemPalette={subjectPalette}
            />
            <CustomAccordionItem
              name='Activities'
              categories={activities}
              itemPalette={activityPalette}
              icon={
                <MdOutlineLightbulb
                  size={20}
                  className='mr-1'
                />
              }
            />
            <CustomAccordionItem
              name={'Deadline'}
              icon={
                <MdCalendarToday
                  size={20}
                  className='mr-1'
                />
              }
              categories={''}
              itemPalette={''}
            />

            <CustomAccordionItem
              name={'Completed'}
              icon={
                <BsCheckLg
                  size={20}
                  className='mr-1'
                />
              }
              categories={''}
              itemPalette={''}
            />
          </Accordion>
        </div>
      </div>
      <Navbar dispatch={dispatch} />
    </div>
  );
}
export default ProfileCard;
