import { useMutation, useQuery } from "@apollo/client";
import { useContext, useState } from "react";

import { AuthContext } from "../context/AuthContext";
import { GET_USER_QUERY, UPDATE_USER_MUTATION } from "../util/GraphQL";

function ProfileEditPage() {
  const { user } = useContext(AuthContext) as any;

  const { loading, data } = useQuery(GET_USER_QUERY, {
    variables: { id: user.id },
  });
  console.log(data?.getUser);
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [updateUser] = useMutation(UPDATE_USER_MUTATION);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser({
        variables: {
          id: user.id,
          ...formState,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>
      <ProfileEditForm user={data?.getUser} />
    </div>
  );
}

export default ProfileEditPage;

function ProfileEditForm({ user }) {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState(user.profilePicture);

  const [updateUser, { loading, error }] = useMutation(UPDATE_USER_MUTATION);

  const handleSubmit = (e) => {
    e.preventDefault();

    const input = {
      id: user.id,
      firstName,
      lastName,
      email,
      password,
      profilePicture,
    };

    updateUser({ variables: { userInput: input } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="profilePicture">Profile Picture:</label>
        <input
          type="text"
          id="profilePicture"
          value={profilePicture}
          onChange={(e) => setProfilePicture(e.target.value)}
        />
      </div>
      <button type="submit">Update Profile</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error updating profile.</p>}
    </form>
  );
}
