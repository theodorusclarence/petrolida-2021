import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import { noncomps } from '../../store/data';
import Seo from '../../components/Seo';
import gsap, { Power3 } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

export default function NonCompetition({ noncomp }) {
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
    }, []);

    const seoData = {
        pageTitle: `${noncomp.title} | Petrolida 2021`,
        img: noncomp.img,
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
                    className='bg-gray-300 flex items-center min-h-screen'
                    style={{
                        backgroundImage: `url("/img/bg-${noncomp.img}.jpg")`,
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover',
                    }}
                >
                    <main className='container'>
                        <div className='mb-16 md:mb-0 flex flex-col-reverse md:flex-row justify-center items-center'>
                            <div className='w-full md:ml-12 md:text-left text-white'>
                                <h1 className='hero my-4 text-white'>{noncomp.title}</h1>
                                <blockquote className='hero mb-4 md:max-w-md'>
                                    {noncomp.theme}
                                </blockquote>
                                <div className='hero items-center space-x-4'>
                                    <Button href='/' outline>
                                        Guidebook
                                    </Button>
                                    <button className='p-2 md:p-3 justify-center items-center text-center text-primary bg-white rounded-full hover:bg-hover'>
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
                                    </button>
                                </div>
                            </div>
                            <img
                                className='hero mx-auto md:mx-0'
                                src={`/img/logo-${noncomp.img}.png`}
                                alt='Illustrasi'
                            />
                        </div>
                    </main>
                </section>
                {/* End of Hero Section */}

                {/* About Section */}
                <section id='about' className='py-24 text-primary overflow-hidden'>
                    <main className='container space-y-8'>
                        <h2 className='text-center text-primary'>About The Event</h2>
                        <div className='flex flex-col-reverse md:flex-row justify-center items-center md:transform md:translate-x-12'>
                            <div className='left md:text-left'>
                                <p className='md:max-w-md '>{noncomp.desc}</p>
                            </div>
                            <img
                                className='mb-8 md:mb-0  right mx-auto md:mx-0 max-h-44 md:max-h-64'
                                src='/img/what.png'
                                alt='illus'
                            />
                        </div>
                    </main>
                </section>
                {/* End of About Section */}
                <style jsx>{`
                    .aspect {
                        padding-top: 56.25%;
                    }

                    .hero,
                    #about {
                        visibility: hidden;
                    }
                `}</style>
            </div>
        </>
    );
}

export async function getStaticProps({ params }) {
    const noncomp = noncomps.find((noncomp) => noncomp.route === params.name);

    return {
        props: { noncomp },
    };
}

export async function getStaticPaths() {
    // Get the paths we want to pre-render based on posts
    const paths = noncomps.map((noncomp) => ({
        params: { name: noncomp.route },
    }));

    // fallback false means that all the other route will be blocked
    return { paths, fallback: false };
}
