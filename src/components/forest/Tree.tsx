export default function Tree({ number }) {
  const positionTop = (number % 4) * (number % 2 ? -1 : 1);

  return (
    <div>
      <img
        src={`./media/trees/${number % 5}.png`}
        alt={`tree ${number}`}
        style={{
          position: 'relative',
          top: `${positionTop}vh`,
          filter: 'brightness(1.3) hue-rotate(-15deg)',
          scale: '2',

          zIndex: '0',
        }}
      />
    </div>
  );
}
