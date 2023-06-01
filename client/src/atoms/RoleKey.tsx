import { useContext } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Password } from "../components/RegisterForm/Form";
import RegisterContext from "../context/RegisterContext";

export const RoleKey = () => {
  const { role, register } = useContext(RegisterContext);
  const roleKey = (
    <>
      {role && role?.slice(0, 1) + role?.slice(1).toLowerCase()} Key{" "}
      <div
        className="tooltip tooltip-warning none"
        data-tip={
          "This password was provided to you by your institution. You CAN'T change your privileges after you created your account."
        }
      >
        <AiOutlineQuestionCircle className="inline mb-1" />
      </div>
    </>
  );
  return (
    <>
      {role &&
        role !== "STUDENT" && ( //prettier-ignore
          <div className="flex flex-col gap-6 border-warning soft-warning rounded-2xl p-3 w-full overflow">
            {
              //prettier-ignore
              <Password register={register} label={roleKey} name='privilegePassword' />
            }
          </div>
        )}
    </>
  );
};
