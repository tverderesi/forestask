import { useContext } from 'react';

import AppContext from '../../context/AppContext';
import { Card } from '../../types/Types';
import BlurredBackground from '../atoms/BlurredBackground';
import GenericCard from '../atoms/GenericCard';
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

  const handleCancel = () => {
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
    <>
      <BlurredBackground />
      <GenericCard
        width='87vh'
        height='90vh'
      >
        <Title />
        <div>
          <FormControlText card={newCard} />
          <FormControlTextArea card={newCard} />
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
            <PrimaryButton
              buttonColor='var(--bold-accent-color-1)'
              handleClick={handleSubmit}
              btnText='Submit'
            />
          </ButtonContainer>
        </div>
      </GenericCard>
    </>
  );
}
