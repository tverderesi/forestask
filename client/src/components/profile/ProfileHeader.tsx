import { Avatar } from "../../atoms/interface/Avatar";

export default function ProfileHeader({ userData }) {
  // const lastLevel = setLastLevel(gameLevels);

  return (
    <div className="flex gap-2 items-center rounded-2xl p-6 mx-6 bg-slate-400/10  ">
      <Avatar
        userData={userData}
        className="rounded-full w-20 h-20 me-2 my-auto"
      />
      <p>
        <p className="text-xl font-semibold capitalize">
          Hello, {userData.firstName}!
        </p>
        <p className="text-base  text-night-300 mt-0">
          Young Padawawn - <span>Lvl. 7</span>
        </p>
        <p className="text-night-200 text-sm">2500XP until Lvl. 8</p>
      </p>
    </div>
  );
}
