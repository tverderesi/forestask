import { FeatureList } from "../molecules/FeatureList";

export function Features({
  id,
  drawing,
  title,
  featuresList,
  accentColor,
}: {
  id: string;
  drawing: any;
  title: string;
  featuresList: any;
  accentColor: string;
}) {
  const { features, paragraph } = featuresList;
  return (
    <>
      <section
        className=" bg-base carousel-item relative bottom-16 flex h-[calc(100vh-4rem)] w-screen flex-col items-center justify-around pt-16 lg:flex-row lg:justify-around"
        id={id}
      >
        <div className="m-0 h-2/5 lg:h-3/5">{drawing}</div>
        <article className="relative left-5 flex w-full flex-col items-center justify-center dark:text-slate-100 lg:h-auto lg:w-2/5">
          <h2 className="relative -left-5 w-full text-center text-xl font-bold lg:left-0 lg:text-left lg:text-xl">
            {title}
          </h2>
          <p className="mb-4 text-lg font-medium">{paragraph}</p>
          <ul className="w-full space-y-4 lg:h-full">
            {features.map((feature, index) => (
              <FeatureList
                key={index}
                icon={feature.icon}
                description={feature.description}
                accentColor={accentColor}
              />
            ))}
          </ul>
        </article>
      </section>
    </>
  );
}
