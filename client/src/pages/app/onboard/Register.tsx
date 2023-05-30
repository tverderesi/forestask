/** @format */

import { motion } from "framer-motion";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useContext, useState } from "react";
import { useHandleClick } from "../../../util/hooks";
import { useMutation } from "@apollo/client";
import { PageNavigator } from "../../../atoms/interface/PageNavigator";
import { RoleSelect } from "../../../components/Form/RoleSelect";
import { useForm } from "react-hook-form";
import { Date, Email, Text, Password } from "../../../components/Form/Form";
import { AvatarSelector } from "../../../components/Form/AvatarSelector";
import { REGISTER_USER_MUTATION } from "../../../util/GraphQL";
import Loading from "../../../components/layout/Loading";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import AppContext from "context/AppContext";

export default function Register() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      birthday: "",
      privilegePassword: "",
      confirmPrivilegePassword: "",
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
    },
  });
  const context = useContext(AuthContext);
  const { selectedAvatar } = useContext(AppContext);
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    addUser({
      variables: {
        registerInput: {
          ...data,
          selectedPrivilegeLevel: selectedRole.toUpperCase(),
          profilePicture: selectedAvatar,
        },
      },
    });
  };

  const [selectedRole, setSelectedRole] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = useHandleClick(setSelectedRole, setCurrentPage);

  const confirmPrivilegePasswordLabel = <>Confirm {selectedRole} Password </>;

  const privilegePasswordLabel = (
    <>
      {selectedRole} Password{" "}
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

  // const [errors, setErrors] = useState({}) as any;

  const [addUser, { loading }] = useMutation(REGISTER_USER_MUTATION, {
    update(_, { data: { register: userData } }) {
      context.login(userData);

      navigate("/test", { replace: true });
    },
    onError(err) {
      console.log(err.graphQLErrors[0].extensions.errors);
    },
  });

  return (
    <>
      {loading && (
        <Loading
          text={"Registering..."}
          className="absolute top-0 left-0 flex flex-col p-0 h-screen w-screen  
        items-center justify-center md:w-full md:h-full z-[2] backdrop-blur-xl bg-[var(--bg-card-2)]backdrop-blur-xl"
        />
      )}
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-start mt-3 lg:justify-center h-[70%]  w-full lg:h-full flex-1 my-auto"
        initial={{
          x: 200,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        exit={{ x: -200, opacity: 0 }}
      >
        {currentPage === 1 && (
          <RoleSelect selectedRole={selectedRole} handleClick={handleClick} />
        )}
        {currentPage === 2 && (
          <motion.div
            key="infoform"
            className="flex flex-col m-0 md:grid md:grid-cols-2 gap-6 px-2 py-6 justify-start lg:justify-center w-full overflow-y-scroll h-full transition-all duration-150 ease-in-out
            items-center scrollbar scrollbar-thin scrollbar-thumb scrollbar-track-primary-200"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
          >
            <Text
              register={register}
              label={"First Name"}
              name={"firstName"}
              placeholder={"First Name"}
            />

            <Text
              register={register}
              label={"Last Name"}
              name={"lastName"}
              placeholder={"Last Name"}
            />

            <Text
              register={register}
              label={"Username"}
              name={"username"}
              placeholder={"Username"}
            />

            <Email register={register} name="email" />

            <Date name="birthday" register={register} label="Birthday" />

            <Password register={register} label="Password" name="password" />

            <Password
              register={register}
              label="Confirm Password"
              name="confirmPassword"
            />

            {selectedRole &&
              selectedRole !== "student" && ( //prettier-ignore
                <div className="flex flex-col md:grid md:grid-cols-2 md:col-span-2 gap-6 border-warning soft-warning rounded-2xl p-3 w-[calc(100%+1.5rem)] -ml-3 overflow">
                  {
                    //prettier-ignore
                    <Password register={register} label={privilegePasswordLabel} name='privilegePassword' />
                  }
                  {
                    //prettier-ignore
                    <Password register={register} label={confirmPrivilegePasswordLabel} name='confirmPrivilegePassword' />
                  }
                </div>
              )}
          </motion.div>
        )}
        {currentPage === 3 && (
          <>
            <AvatarSelector />
            <input
              className="btn btn-ghost btn-sm text-lavender-web-50 bg-fandango-400 hover:bg-fandango-400 hover:lavender-web-50  active:bg-fandango-400 active:lavender-web-50 lg:mb-4 mb-0 "
              type="submit"
              value=" Register"
            />
          </>
        )}
      </motion.form>
      <PageNavigator
        color="primary"
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        steps={["Who are You?", "Info", "Avatar"]}
      />
    </>
  );
}
