import { useContext } from 'react';

import AppContext from '../../context/AppContext';
import { Card } from '../../types/Types';

import { ButtonContainer } from './ButtonContainer';
import { CustomDropdown } from './CustomDropdown';
import { DatePicker } from './DatePicker';
import { DropdownContainer } from './DropdownContainer';
import { FormControlText } from './FormControlText';
import { FormControlTextArea } from './FormControlTextArea';
import { PrimaryButton } from './PrimaryButton';
import { Title } from './Title';
import { XPPicker } from './XPPicker';
import {
  fetchCards,
  putCards,
  setPagesParameters,
} from '../../context/AppFunctions';
import { motion } from 'framer-motion';

export default function AddItem() {
  const {
    subjects,
    activities,
    dispatch,
    filters,
    page,
    cardsPerPage,
    cardHeight,
    windowHeight,
  } = useContext(AppContext);

  const handleSubmit = async () => {
    putCards(newCard);
    newCard.id = '';
    newCard.content = '';
    newCard.type = '';
    newCard.subject = '';
    newCard.xp = 0;
    newCard.checked = false;
    newCard.title = '';
    newCard.deadline = 0;

    const cardNumberParams = {
      subject: '',
      activity: '',
      deadline: '',
      checked: '',
      _start: 0,
      _limit: 1,
    };

    const [firstCard, xTotalCount] = await fetchCards(cardNumberParams, true);

    const { subject, activity, deadline, checked } = filters;

    const pageLoadParams = {
      subject: subject,
      activity: activity,
      checked: checked,
      deadline: deadline,
      _start: page,
      limit: cardsPerPage,
    };

    const pageParameters = setPagesParameters(
      cardHeight,
      windowHeight,
      xTotalCount
    );
    dispatch({ type: 'SET_PAGES_PARAMETERS', payload: pageParameters });

    dispatch({ type: 'LOAD_TOTAL_CARDS', payload: xTotalCount });
    const cards = await fetchCards(pageLoadParams);
    dispatch({ type: 'RENDER_CARDS', payload: cards });
    dispatch({
      type: 'SEND_CARD',
      payload: '',
    });
  };

  const handleCancel = (e: React.SyntheticEvent) => {
    e.preventDefault();
    newCard.id = '';
    newCard.content = '';
    newCard.type = '';
    newCard.subject = '';
    newCard.xp = 0;
    newCard.checked = false;
    newCard.title = '';
    newCard.deadline = 0;
    dispatch({
      type: 'SEND_CARD',
      payload: '',
    });
  };

  const newCard: Card = {
    id: '',
    content: '',
    type: '',
    subject: '',
    xp: 0,
    checked: 'false',
    title: '',
    deadline: 0,
  };

  return (
    <div
      className=' flex items-center justify-center'
      style={{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
      }}
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
    >
      <motion.div
        className='p-10 flex flex-col overflow-y-scroll font-semibold justify-between 
      activity-card card-shadow rounded-2xl max-w-[87vw] max-h-[90vh]'
        initial={{ y: 500 }}
        animate={{ y: 0 }}
        exit={{ y: 500 }}
      >
        <Title />
        <FormControlText card={newCard} />
        <FormControlTextArea card={newCard} />
        <div className='dropdown'>
          <label
            tabIndex={0}
            className='btn m-1'
          >
            Click
          </label>
          <ul
            tabIndex={0}
            className='dropdown-content activity-card p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>

        <button
          className='btn'
          onClick={handleCancel}
        >
          cancel
        </button>
        {/* <Title />
        <div>
          
       
          <DropdownContainer>
            <CustomDropdown
              dropdownName={'Subject'}
              dropdownItems={subjects}
              target={'subject'}
              card={newCard}
            />
            <CustomDropdown
              dropdownName={'Activity'}
              dropdownItems={activities}
              target={'type'}
              card={newCard}
            />
          </DropdownContainer>
          <div className='d-flex justify-content-between g-0'>
            <XPPicker
              width='45%'
              target={newCard}
            />
            <DatePicker
              width='45%'
              target={newCard}
            />
          </div>
          <ButtonContainer>
            <PrimaryButton
              buttonColor='var(--bold-accent-color-2)'
              handleClick={handleCancel}
              btnText='Cancel'
            />
     
          </ButtonContainer>
        </div> */}
      </motion.div>
    </div>
  );
}
