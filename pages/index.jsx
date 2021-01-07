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
                trigger: '#recap',
                start: 'top 25%',
            },
        }).from('.recap', {
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
                    className='p-8 bg-gray-300 py-52 min-h-screen flex flex-col justify-center items-center'
                    style={{
                        backgroundImage: 'url("/img/bg-hero.jpg")',
                        backgroundSize: 'cover',
                    }}
                >
                    <main className='container'>
                        <img
                            className='hero mx-auto w-full max-w-lg'
                            src='/img/logo_hero.png'
                            alt='Logo Petrolida'
                        />
                        <h1 style={{ display: 'none' }}>
                            Petrolida ITS 2021, Petroleum Integrated Days
                        </h1>
                        <blockquote className='hero text-center my-2 lg:text-lg'>
                            Generating Efficient Utilization of Energy Supplies Through Advanced
                            Technology
                        </blockquote>
                        <div className='hero flex justify-center button-group'>
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
                            <Button href='/' outline>
                                Register Now
                            </Button>
                        </div>
                    </main>
                </section>

                <section id='petrolida' ref={petrol} className='overflow-hidden bg-primary py-24'>
                    <main className='container white-im'>
                        <div className='mb-16 flex flex-col md:flex-row justify-center items-center'>
                            <div className='left md:text-right'>
                                <h3 className='white-im my-4 md:translate-x-1/2'>
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
                                className='right mx-auto md:mx-0 max-h-44 md:max-h-64'
                                src='/img/what.png'
                                alt='illus'
                            />
                        </div>
                        <div className=' flex flex-col md:flex-row-reverse justify-center items-center'>
                            <div className='right md:ml-4 md:mr-auto'>
                                <h3 className='white-im my-4'>Petrolida's Goal</h3>
                                <p className='mb-4 md:max-w-md'>
                                    Petrolida 2021 aims to serve as a platform for university
                                    students to explore and disclose their innovation regarding
                                    today’s energy challenges through providing them a chance to
                                    achieve substantial and competitive experiences to advance their
                                    excellence.
                                </p>
                            </div>
                            <img
                                className='left mx-auto md:mr-0 md:ml-auto max-h-44 md:max-h-64'
                                src='/img/goals.png'
                                alt='illus'
                            />
                        </div>
                    </main>
                </section>

                <section id='non-competition' className='py-20 text-center'>
                    <main className='container'>
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

                <section id='recap' className='py-20 text-center'>
                    <main className='container'>
                        <h2 className='mb-8'>Our Last Recap</h2>
                        <figure className='recap md:mx-24'>
                            <div className='relative w-full h-auto overflow-hidden aspect'>
                                <iframe
                                    className='absolute top-0 left-0 right-0 bottom-0'
                                    width='100%'
                                    height='100%'
                                    title='Recap'
                                    src='https://www.youtube-nocookie.com/embed/SDeXDzWaFd8'
                                    frameBorder='0'
                                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </figure>
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
