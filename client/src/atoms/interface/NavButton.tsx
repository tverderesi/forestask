export const NavButton = ({ children, onClick }) => {
  return (
    <li>
      <button
        onClick={onClick}
        className="btn btn-ghost hover:bg-mantis-600 hover:text-night-900 hover:rounded-xl active:bg-mantis-600 active:text-night-900 active:rounded-xl"
      >
        {children}
      </button>
    </li>
  );
};
