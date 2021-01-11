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
            stagger: 0.3,
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
                    className='bg-gray-300 flex items-center min-h-screen'
                    style={{
                        backgroundImage: `url("/img/bg-${comp.img}.jpg")`,
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover',
                    }}
                >
                    <main className='container'>
                        <div className='mb-16 md:mb-0 flex flex-col-reverse md:flex-row justify-center items-center'>
                            <div className='w-full md:ml-12 md:text-left text-primary'>
                                <h1 className='hero my-4 text-primary'>{comp.title}</h1>
                                <blockquote className='hero mb-4 md:max-w-md'>
                                    {comp.quote}
                                </blockquote>
                                <div className='hero items-center space-x-4'>
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
                                        Guidebook
                                    </NewTabBtn>
                                    {/* <button className='p-2 md:p-3 justify-center items-center text-center text-primary bg-primary rounded-full hover:bg-hover'>
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
                                className='hero mx-auto md:mx-0  max-h-52 md:max-h-80'
                                src={`/img/logo-${comp.img}.png`}
                                alt='Illustrasi'
                            />
                        </div>
                    </main>
                </section>
                {/* End of Hero Section */}

                {/* About Section */}
                <section id='about' ref={about} className='py-24 text-primary overflow-hidden'>
                    <main className='container'>
                        <h2 className='text-center text-primary pb-16'>About The Competition</h2>
                        <div className='mb-4 flex flex-col-reverse md:flex-row justify-center items-center md:transform md:translate-x-12'>
                            <div className='about-left md:text-left'>
                                <p className='mb-4 md:max-w-md '>{comp.about}</p>
                            </div>
                            <img
                                className='about-right mb-4 mx-auto md:mx-0 max-h-44 md:max-h-64'
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
                        <h2 className='text-center text-white pb-16 md:translate-x-1/2'>
                            Competition Keydates
                        </h2>
                        <div className='max-w-5xl mx-auto py-10'>
                            <div className='step flex flex-row'>
                                <div className='hidden md:flex flex-col items-center'>
                                    <div className='w-32 py-5 border border-third rounded mr-4 uppercase flex flex-col items-center justify-center'>
                                        <div className='text-3xl font-black text-third'>Step 1</div>
                                        <div className='text-third text-sm'>Registration</div>
                                    </div>
                                    <div className='h-full border-l-4 border-transparent'>
                                        <div className='border-l-4 mr-4 h-full border-third border-dashed'></div>
                                    </div>
                                </div>
                                <div className='flex-auto border rounded  border-third'>
                                    <div className='flex md:flex-row flex-col items-center'>
                                        <div className='flex-auto'>
                                            <div className='md:hidden text-sm font-normal uppercase pt-3 pl-3 text-third'>
                                                <span className='font-black'>Step 1</span> -
                                                Registration
                                            </div>
                                            <div className='px-3'>
                                                <p>Open Regist : 28 December 2020</p>
                                                <p>Deadline : 13 January 2021</p>
                                            </div>
                                        </div>
                                        <div className='md:w-64 p-5'>
                                            <img
                                                src='https://www.flaticon.com/svg/static/icons/svg/3638/3638142.svg'
                                                alt='step 1'
                                                className='object-scale-down w-32 h-32'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='step flex items-start flex-row'>
                                <div className='border-t-4 border-r-4 border-transparent'>
                                    <div className='w-16 ml-16 h-16 border-l-4 border-third border-dashed border-b-4 rounded-bl-full'></div>
                                </div>
                                <div className='border-t-4 border-transparent flex-auto'>
                                    <div className='h-16 border-b-4 border-third border-dashed'></div>
                                </div>
                                <div className='w-16 mt-16 mr-16 h-16 border-r-4 border-third border-dashed border-t-4 rounded-tr-full'></div>
                            </div>

                            <div className='step flex flex-row-reverse'>
                                <div className='hidden md:flex flex-col items-center'>
                                    <div className='w-32 py-5 border border-third rounded ml-4 uppercase flex flex-col items-center justify-center'>
                                        <div className='text-3xl font-black text-third'>Step 2</div>
                                        <div className='text-third text-sm'>Preliminary</div>
                                    </div>
                                    <div className='h-full border-r-4 border-transparent'>
                                        <div className='border-l-4 ml-4 h-full border-third border-dashed'></div>
                                    </div>
                                </div>
                                <div className='flex-auto border rounded  border-third'>
                                    <div className='flex md:flex-row flex-col items-center'>
                                        <div className='flex-auto'>
                                            <div className='md:hidden text-sm font-normal uppercase pt-3 pl-3 text-third'>
                                                <span className='font-black'>Step 2</span> -
                                                Preliminary
                                            </div>
                                            <div className='px-3 '>
                                                <p>Case Release : 14 January 2021</p>
                                                <p>Working Time : 14 January - 28 January 2021</p>
                                                <p>Submission / Deadline : 28 January 2021</p>
                                            </div>
                                        </div>
                                        <div className='md:w-64 p-5'>
                                            <img
                                                src='https://www.flaticon.com/svg/static/icons/svg/1756/1756679.svg'
                                                alt='step 2'
                                                className='object-scale-down w-32 h-32'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='step flex items-start flex-row-reverse'>
                                <div className='border-t-4 border-l-4 border-transparent'>
                                    <div className='w-16 mr-16 h-16 border-r-4 border-third border-dashed border-b-4 rounded-br-full'></div>
                                </div>
                                <div className='border-t-4 border-transparent flex-auto'>
                                    <div className='h-16 border-b-4 border-third border-dashed'></div>
                                </div>
                                <div className='w-16 mt-16 ml-16 h-16 border-l-4 border-third border-dashed border-t-4 rounded-tl-full'></div>
                            </div>
                            <div className='step flex flex-row'>
                                <div className='hidden md:flex flex-col items-center'>
                                    <div className='w-32 py-5 border border-third rounded mr-4 uppercase flex flex-col items-center justify-center'>
                                        <div className='text-3xl font-black text-third'>Step 3</div>
                                        <div className='text-third text-sm'>Semifinal</div>
                                    </div>
                                    <div className='h-full border-l-4 border-transparent'>
                                        <div className='border-l-4 mr-4 h-full border-third border-dashed'></div>
                                    </div>
                                </div>
                                <div className='flex-auto border rounded  border-third'>
                                    <div className='flex md:flex-row flex-col items-center'>
                                        <div className='flex-auto'>
                                            <div className='md:hidden text-sm font-normal uppercase pt-3 pl-3 text-third'>
                                                <span className='font-black'>Step 3</span> -
                                                Semifinal
                                            </div>
                                            <div className='px-3'>
                                                <p>Anouncement : 7 February 2021</p>
                                                <p>
                                                    Case Release & Working Time : 8 February - 25
                                                    February 2021
                                                </p>
                                                <p>Submission / Deadline : 25 February 2021</p>
                                            </div>
                                        </div>
                                        <div className='md:w-64 p-5'>
                                            <img
                                                src='https://www.flaticon.com/svg/static/icons/svg/2665/2665430.svg'
                                                alt='step 3'
                                                className='object-scale-down w-32 h-32'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='step flex items-start flex-row'>
                                <div className='border-t-4 border-r-4 border-transparent'>
                                    <div className='w-16 ml-16 h-16 border-l-4 border-third border-dashed border-b-4 rounded-bl-full'></div>
                                </div>
                                <div className='border-t-4 border-transparent flex-auto'>
                                    <div className='h-16 border-b-4 border-third border-dashed'></div>
                                </div>
                                <div className='w-16 mt-16 mr-16 h-16 border-r-4 border-third border-dashed border-t-4 rounded-tr-full'></div>
                            </div>

                            <div className='step flex flex-row-reverse'>
                                <div className='hidden md:flex flex-col items-center'>
                                    <div className='w-32 py-5 border border-third rounded ml-4 uppercase flex flex-col items-center justify-center'>
                                        <div className='text-3xl font-black text-third'>Step 4</div>
                                        <div className='text-third text-sm'>Final</div>
                                    </div>
                                    <div className='h-full border-r-4 border-transparent'>
                                        <div className='border-l-4 ml-4 h-full border-third border-dashed'></div>
                                    </div>
                                </div>
                                <div className='flex-auto border rounded  border-third'>
                                    <div className='flex md:flex-row flex-col items-center'>
                                        <div className='flex-auto'>
                                            <div className='md:hidden text-sm font-normal uppercase pt-3 pl-3 text-third'>
                                                <span className='font-black'>Step 4</span> - Final
                                            </div>
                                            <div className='px-3'>
                                                <p>Anouncement : 3 March 2021</p>
                                                <p>Technical Meeting : 4 March 2021</p>
                                                <p>
                                                    Case Release & Working Time : 4 March - 6 March
                                                    2021
                                                </p>
                                            </div>
                                        </div>
                                        <div className='md:w-64 p-5'>
                                            <img
                                                src='https://www.flaticon.com/svg/static/icons/svg/2641/2641497.svg'
                                                alt='step 4'
                                                className='object-scale-down w-32 h-32'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='step flex items-start flex-row-reverse'>
                                <div className='border-t-4 border-l-4 border-transparent'>
                                    <div className='w-16 mr-16 h-16 border-r-4 border-third border-dashed border-b-4 rounded-br-full'></div>
                                </div>
                                <div className='border-t-4 border-transparent flex-auto'>
                                    <div className='h-16 border-b-4 border-third border-dashed'></div>
                                </div>
                                <div className='w-16 mt-16 ml-16 h-16 border-l-4 border-third border-dashed border-t-4 rounded-tl-full'></div>
                            </div>

                            <div className='step flex flex-row'>
                                <div className='hidden md:flex flex-col items-center'>
                                    <div className='w-32 py-5 border border-third rounded mr-4 uppercase flex flex-col items-center justify-center'>
                                        <div className='text-3xl font-black text-third'>Step 5</div>
                                        <div className='text-third text-sm'>Presentation</div>
                                    </div>
                                </div>
                                <div className='flex-auto border rounded  border-third'>
                                    <div className='flex md:flex-row flex-col items-center'>
                                        <div className='flex-auto'>
                                            <div className='md:hidden text-sm font-normal uppercase pt-3 pl-3 text-third'>
                                                <span className='font-black'>Step 5</span> -
                                                Presentation
                                            </div>
                                            <div className='px-3'>
                                                <p>Date : 6 March 2021</p>
                                            </div>
                                        </div>
                                        <div className='md:w-64 p-5'>
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
                <section id='prize' className='py-24 flex justify-center items-center'>
                    <main className='container'>
                        <h2 className='text-center text-primary pb-16 md:translate-x-1/2'>
                            Competition Prize
                        </h2>
                        <img
                            className='place mx-auto w-full max-w-lg'
                            src='/img/compeprize.svg'
                            alt='Logo Petrolida'
                        />
                        <div className='flex justify-center py-8 text-center'>
                            <div className='place w-full md:w-1/3 justify-center'>
                                <div className='inline-block p-3 text-center text-white transition border border-primary rounded-full bg-primary ripple hover:bg-hover focus:outline-none'>
                                    <img
                                        src='https://www.flaticon.com/svg/static/icons/svg/3135/3135728.svg'
                                        alt='step 3'
                                        className='object-scale-down w-5 h-5 fill-current text-white'
                                    />
                                </div>
                                <h3>1st Place</h3>
                                <p>Rp {comp.prize1}</p>
                            </div>
                            <div className='place w-full md:w-1/3'>
                                <div className='inline-block p-3 text-center text-white transition border border-primary rounded-full bg-primary ripple hover:bg-hover focus:outline-none'>
                                    <img
                                        src='https://www.flaticon.com/svg/static/icons/svg/3135/3135728.svg'
                                        alt='step 3'
                                        className='object-scale-down w-5 h-5 fill-current text-white'
                                    />
                                </div>
                                <h3>2nd Place</h3>
                                <p>Rp {comp.prize2}</p>
                            </div>
                            <div className='place w-full md:w-1/3'>
                                <div className='inline-block p-3 text-center text-white transition border border-primary rounded-full bg-primary ripple hover:bg-hover focus:outline-none'>
                                    <img
                                        src='https://www.flaticon.com/svg/static/icons/svg/3135/3135728.svg'
                                        alt='step 3'
                                        className='object-scale-down w-5 h-5 fill-current text-white'
                                    />
                                </div>
                                <h3>3rd Place</h3>
                                <p>Rp {comp.prize3}</p>
                            </div>
                        </div>
                    </main>
                </section>
                {/* End of Prize Section */}

                {/* Register Section */}
                <section
                    id='register'
                    className='p-8 bg-gray-300 py-24 flex flex-col justify-center items-center overflow-hidden'
                    style={{
                        backgroundImage: 'url("/img/bg-hero.jpg")',
                        backgroundSize: 'cover',
                    }}
                >
                    <main className='container'>
                        <h2 className='register-left text-center text-primary mb-4 md:mb-8 md:translate-x-1/2'>
                            So, what are you waiting for?
                        </h2>
                        <div className='register-right flex justify-center button-group'>
                            {comp.img === 'bcc' ? (
                                <NewTabBtn href='https://forms.gle/KPTZouYjzCfZyLtV9' outline>
                                    Register Now
                                </NewTabBtn>
                            ) : (
                                <Button href={`/register/${comp.route}`} outline>
                                    Register Now
                                </Button>
                            )}
                        </div>
                    </main>
                </section>
                {/* End of Register Section */}

                {/* CP  Section */}
                <section id='cp' className='py-4 flex justify-center items-center'>
                    <main className='container'>
                        <h2 className='text-center text-primary md:translate-x-1/2'>
                            Contact Person
                        </h2>
                        <div className="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-12 max-w-md md:max-w-2xl ">
                            <div className="flex items-start px-4 py-6">
                                <img className="w-12 h-12 rounded-full object-cover mr-4 shadow fill-current" src="/img/people.svg" alt="avatar"></img>
                                <div className="">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-lg font-semibold text-gray-900 -mt-1">{comp.cpname1}</h2>
                                    </div>
                                    <p className="text-gray-700 font-medium">{comp.cptitle1}</p>
                                    <p className="mt-3 text-gray-700 text-sm">
                                        Phone Number : {comp.cpphone1}
                                    </p>
                                    <p className="mt-3 text-gray-700 text-sm">
                                        Line ID : {comp.cpline1}
                                    </p>
                                    <p className="mt-3 text-gray-700 text-sm">
                                        Email : {comp.cpemail1}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-12 max-w-md md:max-w-2xl ">
                            <div className="flex items-start px-4 py-6">
                                <img className="w-12 h-12 rounded-full object-cover mr-4 shadow" src="/img/people.svg" alt="avatar"></img>
                                <div className="">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-lg font-semibold text-gray-900 -mt-1">Ilham Fadhillah</h2>
                                    </div>
                                    <p className="text-gray-700 font-medium">Coordinator of Business Case Competition</p>
                                    <p className="mt-3 text-gray-700 text-sm">
                                        Phone Number : 085710083134
                                    </p>
                                    <p className="mt-3 text-gray-700 text-sm">
                                        Line ID : ilham4
                                    </p>
                                    <p className="mt-3 text-gray-700 text-sm">
                                        Email : ilhamfadhillah4@gmail.com
                                    </p>
                                </div>
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
