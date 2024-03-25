import { useContext } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import RegisterContext from "../context/RegisterContext";

export const RoleKey = ({ name, options = {}, register }) => {
  const { role } = useContext(RegisterContext);

  return (
    <>
      {role &&
        role !== "STUDENT" && ( //prettier-ignore
          <div className="flex flex-col border-warning soft-warning rounded-2xl p-3 w-full relative -left-3">
            <div className="flex flex-col w-full px-3">
              <label
                className={`text-center font-semibold mb-2 capitalize w-full`}
              >
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
              </label>
              <input
                className="form-control text-sm w-full"
                type="password"
                {...register(name, { ...options })}
              />
            </div>
          </div>
        )}
    </>
  );
};
