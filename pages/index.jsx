import Head from 'next/head';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <>
            <Head>
                <title>Petrolida 2021</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Navbar />
            <div>
                <section className='p-8 bg-gray-300 min-h-screen'>
                    {/* tiap section tambahin ini didalem buat ngasi container padding, max-width */}
                    <div className='container'>
                        <h1 className='font-bold text-red-500'>Hello</h1>
                        <h2>ini h2 Competition Events</h2>
                        <h3>Ini h3 What is Petrolida?</h3>
                        <Button href='/'>Learn More</Button>
                        <Button href='/' outline>
                            Learn More
                        </Button>
                    </div>
                </section>
            </div>
        </>
    );
}
