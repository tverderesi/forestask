export const useHandleClick = (
  setSelectedRole: React.Dispatch<React.SetStateAction<string>>,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
) => {
  const handleClick = (e: React.SyntheticEvent, role: string) => {
    e.preventDefault();
    setSelectedRole(role);
    setCurrentPage((currentPage) => currentPage + 1);
  };
  return handleClick;
};
