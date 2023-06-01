import { AvatarSelector } from "../components/RegisterForm/AvatarSelector";

export const RegisterAvatar: React.FC = () => {
  return (
    <>
      <AvatarSelector />
      <input
        className="btn btn-ghost btn-sm text-lavender-web-50 bg-fandango-400 hover:bg-fandango-400 hover:lavender-web-50  active:bg-fandango-400 active:lavender-web-50 lg:mb-4 mb-0 "
        type="submit"
        value=" Register"
      />
    </>
  );
};
