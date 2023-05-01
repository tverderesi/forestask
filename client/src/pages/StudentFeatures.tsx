import { FaLeaf } from "react-icons/fa";
import { AiOutlineFileText } from "react-icons/ai";
import { MdPeople } from "react-icons/md";
import { GiPlantSeed } from "react-icons/gi";
import { About } from "./About";
import Gardener from "../atoms/Gardener";

export const StudentFeatures = () => {
  return (
    <>
      <About />
      <section
        className=" bg-slate-100 pt-24 pb-12 snap-center snap-always h-screen w-screen flex flex-col lg:flex-row items-center lg:justify-around"
        id="student_features"
      >
        <div className="relative bottom-10 w-full h-2/5 lg:w-2/5 lg:h-4/5 m-auto lg:m-0">
          <Gardener />
        </div>
        <article className="w-full lg:w-2/5 px-8 lg:p-16 flex flex-col items-center justify-center">
          <h1 className="relative lg:left-4 w-full text-2xl lg:text-3xl font-bold text-center lg:text-left mb-4">
            Features for Students
          </h1>
          <ul className="space-y-4 lg:text-xl">
            <li className="flex space-x-4 flex-row items-start">
              <FaLeaf className="w-12 text-magenta-dye-600 relative top-1 right-1" />
              Grow your own forest from nothing! Plant seeds and watch them grow
              into trees, flowers and more as you complete your assignments.
            </li>
            <li className="flex space-x-4 items-start">
              <AiOutlineFileText className="w-6 text-magenta-dye-600 relative top-1 right-1" />
              Keep track of your assignments and deadlines in one place.
            </li>
            <li className="flex space-x-4 items-start">
              <GiPlantSeed className="w-12 text-magenta-dye-600 relative top-1 right-1" />
              Earn extra LeafyCoins by completing assignments early, which you
              can trade for items such as fertilizers, decoration items, and
              even a barn!
            </li>
          </ul>
        </article>
      </section>

      {/* Features for Teachers */}
      <section className="bg-gray-100 py-8 px-4 md:px-0 snap-center snap-always">
        <h2 className="text-2xl font-bold mb-4">Features for Teachers</h2>
        <ul className="space-y-4">
          <li className="flex items-center space-x-4">
            <MdPeople className="w-6 h-6 text-green-500" />
            <span>
              Keep track of student attendance easily with the Attendance
              feature. Reward students who maintain high attendance with extra
              LeafyCoins!
            </span>
          </li>
          <li className="flex items-center space-x-4">
            <FaLeaf className="w-6 h-6 text-green-500" />
            <span>
              Monitor your students' progress with data-driven insights into
              their study habits and productivity.
            </span>
          </li>
        </ul>
      </section>

      <div className="bg-white shadow-lg rounded-lg p-6 snap-center snap-always">
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
