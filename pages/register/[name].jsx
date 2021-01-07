import Navbar from '../../components/Navbar';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Seo from '../../components/Seo';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import { regis } from '../../store/data';
import gsap, { Power3 } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Register({ reg }) {
    const router = useRouter();
    const { name } = router.query;

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
                    className='bg-gray-300 flex items-center'
                    style={{
                        backgroundImage: `url("/img/bg-${reg.img}.jpg")`,
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover',
                        minHeight: '40vh'
                    }}
                >
                    <main className='container'>
                        <div className='mb-16 md:mb-0 flex flex-col-reverse md:flex-row justify-center items-center'>
                            <div className='w-full md:ml-12 md:text-left text-primary'>
                                <h1 className='hero my-4 text-primary'>{reg.title}</h1>
                                <blockquote className='hero mb-4 md:max-w-md'>
                                    {reg.quote}
                                </blockquote>
                                <div className='hero items-center space-x-4'>
                                    <Button href='/'>
                                        Guidebook
                                    </Button>
                                    <button className='p-2 md:p-3 justify-center items-center text-center text-primary bg-primary rounded-full hover:bg-hover'>
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
                                </div>
                            </div>
                            <img
                                className='hero mx-auto md:mx-0'
                                src={`/img/logo-${reg.img}.png`}
                                alt='Illustrasi'
                            />
                        </div>
                    </main>
                </section>
                {/* End of Hero Section */}

                <section className='py-24'>
                    <main className="container flex items-center">
                    <iframe className='gform h-96' src="https://docs.google.com/forms/d/e/1FAIpQLSf80BGFdjffgznHSIuMnVu5z5ODcb3nvK836qEvp5rDStWLXw/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                    </main>
                    <style jsx>{`
                        .gform {
                            height: 5000px;
                        }

                        @media (min-width: 800px ) {
                            .gform {
                                height: 4400px;
                            }
                        }
                    `}</style>
                </section>

                <Footer/>
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
