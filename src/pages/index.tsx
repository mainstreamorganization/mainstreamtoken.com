import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import FooterWarning from '@site/src/components/FooterWarning';
import MainstreamDiagram from '@site/src/components/MainstreamDiagram';

import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();

    React.useEffect(() => {
        const canvas = document.getElementById('neural') as HTMLCanvasElement;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        function resize() {
            const container = canvas.parentElement;
            if (!container) return;
            canvas.width = container.offsetWidth;
            canvas.height = container.offsetHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        function getColorPalette() {
            const palettes = [
                { hue: Math.random() * 360, sat: 70, light: 60 },
                { hue: (Math.random() * 60 + 180), sat: 80, light: 50 },
                { hue: (Math.random() * 60 + 300), sat: 75, light: 55 },
                { hue: (Math.random() * 60), sat: 75, light: 55 },
            ];
            return palettes[Math.floor(Math.random() * palettes.length)];
        }

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;
            hue: number;
            sat: number;
            light: number;
            colorChangeSpeed: number;

            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 1.5;
                this.vy = (Math.random() - 0.5) * 1.5;
                this.radius = Math.random() * 1.5 + 0.5;
                const palette = getColorPalette();
                this.hue = palette.hue;
                this.sat = palette.sat;
                this.light = palette.light;
                this.colorChangeSpeed = Math.random() * 0.5 + 0.1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) {
                    this.vx *= -1;
                    const palette = getColorPalette();
                    this.hue = palette.hue;
                }
                if (this.y < 0 || this.y > canvas.height) {
                    this.vy *= -1;
                    const palette = getColorPalette();
                    this.hue = palette.hue;
                }

                this.hue += this.colorChangeSpeed;
                if (this.hue > 360) this.hue = 0;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${this.hue}, ${this.sat}%, ${this.light}%, 0.9)`;
                ctx.fill();
            }
        }

        const particles = Array.from({ length: 80 }, () => new Particle());

        function animate() {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();

                particles.forEach(other => {
                    if (particle === other) return;

                    const dx = particle.x - other.x;
                    const dy = particle.y - other.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(other.x, other.y);

                        const opacity = 1 - (distance / 100);
                        const avgHue = (particle.hue + other.hue) / 2;
                        
                        ctx.strokeStyle = `hsla(${avgHue}, 85%, 60%, ${opacity * 0.4})`;
                        ctx.lineWidth = 1.0;
                        ctx.stroke();

                        const pulseSize = Math.sin(Date.now() * 0.004) * 2 + 3;
                        ctx.beginPath();
                        ctx.arc(
                            (particle.x + other.x) / 2,
                            (particle.y + other.y) / 2,
                            pulseSize,
                            0,
                            Math.PI * 2
                        );
                        ctx.fillStyle = `hsla(${avgHue}, 85%, 60%, ${opacity * 0.3})`;
                        ctx.fill();
                    }
                });
            });

            requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <canvas id="neural" className={styles.headerCanvas} />
            <div className={`container ${styles.heroContainer} ${styles.heroContent}`}>
                <div style={{textAlign: 'left', maxWidth: '90%', paddingRight: '1rem'}}>
                    <Heading as="h1" className="hero__title" style={{ fontSize: '1.96rem', fontWeight: 'bold', color: 'var(--ifm-color-primary)',  }}>
                        {siteConfig.title}
                    </Heading>
                    <p className="hero__subtitle" style={{ fontSize: '1.5rem', color: 'var(--ifm-font-color-base)' }}>
                        {siteConfig.tagline}
                    </p>
                    <p style={{ fontSize: '1.2rem', color: 'var(--ifm-font-color-base)' }}>
                        An experimental protocol for digital content licensing with token holdings.
                        This system gives alternative options for content creators to define a parametric licensing framework*.
                    </p>
                    <div className={styles.buttons}>
                        <Link
                            className="button button--lg button--primary"
                            to="https://t.me/mainstreamtoken"
                        >
                            Join the Community 🚀
                        </Link>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                    <div className={styles.videoContainer}>
                        <a 
                            href="https://www.youtube.com/watch?v=KF2wXUxxIhQ" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <img
                                src="/img/youtube-icon.png"
                                alt="Watch on YouTube"
                                style={{ width: '100px', height: 'auto', cursor: 'pointer' }}
                            />
                            <div className={styles.videoTitle}>
                                "The Cryptic Hodler's Guide to Mainstream Token"
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

function WhatIsMainstreamToken() {
    return (
        <section className={`${styles.section} ${styles.withBorder}`}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <img 
                        src="/mainstreamtoken.com/img/mainstreamtoken.webp" 
                        alt="Mainstream Token" 
                        style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
                    />
                </div>
                <Heading as="h2" style={{ color: 'var(--ifm-color-primary)', textAlign: 'center', marginBottom: '2rem' }}>
		CA : <span 
          style={{cursor: 'pointer', textDecoration: 'underline'}}
          onClick={() => {
            navigator.clipboard.writeText('HT9C48yRmS2kiUYJfLcDX7JidtcKBupe3DE2GDyQr3i3');
            alert('Contract address copied to clipboard!');
          }}
        >
          HT9C48yRmS2kiUYJfLcDX7JidtcKBupe3DE2GDyQr3i3
        </span>
                </Heading>
                <Heading as="h2" style={{ color: 'var(--ifm-color-primary)', textAlign: 'center', marginBottom: '2rem' }}>
                    What is Mainstream Token?
		   
                </Heading>
                <p style={{ fontSize: '1.2rem', color: 'var(--ifm-font-color-base)', textAlign: 'center' }}>
                    Mainstream Token ($MAIN) is an experimental digital asset on the Solana blockchain, designed to provide a
                    unique blend of AI guided community-focused development.
                    It utilizes the experimental Mainstream Token License (MTL) protocol to enable decentralized digital
                    rights management. 
                </p>
            </div>
        </section>
    );
}

function WhyMainstream() {
    return (
        <section className={`${styles.section} ${styles.withBorder}`}>
            <div className="container">
                <Heading as="h2" style={{ color: 'var(--ifm-color-primary)', textAlign: 'center', marginBottom: '2rem' }}>
                    Why "Mainstream"?
                </Heading>
                <MainstreamDiagram />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                    <div style={{ textAlign: 'center', flex: '1 1 200px' }}>
                        <h3>MAN</h3>
                        <p>Human Intelligence</p>
                    </div>
                    <div style={{ textAlign: 'center', flex: '1 1 200px' }}>
                        <h3>+</h3>
                    </div>
                    <div style={{ textAlign: 'center', flex: '1 1 200px' }}>
                        <h3>AI</h3>
                        <p>Artificial Intelligence</p>
                    </div>
                    <div style={{ textAlign: 'center', flex: '1 1 200px' }}>
                        <h3>=</h3>
                    </div>
                    <div style={{ textAlign: 'center', flex: '1 1 200px' }}>
                        <h3>MAIN</h3>
                        <p>Combined Intelligence</p>
                    </div>
                </div>
                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <p style={{ fontSize: '1.2rem', color: 'var(--ifm-font-color-base)' }}>
                        The "STREAM" in Mainstream represents the continuous flow of intelligence and innovation 
                        between human and artificial intelligence, creating a powerful synergy that drives our ecosystem forward.
                    </p>
                </div>
            </div>
        </section>
    );
}


function Tokenomics() {
    return (
        <section className={`${styles.section} ${styles.withBorder}`} style={{ borderTop: '1px solid #eee', marginTop: '2rem' }}>
            <div className="container">
                <Heading as="h2" style={{ color: 'var(--ifm-color-primary)', textAlign: 'center', marginBottom: '2rem', paddingTop: '2rem' }}>
                    MT Tokenomics
                </Heading>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
                    <div style={{ flex: '1 1 300px', textAlign: 'center', padding: '1rem' }}>
                        <h3>Total Supply</h3>
                        <p style={{ fontSize: '2rem', color: 'var(--ifm-color-primary)' }}>1,000,000,000</p>
                        <p>Fixed supply of one billion $MAIN tokens</p>
                    </div>
                    <div style={{ flex: '1 1 300px', textAlign: 'center', padding: '1rem' }}>
                        <h3>Distribution</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li>Available for Initial Purchase: 60%</li>
                            <li>Internal Use Vested For 1 Year: 20%</li>
                            <li>Internal Use Immediately: 10%</li>
                            <li>Team: 10%</li>
                        </ul>
                    </div>
                    <div style={{ flex: '1 1 300px', textAlign: 'center', padding: '1rem' }}>
                        <h3>Features</h3>
                        <p>Experimental Utility with experimental MTL License & Protocol</p>
                        <p>Community Participation</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Description will go into a meta tag in <head />"
        >
            <HomepageHeader />
            <main>
                <WhatIsMainstreamToken />
                <WhyMainstream />
                <HomepageFeatures />
                <Tokenomics />
            </main>
            <FooterWarning />
        </Layout>
    );
}
