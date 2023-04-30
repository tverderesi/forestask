import { useState, useCallback } from "react";

export const useForm = (
  callback: { (): void; (): void; (): void },
  initialState: any = {}
) => {
  const [values, setValues] = useState(initialState);

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    callback();
  };
  return {
    onChange,
    onSubmit,
    values,
  };
};

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

export const useScrollToSection = (sectionId) => {
  const scrollToSection = useCallback(() => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [sectionId]);

  return scrollToSection;
};
