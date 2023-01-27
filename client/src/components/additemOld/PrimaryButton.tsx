export function PrimaryButton({
  buttonColor,
  handleClick,
  btnText,
}): JSX.Element {
  return (
    <button
      className='btn btn-primary'
      style={{
        backgroundColor: buttonColor,
        border: 'none',
        color: 'black',
        fontWeight: '600',
        fontSize: '.80rem',
      }}
      onClick={handleClick}
    >
      {btnText}
    </button>
  );
}
