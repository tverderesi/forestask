/** @format */

import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { Text, Password } from "../components/RegisterForm/Form";
import { LOGIN_USER_MUTATION } from "../util/GraphQL";
import { AuthContext } from "../context/AuthContext";
import { ReactComponent as ProfilePicturePlaceholder } from "../assets/profilePicturePlaceholder.svg";
import Loading from "../components/layout/Loading";

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
          className="absolute left-0 top-0 z-[2] flex h-screen w-screen flex-col  
      items-center justify-center rounded-2xl bg-[var(--bg-card-2)] p-0 backdrop-blur-xl md:h-full md:w-full"
        />
      )}
      <motion.div
        className="flex h-full w-full flex-col content-center items-center"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -200, opacity: 0 }}
      >
        <form
          key="loginform"
          className="mx-auto my-auto flex w-[70%] flex-col content-center  items-center gap-y-3 justify-self-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          {localStorage?.getItem("profilePic") ? (
            <img
              src={profilePic}
              alt="You"
              className={`avatar my-5 rounded-full ${
                profilePic ? "selected-avatar-big card-shadow w-1/3" : ""
              } `}
            />
          ) : (
            <ProfilePicturePlaceholder className="w-1/2 stroke-black" />
          )}

          <h4 className="mb-2 text-lg font-semibold">
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
            className="btn-ghost btn bg-fandango-400   text-lavender-web-50 hover:bg-fandango-400  active:bg-fandango-400 "
            type="submit"
            value="Log in"
          />
        </form>
      </motion.div>
    </>
  );
}
