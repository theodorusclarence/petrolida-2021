import Navbar from '../../components/Navbar';
import { useEffect } from 'react';
import Seo from '../../components/Seo';
import Footer from '../../components/Footer';
import { regis } from '../../store/data';
import gsap, { Power3 } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Register({ reg }) {
    useEffect(() => {
        gsap.to('.hero', { css: { visibility: 'visible' } });

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
    }, []);

    const seoData = {
        pageTitle: `${reg.title} | Petrolida 2021`,
        img: reg.img,
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
                    className='flex items-center bg-gray-300'
                    style={{
                        backgroundImage: `url("/img/bg-${reg.img}.jpg")`,
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover',
                        minHeight: '40vh',
                    }}
                >
                    <main className='container'>
                        <div className='flex flex-col-reverse items-center justify-center mb-16 md:mb-0 md:flex-row'>
                            <div
                                className={`w-full md:ml-12 md:text-left ${
                                    reg.white ? 'text-white' : 'text-primary'
                                }`}
                            >
                                <h1 className='my-4 hero '>{reg.title}</h1>
                                <blockquote className='mb-4 hero'>{reg.quote}</blockquote>
                                {/* <div className='items-center space-x-4 hero'>
                                    <Button href='/'>Guidebook</Button>
                                    <button className='items-center justify-center p-2 text-center rounded-full md:p-3 text-primary bg-primary hover:bg-hover'>
                                        <svg
                                            className='w-3 h-3 text-white'
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
                                </div> */}
                            </div>
                            <img
                                className='mx-auto hero md:mx-0 max-h-44 md:max-h-64'
                                src={`/img/logo-${reg.img}.png`}
                                alt='Illustrasi'
                            />
                        </div>
                    </main>
                    <style jsx>{`
                        .hero {
                            visibility: hidden;
                        }
                    `}</style>
                </section>
                {/* End of Hero Section */}

                <section className='py-24'>
                    <main className='container flex items-center'>
                        <iframe
                            className='gform h-96'
                            src={`${reg.formsrc}`}
                            width='100%'
                            height='100%'
                            frameBorder='0'
                            marginHeight='0'
                            marginWidth='0'
                        >
                            Loading…
                        </iframe>
                    </main>
                    <style jsx>{`
                        .gform {
                            height: ${reg.formheightmobile}px;
                        }

                        @media (min-width: 800px) {
                            .gform {
                                height: ${reg.formheight}px;
                            }
                        }
                    `}</style>
                </section>

                <Footer />
            </div>
        </>
    );
}

export async function getStaticProps({ params }) {
    const reg = regis.find((reg) => reg.route === params.name);

    return {
        props: { reg },
    };
}

export async function getStaticPaths() {
    // Get the paths we want to pre-render based on posts
    const paths = regis.map((reg) => ({
        params: { name: reg.route },
    }));

    // fallback false means that all the other route will be blocked
    return { paths, fallback: false };
}
