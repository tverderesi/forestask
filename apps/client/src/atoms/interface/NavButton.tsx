export const NavButton = ({ children, onClick }) => {
  return (
    <li
      onClick={onClick}
      className="btn-ghost btn lowercase capitalize hover:rounded-xl hover:bg-mantis-600 hover:text-night-900 active:rounded-xl active:bg-mantis-600 active:text-night-900"
    >
      {children}
    </li>
  );
};
