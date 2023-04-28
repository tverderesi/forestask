import { FaLeaf } from "react-icons/fa";
import { AiOutlineFileText } from "react-icons/ai";
import { MdPeople } from "react-icons/md";
import { GiPlantSeed } from "react-icons/gi";

export const Features = () => {
  return (
    <>
      {/* Features for Students */}
      <section className="bg-green-400 py-8">
        <h1 className="text-3xl font-bold text-center mb-4">Florestarefa</h1>
        <p className="text-xl text-center">
          Florestarefa is a student-friendly progressive web application (PWA)
          with gamified elements that doubles as a learning management system
          (LMS) for school staff. The goal of the project is to provide a fun
          and engaging learning experience for students, while also providing a
          comprehensive and organized platform for teachers to manage their
          classes and assignments.
        </p>
      </section>

      <section className="py-8 px-4 md:px-0 ">
        <h2 className="text-2xl font-bold mb-4">Features for Students</h2>
        <ul className="space-y-4">
          <li className="flex space-x-4 items-center">
            <FaLeaf className="w-6 h-6 text-green-500" />
            <span>
              Grow your own forest from nothing! Plant seeds and watch them grow
              into trees, flowers and more as you complete your assignments.
            </span>
          </li>
          <li className="flex space-x-4 items-center">
            <AiOutlineFileText className="w-6 h-6 text-green-500" />
            <span>
              Keep track of your assignments and deadlines in one place.
            </span>
          </li>
          <li className="flex space-x-4 items-center">
            <GiPlantSeed className="w-6 h-6 text-green-500" />
            <span>
              Earn extra LeafyCoins by completing assignments early, which you
              can trade for items such as fertilizers, decoration items, and
              even a barn!
            </span>
          </li>
        </ul>
      </section>

      {/* Features for Teachers */}
      <section className="py-8 px-4 md:px-0 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Features for Teachers</h2>
        <ul className="space-y-4">
          <li className="flex space-x-4 items-center">
            <MdPeople className="w-6 h-6 text-green-500" />
            <span>
              Keep track of student attendance easily with the Attendance
              feature. Reward students who maintain high attendance with extra
              LeafyCoins!
            </span>
          </li>
          <li className="flex space-x-4 items-center">
            <FaLeaf className="w-6 h-6 text-green-500" />
            <span>
              Monitor your students' progress with data-driven insights into
              their study habits and productivity.
            </span>
          </li>
        </ul>
      </section>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
        <p className="text-lg font-medium mb-4">
          Florestarefa is built using the MERN (MongoDB, Express, React,
          Node.js) stack and GraphQL for data requests. Here are some of the
          technologies used in the project:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            MongoDB: document-oriented NoSQL database used to store and retrieve
            data.
          </li>
          <li>
            Express: lightweight web application framework used to handle HTTP
            requests and responses.
          </li>
          <li>React: JavaScript library used to build user interfaces.</li>
          <li>
            Node.js: server-side JavaScript runtime environment used to execute
            JavaScript code outside of a web browser.
          </li>
          <li>
            GraphQL: query language for APIs used to retrieve data from the
            server.
          </li>
          <li>
            Apollo Server and Client: GraphQL implementation used to build the
            server and client sides of the application.
          </li>
          <li>
            Vercel: cloud platform used to deploy and host the application.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Features;
