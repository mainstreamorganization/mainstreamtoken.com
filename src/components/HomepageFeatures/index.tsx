import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Community-Driven',
    Svg: require('@site/static/img/community_icon.svg').default,
    description: (
      <>
        MainstreamToken is built for and by the community, focusing on 
        accessibility and widespread adoption.
      </>
    ),
  },
  {
    title: 'AI-Powered',
    Svg: require('@site/static/img/ai_network.svg').default,
    description: (
      <>
        Leveraging advanced AI technology to provide innovative
        features and capabilities to our token ecosystem.
      </>
    ),
  },
  {
    title: 'Secure & Transparent',
    Svg: require('@site/static/img/secure_icon.svg').default,
    description: (
      <>
        Built on proven blockchain technology with full transparency
        and robust security measures to protect our community.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
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
        <Heading as="h2" style={{ color: 'var(--ifm-color-primary)', textAlign: 'center', marginBottom: '2rem' }}>
          How it Works
        </Heading>
        <p style={{ fontSize: '1.2rem', color: 'var(--ifm-font-color-base)', textAlign: 'center', marginBottom: '1rem' }}>
          The experimental MTL protocol defines specific rights and parameters for digital assets.
          Licenses are created using a parameter-based system, and token ownership verifies access.
          The system aims to provide a transparent verification system for digital rights,
          and facilitate revenue distribution to content creators.
        </p>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
          <a href="/app/encoder" target="_blank" rel="noopener noreferrer" className="button button--secondary">
            Generate License
          </a>
          <a href="/app/decoder" target="_blank" rel="noopener noreferrer" className="button button--secondary">
            Decode License
          </a>
          <a href="https://aidamis.com" target="_blank" rel="noopener noreferrer" className="button button--secondary">
            Talk to Aidamis
          </a>
        </div>
      </div>
    </section>
  );
}
