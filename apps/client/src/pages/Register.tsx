import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { PageNavigator } from "../atoms/interface/PageNavigator";
import { RoleSelect } from "../components/RegisterForm/RoleSelect";
import { REGISTER_USER_MUTATION } from "../util/GraphQL";
import Loading from "../components/layout/Loading";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import RegisterContext from "../context/RegisterContext";
import { RegisterAvatar } from "../organisms/RegisterAvatar";
import { RegisterForm } from "../organisms/RegisterForm";

export default function Register() {
  const context = useContext(AuthContext);
  const { currentPage, handleSubmit, profilePicture, role } = useContext(RegisterContext);
  const [errors, setErrors] = useState({}) as any;

  const navigate = useNavigate();

  useEffect(() => {
    console.log(errors)
  }, [errors])

  const onSubmit = (data) => {
    console.log(data)
    addUser({
      variables: {
        registerInput: {
          ...data,
          profilePicture: profilePicture,
          role: role,
        },
      },
    });
  };

  // const [errors, setErrors] = useState({}) as any;

  const [addUser, { loading }] = useMutation(REGISTER_USER_MUTATION, {
    update(_, { data: { register: userData } }) {
      context.login(userData);
      navigate("/test", { replace: true });
    },
    onError(err) {
      console.log(err)
      const graphQLErrors = err.graphQLErrors[0].extensions.exception.errors;
      setErrors(graphQLErrors);
     
    },
  });

  return (
    <>
      {errors && ( 
        <div id="error_modal" className="modal">
          <form method="dialog" className="modal-box">
            <button type="button"  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <h3 className="font-bold text-lg">ERROR!</h3>
            <p className="py-4"></p>
          </form>
        </div>)}
      {loading && (
        <Loading
          text={"Registering..."}
          className="bg-[var(--bg-card-2)]backdrop-blur-xl absolute left-0 top-0 z-[2] flex h-screen w-screen  
        flex-col items-center justify-center p-0 backdrop-blur-xl md:h-full md:w-full"
        />
      )}
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="my-auto mt-3 flex h-[70%] w-full flex-1 flex-col  items-center justify-start lg:h-full lg:justify-center"
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
        {currentPage === 1 && <RoleSelect />}
        {currentPage === 2 && <RegisterForm />}
        {currentPage === 3 && <RegisterAvatar />}
      </motion.form>
      <PageNavigator steps={["Who are You?", "Info", "Avatar"]} />
    </>
  );
}
