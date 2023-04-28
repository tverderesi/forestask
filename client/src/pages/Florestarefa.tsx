import SlideInView from "./SlideInView";

const Florestarefa = () => {
  return (
    <>
      <SlideInView>
        <h1 className="text-2xl font-bold mb-4">Introduction</h1>

        <p className="mb-6">
          Florestarefa is the result of my passion for gaming, education, and
          storytelling. As a gaming enthusiast and a researcher in storytelling,
          I was always disappointed by the lack of truly gamified experiences,
          especially when it came to educational games. During my
          specialization, I witnessed my colleagues create reskinned PowerPoint
          presentations instead of real games that could engage and educate.
          This dissatisfaction drove me to create Florestarefa, a combination of
          a to-do list and a learning management system that is both fun and
          educational.
        </p>
      </SlideInView>
      <SlideInView>
        <h2 className="text-lg font-bold mb-2">What is Florestarefa?</h2>
        <p className="mb-6">
          Florestarefa is a friendly app that helps students keep track of their
          assignments, tests, and other tasks related to their learning process.
          It also serves as a streamlined place for staff to manage tasks and
          track student learning and development.
        </p>
        <p className="mb-6">
          To avoid falling into the Toolbox Fallacy, where people waste time
          looking for the right tool instead of using the available ones, I
          decided to build a to-do list. However, I didn't want it to be a
          boring list of tasks. Drawing inspiration from open-ended games like
          Stardew Valley, Sims, and Animal Crossing, I wanted to create a sense
          of attachment and storytelling in Florestarefa that would keep users
          engaged and invested in their progress. By tracking the growth of
          their own virtual forest, users can work on the affective domain of
          learning and develop a deeper attachment to their learning process.
        </p>
      </SlideInView>
      <SlideInView>
        <h2 className="text-lg font-bold mb-2">Development History</h2>
        <p className="mb-6">
          Florestarefa was initially created by my group at StartSe Tech
          Academy's Hackathon, a bootcamp course that I attended from May to
          August 2022. Using basic HTML, CSS, and JavaScript, we built a
          front-end proof-of-concept with the help of Bootstrap and JQuery
          libraries to speed up coding during the five-day event. Our team
          ranked fourth place in the Hackathon.
        </p>
      </SlideInView>
    </>
  );
};

export default Florestarefa;
