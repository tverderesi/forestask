/** @format */

import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { Text, Password } from "../../../components/RegisterForm/Form";
import { LOGIN_USER_MUTATION } from "../../../util/GraphQL";
import { AuthContext } from "../../../context/AuthContext";
import { ReactComponent as ProfilePicturePlaceholder } from "../../../assets/profilePicturePlaceholder.svg";
import Loading from "../../../components/layout/Loading";

export default function Login() {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const onSubmit = (data) => {
    loginUser({ variables: { logInInput: data } });
  };

  const { register, handleSubmit } = useForm({
    defaultValues: { logIn: "", password: "" },
  });
  const [loginUser, { loading }] = useMutation(LOGIN_USER_MUTATION, {
    update(_, { data: { login: userData } }) {
      context.login(userData);

      navigate("/app/home", {
        replace: true,
      });
    },
    onError(err: any) {
      setErrors(err.graphQLErrors[0]?.extensions?.errors);
    },
  });

  const profilePic = `${
    process.env.REACT_APP_PUBLIC_URL
  }/media/avatars/${localStorage?.getItem("profilePic")}.jpg`;

  const firstName = localStorage?.getItem("firstName")
    ? ", " + localStorage?.getItem("firstName")
    : null;

  return (
    <>
      {loading && (
        <Loading
          text={"Logging in..."}
          className="absolute top-0 left-0 flex flex-col p-0 h-screen w-screen  
      items-center justify-center md:w-full md:h-full z-[2] backdrop-blur-xl bg-[var(--bg-card-2)] rounded-2xl"
        />
      )}
      <motion.div
        className="w-full h-full flex flex-col items-center content-center"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -200, opacity: 0 }}
      >
        <form
          key="loginform"
          className="flex flex-col items-center content-center justify-self-center mx-auto  gap-y-3 w-[70%] my-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          {localStorage?.getItem("profilePic") ? (
            <img
              src={profilePic}
              alt="You"
              className={`rounded-full avatar my-5 ${
                profilePic ? "selected-avatar-big card-shadow w-1/3" : ""
              } `}
            />
          ) : (
            <ProfilePicturePlaceholder className="w-1/2 stroke-black" />
          )}

          <h4 className="text-lg font-semibold mb-2">
            Welcome Back{firstName}!
          </h4>
          <Text
            label="Username/E-mail"
            placeholder=""
            name="logIn"
            register={register}
          />

          <Password label={"Password"} name="password" register={register} />
          <input
            className="btn btn-ghost text-lavender-web-50   bg-fandango-400 hover:bg-fandango-400  active:bg-fandango-400 "
            type="submit"
            value="Log in"
          />
        </form>
      </motion.div>
    </>
  );
}
