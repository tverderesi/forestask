import { motion } from "framer-motion";
import { useContext } from "react";
import { Date, Email, Text, Password } from "../components/RegisterForm/Form";
import RegisterContext from "../context/RegisterContext";
import { RoleKey } from "../atoms/RoleKey";

export const RegisterForm = () => {
  const { register } = useContext(RegisterContext);

  return (
    <motion.div
      key="infoform"
      className="flex flex-col m-0 md:grid md:grid-cols-2 gap-6 px-2 py-6 justify-start md:justify-center overflow-y-scroll overflow-x-hidden h-full transition-all duration-150 ease-in-out
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

      <RoleKey register={register} name="roleKey" />
    </motion.div>
  );
};
