import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import Seo from '../../components/Seo';
import gsap, { Power3 } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import Footer from '../../components/Footer';
import FunctionalButton from '../../components/FunctionalButton';
import { petrotalk as data } from '../../store/data';
gsap.registerPlugin(ScrollTrigger);

export default function NonCompetition() {
    const [category, setCategory] = useState(0);
    const about = useRef(null);

    useEffect(() => {
        gsap.to('.hero', { css: { visibility: 'visible' } });
        gsap.to('#about', { css: { visibility: 'visible' } });

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
                trigger: '#about',
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
                trigger: '#tabs',
                start: 'top 50%',
            },
        }).from(
            '.tabs',
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
                trigger: '#register',
                start: 'top 50%',
            },
        })
            .from('.register-left', {
                opacity: 0,
                duration: 1.5,
                x: -75,
                ease: Power3.easeOut,
            })
            .from(
                '.register-right',
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
                trigger: '#cp',
                start: 'top 50%',
            },
        }).from('.cp-card', {
            opacity: 0,
            y: 50,
            stagger: 0.1,
            ease: Power3.easeOut,
        });
    }, []);

    useEffect(() => {
        gsap.timeline().from('.tab-content', {
            y: 20,
            duration: 0.5,
            ease: Power3.easeOut,
        });
    }, [category]);

    const seoData = {
        pageTitle: `${data.title} | Petrolida 2021`,
        img: data.img,
    };

    return (
        <>
            <Seo seoData={seoData}>
                <title>{seoData.pageTitle}</title>
            </Seo>
            <Navbar />
            <div>
                {/* Hero Section */}
                <section
                    className='flex items-center min-h-screen bg-gray-300'
                    style={{
                        backgroundImage: `url("/img/bg-${data.img}.jpg")`,
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover',
                    }}
                >
                    <main className='container'>
                        <div className='flex flex-col-reverse items-center justify-center mb-16 md:mb-0 md:flex-row'>
                            <div className='w-full text-white md:ml-12 md:text-left'>
                                <h1 className='my-2 text-white hero'>{data.title}</h1>
                                <div className='flex items-center mt-4 mb-6 space-x-4 hero'>
                                    <h2 className='hero'>With</h2>
                                    <img
                                        className='w-32 hero lg:w-48'
                                        src={`/img/petrotalk-sponsor-cimbw.png`}
                                        alt='cimb-logo'
                                    />
                                </div>
                                <h4 className='my-2 hero'>
                                    March 13<sup>th</sup> - 14<sup>th</sup>, 2021
                                </h4>
                                <blockquote className='mb-4 hero md:max-w-md'>
                                    {data.theme}
                                </blockquote>
                                <div className='items-center space-x-4 hero'>
                                    <Button
                                        href='#'
                                        onClick={(e) => {
                                            e.preventDefault();
                                            about?.current.scrollIntoView({
                                                behavior: 'smooth',
                                            });
                                        }}
                                        outline
                                    >
                                        Learn More
                                    </Button>
                                    {/* <button className='items-center justify-center p-2 text-center bg-white rounded-full md:p-3 text-primary hover:bg-hover'>
                                        <svg
                                            className='w-3 h-3 text-primary'
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 20 20'
                                            fill='currentColor'
                                        >
                                            <path
                                                fillRule='evenodd'
                                                d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
                                                clipRule='evenodd'
                                            />
                                        </svg>
                                    </button> */}
                                </div>
                            </div>
                            <img
                                className='mx-auto hero md:mx-0'
                                src={`/img/logo-${data.img}.png`}
                                alt='Illustrasi'
                            />
                        </div>
                    </main>
                </section>
                {/* End of Hero Section */}

                {/* About Section */}
                <section
                    id='about'
                    ref={about}
                    className='py-24 overflow-hidden text-white bg-primary'
                >
                    <main className='container space-y-8'>
                        <h2 className='text-center text-white'>About The Event</h2>
                        <div className='flex flex-col-reverse items-center justify-center md:flex-row md:transform md:translate-x-11'>
                            <div className='left md:text-left'>
                                <p className='md:max-w-lg '>{data.desc}</p>
                            </div>
                            <img
                                className='mx-auto mb-8 md:mb-0 right md:mx-0 max-h-44 md:max-h-64'
                                src='/img/what.png'
                                alt='illus'
                            />
                        </div>
                    </main>
                </section>
                {/* End of About Section */}

                {/* Tabs Section */}
                <section id='tabs' className='py-24 overflow-hidden text-primary'>
                    <main className='container space-y-8'>
                        <h2 className='text-center tabs'>What's On Petrolida Talks</h2>
                        <div className='grid max-w-5xl grid-cols-2 gap-4 mx-auto md:grid-cols-4 tabs'>
                            {data.categories.map((catg, index) => (
                                <FunctionalButton
                                    key={catg.ctg}
                                    onClick={() => {
                                        setCategory(index);
                                    }}
                                    outline={category !== index}
                                >
                                    {catg.ctg}
                                </FunctionalButton>
                            ))}
                        </div>

                        <hr className='border-t-2 border-opacity-50 border-primary tabs' />

                        <main className='max-w-4xl py-12 mx-auto space-y-2 tabs tab-content'>
                            <h4 className='blockquote-title'>{data.categories[category].title}</h4>
                            {/* date hanya tanggalnya saja 13/14 */}
                            <h5>
                                March {data.categories[category].date}
                                <sup>th</sup>, 2021
                            </h5>
                            <p>{data.categories[category].excerpt}</p>

                            <div
                                className={`grid justify-center gap-2 pt-12 ${
                                    data.categories[category].speakers.length === 2
                                        ? 'md:grid-cols-2'
                                        : 'md:grid-cols-3'
                                } `}
                            >
                                {data.categories[category].speakers.map((speaker, index) => (
                                    <figure className='mx-auto space-y-2 speaker-img' key={index}>
                                        <img
                                            className='rounded-full '
                                            src={`/img/petrotalk-speakers/${speaker.pic}`}
                                            alt={`Photo of ${speaker.name}`}
                                        />
                                        <figcaption className='text-center'>
                                            <p className='text-2xl font-medium'>{speaker.name}</p>
                                            <p>{speaker.title}</p>
                                        </figcaption>
                                    </figure>
                                ))}
                            </div>
                        </main>
                    </main>
                </section>
                {/* End of Tabs Section */}

                {/* Register Section */}
                <section
                    id='register'
                    className='flex flex-col items-center justify-center p-8 py-24 overflow-hidden bg-gray-300'
                    style={{
                        backgroundImage: 'url("/img/bg-hero.jpg")',
                        backgroundSize: 'cover',
                    }}
                >
                    <main className='container'>
                        <h2 className='mb-4 text-center register-left text-primary md:mb-8 md:translate-x-1/2'>
                            So, what are you waiting for?
                        </h2>
                        <div className='flex justify-center register-right button-group'>
                            <Button href={`/register/petrolida-talks`} outline>
                                Register Now
                            </Button>
                        </div>
                    </main>
                </section>
                {/* End of Register Section */}

                {/* CP  Section */}
                <section id='cp' className='py-32'>
                    <main className='container space-y-8'>
                        <h2 className='text-center text-primary'>Contact Person</h2>
                        <div className='flex items-center justify-center'>
                            <div
                                className='p-8 rounded-md shadow-md cp-card'
                                style={{
                                    backgroundImage: 'url("/img/bg-hero.jpg")',
                                    backgroundSize: 'cover',
                                }}
                            >
                                <h3 className='text-lg'>{data.cpname1}</h3>
                                <p className='text-md'>{data.cptitle1}</p>
                                <p className='text-md'>Phone Number : {data.cpphone1}</p>
                                <p className='text-md'>Line ID : {data.cpline1}</p>
                                <p className='text-md'>Email : {data.cpemail1}</p>
                            </div>
                        </div>
                    </main>
                </section>
                {/* CP Section */}

                <Footer />
                <style jsx>{`
                    .aspect {
                        padding-top: 56.25%;
                    }

                    .hero,
                    #about {
                        visibility: hidden;
                    }

                    .blockquote-title {
                        border-style: solid;
                        border-width: 0 0 0 1.25rem;
                        border-image: linear-gradient(
                                180deg,
                                #888abc 0%,
                                #68c59f 49.48%,
                                #c4df9b 100%
                            )
                            1;
                        padding-left: 1em;
                    }

                    .speaker-img {
                        max-width: 15rem;
                    }
                `}</style>
            </div>
        </>
    );
}
