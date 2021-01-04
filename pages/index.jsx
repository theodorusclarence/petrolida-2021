import Head from 'next/head';
import Button from '../components/Button';
import Comps from '../components/Comps';
import Navbar from '../components/Navbar';
import NonComps from '../components/NonComps';

export default function Home() {
    return (
        <>
            <Head>
                <title>Petrolida 2021</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Navbar />
            <div>
                <section
                    className='p-8 bg-gray-300 py-52 flex flex-col justify-center items-center'
                    style={{
                        backgroundImage: 'url("/img/bg-hero.png")',
                        backgroundSize: 'cover',
                    }}
                >
                    <main className='container'>
                        <img
                            className='mx-auto w-full max-w-lg'
                            src='/img/logo_hero.png'
                            alt='Logo Petrolida'
                        />
                        <blockquote className='text-center my-2 lg:text-lg'>
                            Generating Efficient Utilization of Energy Supplies Through Advanced
                            Technology
                        </blockquote>
                        <div className='flex justify-center button-group'>
                            <Button
                                href=''
                                onClick={() => window.scrollTo({ top: 700, behavior: 'smooth' })}
                            >
                                Learn More
                            </Button>
                            <Button href='/' outline>
                                Register Now
                            </Button>
                        </div>
                    </main>
                </section>

                <section id='petrolida' className='bg-primary py-24 text-white'>
                    <main className='container'>
                        <div className='mb-16 flex flex-col md:flex-row justify-center items-center'>
                            <div className='left md:text-right'>
                                <h3 className=' text-white my-4 md:translate-x-1/2'>
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
                                <h3 className='text-white my-4'>Petrolida's Goal</h3>
                                <p className='mb-4 md:max-w-md'>
                                    Petrolida 2021 aims to serve as a platform for university
                                    students to explore and disclose their innovation regarding
                                    today’s energy challenges through providing them a chance to
                                    achieve substantial and competitive experiences to advance their
                                    excel lence.
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

                <section id='non-comp' className='py-20 text-center'>
                    <main className='container'>
                        <h2 className='mb-8'>Non-Competition Events</h2>
                        <NonComps />
                    </main>
                </section>

                <section
                    id='competition'
                    className='py-20 text-center'
                    style={{
                        backgroundImage: 'url("/img/bg-comp.png")',
                        backgroundSize: 'cover',
                    }}
                >
                    <main className='container'>
                        <h2 className='mb-8 text-white'>Competition Events</h2>
                        <Comps />
                    </main>
                </section>
            </div>
        </>
    );
}
