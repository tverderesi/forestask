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
        className=" bg-slate-100 pt-16 carousel-item h-[calc(100vh-4rem)] w-screen flex flex-col lg:flex-row items-center lg:justify-around relative bottom-16"
        id={id}
      >
        <div className="h-2/5 lg:h-3/5 m-0">{drawing}</div>
        <article className="w-full lg:w-2/5 lg:h-auto flex flex-col items-center justify-center">
          <h1 className="w-full text-2xl lg:text-3xl font-bold text-left">
            {title}
          </h1>
          <p className="text-lg font-medium mb-4">{paragraph}</p>
          <ul className="space-y-4 lg:text-xl lg:h-full w-full">
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
