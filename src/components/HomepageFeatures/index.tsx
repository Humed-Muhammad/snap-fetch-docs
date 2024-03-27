import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/easy.svg").default,
    description: (
      <>
        Snap-Fetch was designed to be easily installed and used to get you up
        and running quickly. It is easy to configure and use as the same time.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/focus.svg").default,
    description: (
      <>
        Snap-Fetch lets you focus on your business logic by abstracting the data
        fetching and mutation logic, which let you focus on the main thing.
      </>
    ),
  },
  {
    title: "Powered by React, React-redux, and Redux-saga",
    Svg: require("@site/static/img/powered.svg").default,
    description: (
      <>
        Snap-Fetch fits with your existing react application and it can be
        adapted incrementally, no need to rush you can change your current data
        fetching logic slowly.
      </>
    ),
  },
  {
    title: "Light weight and tree shakable",
    Svg: require("@site/static/img/packege.svg").default,
    description: (
      <>
        Snap-Fetch is a light weight and tree shakable only include what you
        need, gzipped size for the hooks is 3.6kb, for both saga and reducers
        5.4kb
      </>
    ),
  },
  {
    title: "Injectable states",
    Svg: require("@site/static/img/duplicate.svg").default,
    description: (
      <>
        Snap-Fetch states are injected into store only when a query or mutation
        is established, state will be created with the endpoints used, which
        help preventing duplicate states.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
