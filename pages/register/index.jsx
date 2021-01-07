import Head from 'next/head';
import Button from '../../components/Button';
import Comps from '../../components/Comps';
import Navbar from '../../components/Navbar';

export default function Register() {
    return (
        <>
            <Head>
                <title>Register | Petrolida 2021</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Navbar />
            <div>
                {/* <section
                    id=''
                    className='p-8 bg-gray-300 py-52 min-h-screen flex flex-col justify-center items-center'
                    style={{
                        backgroundImage: 'url("/img/bg-hero.jpg")',
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
                            <Button href='#petrolida'>Learn More</Button>
                            <Button href='/' outline>
                                Register Now
                            </Button>
                        </div>
                    </main>
                </section> */}

                <section
                    id='competition'
                    className='py-20 text-center'
                    style={{
                        backgroundImage: 'url("/img/bg-comp.jpg")',
                        backgroundSize: 'cover',
                    }}
                >
                    <main className='container'>
                        <h2 className='mb-8 text-white'>Register Now!</h2>
                        <Comps register />
                    </main>
                </section>
            </div>
        </>
    );
}
