export const useGetTheme = () => {
  const theme = localStorage.getItem("theme");
  return theme;
};
