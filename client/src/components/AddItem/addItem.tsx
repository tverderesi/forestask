import AppContext from '../../context/AppContext';
import { useContext } from 'react';

import { Card } from '../../types/Types';

import SubjectsDropdown from '../layout/buttons/SubjectsDropdown';
import { Title } from '../additemOld/Title';
import { FormControlText } from './FormControlText';
import { FormControlTextArea } from './FormControlTextArea';
function AddItem() {
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
    <div className='absolute z-[5] w-screen h-screen backdrop-blur-2xl top-0 left-0 flex items-center justify-center'>
      <div className='backdrop-blur-xl bg-blend-overlay bg-[var(--card-bg-color)] rounded-2xl w-[75vh] h-[75vh] shadow-2xl p-5 top-8 flex flex-col justify-start'>
        <Title />
        <SubjectsDropdown
          card={newCard}
          subjects={subjects}
        />
        <FormControlText card={newCard} />
        <FormControlTextArea card={newCard} />

        <div className='flex'></div>
      </div>
    </div>
  );
}
export default AddItem;
