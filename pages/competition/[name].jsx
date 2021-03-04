import Navbar from '../../components/Navbar';
import { useEffect, useRef } from 'react';
import Seo from '../../components/Seo';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import { comps } from '../../store/data';
import gsap, { Power3 } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import NewTabBtn from '../../components/NewTabBtn';
gsap.registerPlugin(ScrollTrigger);

export default function Competition({ comp }) {
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
            .from('.about-left', {
                opacity: 0,
                duration: 1.5,
                x: -75,
                ease: Power3.easeOut,
            })
            .from(
                '.about-right',
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
                trigger: '#prize',
                start: 'top 50%',
            },
        }).from('.place', {
            opacity: 0,
            y: 50,
            stagger: 0.1,
            ease: Power3.easeOut,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '#keydates',
                start: 'top 20%',
            },
        }).from('.step', {
            opacity: 0,
            y: 50,
            stagger: 0.2,
            ease: Power3.easeOut,
        });

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

    const seoData = {
        pageTitle: `${comp.title} | Petrolida 2021`,
        img: comp.img,
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
                        backgroundImage: `url("/img/bg-${comp.img}.jpg")`,
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover',
                    }}
                >
                    <main className='container'>
                        <div className='flex flex-col-reverse items-center justify-center mb-16 md:mb-0 md:flex-row'>
                            <div className='w-full md:ml-12 md:text-left text-primary'>
                                <h1 className='my-4 hero text-primary'>{comp.title}</h1>
                                {comp.img === 'bcc' ? (
                                    <div className='flex items-center mt-4 mb-6 space-x-4 hero'>
                                        <h3 className='hero'>In partnership with</h3>
                                        <img
                                            // style={{ filter: 'brightness(0) invert(1)' }}
                                            className='w-20 px-2 bg-white rounded-full hero lg:w-28'
                                            src={`/img/sponsor-cicil.png`}
                                            alt='logo cicil'
                                        />
                                    </div>
                                ) : null}
                                <blockquote className='mb-4 hero md:max-w-md'>
                                    {comp.quote}
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
                                    >
                                        Learn More
                                    </Button>
                                    <NewTabBtn href={comp.guidebook} outline>
                                        {comp.img === 'bcc' ? 'Guidebook' : 'Invitation Letter'}
                                    </NewTabBtn>
                                    {/* <button className='items-center justify-center p-2 text-center rounded-full md:p-3 text-primary bg-primary hover:bg-hover'>
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
                                    </button> */}
                                </div>
                            </div>
                            <img
                                className='mx-auto hero md:mx-0 max-h-52 md:max-h-80'
                                src={`/img/logo-${comp.img}.png`}
                                alt='Illustrasi'
                            />
                        </div>
                    </main>
                </section>
                {/* End of Hero Section */}

                {/* About Section */}
                <section id='about' ref={about} className='py-24 overflow-hidden text-primary'>
                    <main className='container'>
                        <h2 className='pb-16 text-center text-primary'>About The Competition</h2>
                        <div className='flex flex-col-reverse items-center justify-center mb-4 md:flex-row md:transform md:translate-x-12'>
                            <div className='about-left md:text-left'>
                                <p className='mb-4 md:max-w-md '>{comp.about}</p>
                            </div>
                            <img
                                className='mx-auto mb-4 about-right md:mx-0 max-h-44 md:max-h-64'
                                src='/img/what.png'
                                alt='illus'
                            />
                        </div>
                    </main>
                </section>
                {/* End of About Section */}

                {/* Keydates Section */}
                <section id='keydates' className='py-24 text-white bg-primary'>
                    <main className='container'>
                        <h2 className='pb-16 text-center text-white md:translate-x-1/2'>
                            Competition Keydates
                        </h2>
                        <div className='max-w-5xl py-10 mx-auto'>
                            <div className='flex flex-row step'>
                                <div className='flex-col items-center hidden md:flex'>
                                    <div className='flex flex-col items-center justify-center w-32 py-5 mr-4 uppercase border rounded border-third'>
                                        <div className='text-3xl font-black text-third '>
                                            Step 1
                                        </div>
                                    </div>
                                    <div className='h-full border-l-4 border-transparent'>
                                        <div className='h-full mr-4 border-l-4 border-dashed border-third'></div>
                                    </div>
                                </div>
                                <div className='flex-auto border rounded border-third'>
                                    <div className='flex flex-col items-center md:flex-row'>
                                        <div className='flex-auto'>
                                            <div className='pt-3 pl-3 text-sm font-normal uppercase md:hidden text-third'>
                                                <p className='font-black text-center'>Step 1</p>
                                            </div>
                                            <div className='px-3 space-y-2 text-center md:text-left'>
                                                <h3 className='text-white'>
                                                    {comp.keydates[0].name}
                                                </h3>
                                                {comp.keydates[0].content.map((item) => (
                                                    <p key={item}>{item}</p>
                                                ))}
                                            </div>
                                        </div>
                                        <div className='p-5 md:w-64'>
                                            <img
                                                src='https://www.flaticon.com/svg/static/icons/svg/3638/3638142.svg'
                                                alt='step 1'
                                                className='object-scale-down w-32 h-32'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-row items-start step'>
                                <div className='border-t-4 border-r-4 border-transparent'>
                                    <div className='w-16 h-16 ml-16 border-b-4 border-l-4 border-dashed rounded-bl-full border-third'></div>
                                </div>
                                <div className='flex-auto border-t-4 border-transparent'>
                                    <div className='h-16 border-b-4 border-dashed border-third'></div>
                                </div>
                                <div className='w-16 h-16 mt-16 mr-16 border-t-4 border-r-4 border-dashed rounded-tr-full border-third'></div>
                            </div>

                            <div className='flex flex-row-reverse step'>
                                <div className='flex-col items-center hidden md:flex'>
                                    <div className='flex flex-col items-center justify-center w-32 py-5 ml-4 uppercase border rounded border-third'>
                                        <div className='text-3xl font-black text-third'>Step 2</div>
                                    </div>
                                    <div className='h-full border-r-4 border-transparent'>
                                        <div className='h-full ml-4 border-l-4 border-dashed border-third'></div>
                                    </div>
                                </div>
                                <div className='flex-auto border rounded border-third'>
                                    <div className='flex flex-col items-center md:flex-row'>
                                        <div className='flex-auto'>
                                            <div className='pt-3 pl-3 text-sm font-normal uppercase md:hidden text-third'>
                                                <p className='font-black text-center'>Step 2</p>
                                            </div>
                                            <div className='px-3 space-y-2 text-center md:text-left'>
                                                <h3 className='text-white'>
                                                    {comp.keydates[1].name}
                                                </h3>
                                                {comp.keydates[1].content.map((item) => (
                                                    <p key={item}>{item}</p>
                                                ))}
                                            </div>
                                        </div>
                                        <div className='p-5 md:w-64'>
                                            <img
                                                src='https://www.flaticon.com/svg/static/icons/svg/1756/1756679.svg'
                                                alt='step 2'
                                                className='object-scale-down w-32 h-32'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-row-reverse items-start step'>
                                <div className='border-t-4 border-l-4 border-transparent'>
                                    <div className='w-16 h-16 mr-16 border-b-4 border-r-4 border-dashed rounded-br-full border-third'></div>
                                </div>
                                <div className='flex-auto border-t-4 border-transparent'>
                                    <div className='h-16 border-b-4 border-dashed border-third'></div>
                                </div>
                                <div className='w-16 h-16 mt-16 ml-16 border-t-4 border-l-4 border-dashed rounded-tl-full border-third'></div>
                            </div>
                            <div className='flex flex-row step'>
                                <div className='flex-col items-center hidden md:flex'>
                                    <div className='flex flex-col items-center justify-center w-32 py-5 mr-4 uppercase border rounded border-third'>
                                        <div className='text-3xl font-black text-third'>Step 3</div>
                                    </div>
                                    <div className='h-full border-l-4 border-transparent'>
                                        <div className='h-full mr-4 border-l-4 border-dashed border-third'></div>
                                    </div>
                                </div>
                                <div className='flex-auto border rounded border-third'>
                                    <div className='flex flex-col items-center md:flex-row'>
                                        <div className='flex-auto'>
                                            <div className='pt-3 pl-3 text-sm font-normal uppercase md:hidden text-third'>
                                                <p className='font-black text-center'>Step 3</p>
                                            </div>
                                            <div className='px-3 space-y-2 text-center md:text-left'>
                                                <h3 className='text-white'>
                                                    {comp.keydates[2].name}
                                                </h3>
                                                {comp.keydates[2].content.map((item) => (
                                                    <p key={item}>{item}</p>
                                                ))}
                                            </div>
                                        </div>
                                        <div className='p-5 md:w-64'>
                                            <img
                                                src='https://www.flaticon.com/svg/static/icons/svg/2665/2665430.svg'
                                                alt='step 3'
                                                className='object-scale-down w-32 h-32'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-row items-start step'>
                                <div className='border-t-4 border-r-4 border-transparent'>
                                    <div className='w-16 h-16 ml-16 border-b-4 border-l-4 border-dashed rounded-bl-full border-third'></div>
                                </div>
                                <div className='flex-auto border-t-4 border-transparent'>
                                    <div className='h-16 border-b-4 border-dashed border-third'></div>
                                </div>
                                <div className='w-16 h-16 mt-16 mr-16 border-t-4 border-r-4 border-dashed rounded-tr-full border-third'></div>
                            </div>

                            <div className='flex flex-row-reverse step'>
                                <div className='flex-col items-center hidden md:flex'>
                                    <div className='flex flex-col items-center justify-center w-32 py-5 ml-4 uppercase border rounded border-third'>
                                        <div className='text-3xl font-black text-third'>Step 4</div>
                                    </div>
                                    <div className='h-full border-r-4 border-transparent'>
                                        <div className='h-full ml-4 border-l-4 border-dashed border-third'></div>
                                    </div>
                                </div>
                                <div className='flex-auto border rounded border-third'>
                                    <div className='flex flex-col items-center md:flex-row'>
                                        <div className='flex-auto'>
                                            <div className='pt-3 pl-3 text-sm font-normal uppercase md:hidden text-third'>
                                                <p className='font-black text-center'>Step 4</p>
                                            </div>
                                            <div className='px-3 space-y-2 text-center md:text-left'>
                                                <h3 className='text-white'>
                                                    {comp.keydates[3].name}
                                                </h3>
                                                {comp.keydates[3].content.map((item) => (
                                                    <p key={item}>{item}</p>
                                                ))}
                                            </div>
                                        </div>
                                        <div className='p-5 md:w-64'>
                                            <img
                                                src='https://www.flaticon.com/svg/static/icons/svg/2641/2641497.svg'
                                                alt='step 4'
                                                className='object-scale-down w-32 h-32'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-row-reverse items-start step'>
                                <div className='border-t-4 border-l-4 border-transparent'>
                                    <div className='w-16 h-16 mr-16 border-b-4 border-r-4 border-dashed rounded-br-full border-third'></div>
                                </div>
                                <div className='flex-auto border-t-4 border-transparent'>
                                    <div className='h-16 border-b-4 border-dashed border-third'></div>
                                </div>
                                <div className='w-16 h-16 mt-16 ml-16 border-t-4 border-l-4 border-dashed rounded-tl-full border-third'></div>
                            </div>

                            <div className='flex flex-row step'>
                                <div className='flex-col items-center hidden md:flex'>
                                    <div className='flex flex-col items-center justify-center w-32 py-5 mr-4 uppercase border rounded border-third'>
                                        <div className='text-3xl font-black text-third'>Step 5</div>
                                    </div>
                                </div>
                                <div className='flex-auto border rounded border-third'>
                                    <div className='flex flex-col items-center md:flex-row'>
                                        <div className='flex-auto'>
                                            <div className='pt-3 pl-3 text-sm font-normal uppercase md:hidden text-third'>
                                                <p className='font-black text-center'>Step 5</p>
                                            </div>
                                            <div className='px-3 space-y-2 text-center md:text-left'>
                                                <h3 className='text-white'>
                                                    {comp.keydates[4].name}
                                                </h3>
                                                {comp.keydates[4].content.map((item) => (
                                                    <p key={item}>{item}</p>
                                                ))}
                                            </div>
                                        </div>
                                        <div className='p-5 md:w-64'>
                                            <img
                                                src='https://www.flaticon.com/svg/static/icons/svg/201/201594.svg'
                                                alt='step 3'
                                                className='object-scale-down w-32 h-32'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </section>
                {/* End of Keydates Section */}

                {/* Prize  Section */}
                <section id='prize' className='flex items-center justify-center py-24'>
                    <main className='container'>
                        <h2 className='pb-16 text-center text-primary md:translate-x-1/2'>
                            Competition Prize
                        </h2>
                        <img
                            className='w-full max-w-lg mx-auto place'
                            src='/img/compeprize.svg'
                            alt='Logo Petrolida'
                        />
                        <div className='flex justify-center py-8 text-center'>
                            <div className='justify-center w-full place md:w-1/3'>
                                <div className='inline-block p-3 text-center text-white transition border rounded-full border-primary bg-primary ripple hover:bg-hover focus:outline-none'>
                                    <img
                                        src='https://www.flaticon.com/svg/static/icons/svg/3135/3135728.svg'
                                        alt='step 3'
                                        className='object-scale-down w-5 h-5 text-white fill-current'
                                    />
                                </div>
                                <h3>1st Place</h3>
                                <p>Rp {comp.prize1}</p>
                            </div>
                            <div className='w-full place md:w-1/3'>
                                <div className='inline-block p-3 text-center text-white transition border rounded-full border-primary bg-primary ripple hover:bg-hover focus:outline-none'>
                                    <img
                                        src='/img/badge-silver.svg'
                                        alt='step 3'
                                        className='object-scale-down w-5 h-5 text-white fill-current'
                                    />
                                </div>
                                <h3>2nd Place</h3>
                                <p>Rp {comp.prize2}</p>
                            </div>
                            <div className='w-full place md:w-1/3'>
                                <div className='inline-block p-3 text-center text-white transition border rounded-full border-primary bg-primary ripple hover:bg-hover focus:outline-none'>
                                    <img
                                        src='/img/badge-bronze.svg'
                                        alt='step 3'
                                        className='object-scale-down w-5 h-5 text-white fill-current'
                                    />
                                </div>
                                <h3>3rd Place</h3>
                                <p>Rp {comp.prize3}</p>
                            </div>
                        </div>
                        {comp.prize4 && (
                            <div className='w-full mx-auto mt-4 text-center place md:w-1/3'>
                                <div className='inline-block p-3 text-center text-white transition border rounded-full border-primary bg-primary ripple hover:bg-hover focus:outline-none'>
                                    <img
                                        src='/img/badge-bronze.svg'
                                        alt='step 3'
                                        className='object-scale-down w-5 h-5 text-white fill-current'
                                    />
                                </div>
                                <h3>Favorite Winner</h3>
                                <p>Rp {comp.prize4}</p>
                            </div>
                        )}
                    </main>
                </section>
                {/* End of Prize Section */}

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
                            See you on the competition day!
                        </h2>
                        <div className='flex justify-center register-right button-group'>
                            <NewTabBtn href='/' outline>
                                Registration Closed
                            </NewTabBtn>
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
                                <h3 className='text-lg'>{comp.cpname1}</h3>
                                <p className='text-md'>{comp.cptitle1}</p>
                                <p className='text-md'>Phone Number : {comp.cpphone1}</p>
                                <p className='text-md'>Line ID : {comp.cpline1}</p>
                                <p className='text-md'>Email : {comp.cpemail1}</p>
                            </div>
                        </div>
                    </main>
                </section>
                {/* CP Section */}

                <Footer />
                <style jsx>{`
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
    const comp = comps.find((comp) => comp.route === params.name);

    return {
        props: { comp },
    };
}

export async function getStaticPaths() {
    // Get the paths we want to pre-render based on posts
    const paths = comps.map((comp) => ({
        params: { name: comp.route },
    }));

    // fallback false means that all the other route will be blocked
    return { paths, fallback: false };
}
