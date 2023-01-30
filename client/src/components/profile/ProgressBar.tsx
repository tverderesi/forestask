import { setLastLevel } from '../../context/AppFunctions';

export default function ProgressBar({ userData, gameLevels }) {
  const lastLevel = setLastLevel(gameLevels);
  const nextLevel = (Number(userData.level) + 1).toString();
  const progressWidth = (userData, gameLevels) => {
    if (userData.level === lastLevel) {
      return '100%';
    } else {
      const levelPercentage =
        ((userData.xp - gameLevels[userData.level]) /
          (gameLevels[nextLevel] - gameLevels[userData.level])) *
        100;
      return `${levelPercentage}%`;
    }
  };
  return (
    <div
      className='w-full'
      style={{
        backgroundColor: '#c491ff',
        width: progressWidth(userData, gameLevels),
      }}
    ></div>
  );
}
