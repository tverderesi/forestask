import { Server } from "atoms/svgs/Server";

export function TechStack() {
  return (
    <section
      className=" bg-slate-100 pt-24 pb-12 snap-center snap-always h-screen w-screen flex flex-col lg:flex-row items-center lg:justify-around"
      id="tech_stack"
    >
      <div className="w-full h-2/5 lg:w-2/5 lg:h-4/5 m-auto lg:m-0">
        <Server />
      </div>
      <article className="w-full lg:w-3/5 h-full px-8 lg:p-16 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
        <p className="text-lg font-medium mb-4">
          Florestarefa is built using the MERN (MongoDB, Express, React,
          Node.js) stack and GraphQL for data requests. Here are some of the
          technologies used in the project:
        </p>
        <ul className="list-disc list-inside mb-4 flex-col">
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
      </article>
    </section>
  );
}
