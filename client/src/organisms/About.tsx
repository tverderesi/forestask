import { Journey } from "../atoms/svgs";

export function About() {
  return (
    <section
      className="bg-base carousel-item flex h-screen w-screen flex-col items-center pt-16 dark:text-slate-100 lg:flex-row lg:justify-around"
      id="about"
    >
      <div className="m-0 h-2/5 lg:h-3/5">
        <Journey />
      </div>
      <div className="flex w-full flex-col items-center justify-center px-8 lg:h-3/5 lg:w-2/5 lg:p-16">
        <h1 className="mb-4 w-full text-center text-2xl font-bold lg:text-left lg:text-3xl">
          About Florestarefa
        </h1>
        <p className="w-full text-center leading-relaxed lg:text-left lg:text-xl">
          <strong>Florestarefa</strong> is a student-friendly progressive web
          application (PWA) with gamified elements that doubles as a learning
          management system (LMS) for school staff. The goal of the project is
          to provide a fun and engaging learning experience for students, while
          also providing a comprehensive and organized platform for teachers to
          manage their classes and assignments.
        </p>
      </div>
    </section>
  );
}
