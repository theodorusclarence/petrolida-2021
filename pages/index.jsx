import { useEffect, useRef } from 'react';
import Button from '../components/Button';
import Comps from '../components/Comps';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NonComps from '../components/NonComps';
import Seo from '../components/Seo';
import gsap, { Power3 } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const petrol = useRef(null);
    const comp = useRef(null);
    useEffect(() => {
        gsap.to('.hero', { css: { visibility: 'visible' } });
        gsap.to('#petrolida', { css: { visibility: 'visible' } });
        gsap.timeline().from(
            '.hero',
            {
                opacity: 0,
                y: 50,
                stagger: 0.1,
                ease: Power3.easeOut,
            },
            '+=0.5'
        );

        gsap.timeline({
            scrollTrigger: {
                trigger: '#petrolida',
                start: 'top 50%',
            },
        })
            .from('.left', {
                opacity: 0,
                duration: 1.5,
                x: -75,
                ease: Power3.easeOut,
            })
            .from(
                '.right',
                {
                    opacity: 0,
                    x: 75,
                    duration: 1.5,
                    ease: Power3.easeOut,
                },
                '-=1.5'
            );

        gsap.timeline({
            scrollTrigger: {
                trigger: '#sponsors',
                start: 'top 25%',
            },
        }).from('.sponsors', {
            opacity: 0,
            duration: 1,
            y: 100,
            ease: Power3.easeOut,
        });
    }, []);
    return (
        <>
            <Seo>
                <title>Petrolida 2021</title>
            </Seo>
            <Navbar comp={comp} />
            <div>
                <section
                    id='hero'
                    className='flex flex-col items-center justify-center min-h-screen p-8 bg-gray-300 py-52'
                    style={{
                        backgroundImage: 'url("/img/bg-hero.jpg")',
                        backgroundSize: 'cover',
                    }}
                >
                    <main className='container'>
                        <img
                            className='w-full max-w-lg mx-auto hero'
                            src='/img/logo_hero.png'
                            alt='Logo Petrolida'
                        />
                        <h1 style={{ display: 'none' }}>
                            Petrolida ITS 2021, Petroleum Integrated Days
                        </h1>
                        <blockquote className='my-2 text-center hero lg:text-lg'>
                            Generating Efficient Utilization of Energy Supplies Through Advanced
                            Technology
                        </blockquote>
                        <div className='flex justify-center hero button-group'>
                            <Button
                                href='#'
                                onClick={(e) => {
                                    e.preventDefault();
                                    petrol?.current.scrollIntoView({
                                        behavior: 'smooth',
                                    });

                                    // window.scrollTo({
                                    //     top: window.innerHeight,
                                    //     behavior: 'smooth',
                                    // });
                                }}
                            >
                                Learn More
                            </Button>
                            <Button href='/register' outline>
                                Register Now
                            </Button>
                        </div>
                        <div className='justify-center mx-auto mt-4 space-y-4 text-center md:space-x-4 md:flex md:space-y-0 hero'>
                            {/* <Button outline href='/register/stock-market-education'>
                                Register Stock Market Education
                            </Button> */}
                            {/* <Button href='/voting/oil-rig-design-competition'>Vote for ORDC</Button> */}
                        </div>
                    </main>
                </section>

                <section id='petrolida' ref={petrol} className='py-24 overflow-hidden bg-primary'>
                    <main className='container white-im'>
                        <div className='flex flex-col items-center justify-center mb-16 md:flex-row'>
                            <div className='left md:text-right'>
                                <h3 className='my-4 white-im md:translate-x-1/2'>
                                    What Is Petrolida
                                </h3>
                                <p className='mb-4 md:ml-auto md:max-w-md'>
                                    Petroleum Integrated Days (Petrolida) is the biggest annual
                                    event held by SPE ITS Student Chapter. This year’s series will
                                    be the 9th annual event. Petroleum Integrated Days mainly
                                    focuses onseveral competitions in the energy sector but also
                                    provides non-competition events.
                                </p>
                            </div>
                            <img
                                className='mx-auto right md:mx-0 max-h-44 md:max-h-64'
                                src='/img/what.png'
                                alt='illus'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center md:flex-row-reverse'>
                            <div className='right md:ml-4 md:mr-auto'>
                                <h3 className='my-4 white-im'>Petrolida's Goal</h3>
                                <p className='mb-4 md:max-w-md'>
                                    Petrolida 2021 aims to serve as a platform for university
                                    students to explore and disclose their innovation regarding
                                    today’s energy challenges through providing them a chance to
                                    achieve substantial and competitive experiences to advance their
                                    excellence.
                                </p>
                            </div>
                            <img
                                className='mx-auto left md:mr-0 md:ml-auto max-h-44 md:max-h-64'
                                src='/img/goals.png'
                                alt='illus'
                            />
                        </div>
                    </main>
                </section>

                <section id='non-competition' className='py-20 text-center'>
                    <main className='container text-primary'>
                        <h2 className='mb-8'>Non-Competition Events</h2>
                        <NonComps />
                    </main>
                </section>

                <section
                    id='competition'
                    ref={comp}
                    className='py-20 text-center'
                    style={{
                        backgroundImage: 'url("/img/bg-comp.jpg")',
                        backgroundSize: 'cover',
                    }}
                >
                    <main className='container'>
                        <h2 className='mb-8 text-white'>Competition Events</h2>
                        <Comps />
                    </main>
                </section>

                <section id='sponsors' className='py-20 text-center'>
                    <main className='container text-primary'>
                        <h2 className='mb-12 sponsors'>Sponsors & Supporting Partners</h2>
                        <img className='sponsors' src='/img/sponsors.jpg' alt='Sponsors' />
                    </main>
                </section>

                <style jsx>{`
                    .aspect {
                        padding-top: 56.25%;
                    }

                    .hero,
                    #petrolida {
                        visibility: hidden;
                    }

                    .white-im {
                        color: white;
                    }
                `}</style>
            </div>
            <Footer />
        </>
    );
}
