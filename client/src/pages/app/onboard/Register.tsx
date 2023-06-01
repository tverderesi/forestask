import { motion } from "framer-motion";
import { useContext } from "react";
import { useMutation } from "@apollo/client";
import { PageNavigator } from "../../../atoms/interface/PageNavigator";
import { RoleSelect } from "../../../components/RegisterForm/RoleSelect";
import { REGISTER_USER_MUTATION } from "../../../util/GraphQL";
import Loading from "../../../components/layout/Loading";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import RegisterContext from "../../../context/RegisterContext";
import { IRegisterFormState } from "../../../types/interfaces";
import { RegisterAvatar } from "../../../organisms/RegisterAvatar";
import { RegisterForm } from "../../../organisms/RegisterForm";

export default function Register() {
  const context = useContext(AuthContext);
  const { currentPage, handleSubmit } = useContext(RegisterContext);

  const navigate = useNavigate();

  const onSubmit = (data: IRegisterFormState) => {
    addUser({
      variables: {
        registerInput: {
          ...data,
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
        {currentPage === 1 && <RoleSelect />}
        {currentPage === 2 && <RegisterForm />}
        {currentPage === 3 && <RegisterAvatar />}
      </motion.form>
      <PageNavigator steps={["Who are You?", "Info", "Avatar"]} />
    </>
  );
}
