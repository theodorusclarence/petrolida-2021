import Comps from '../../components/Comps';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import NonComps from '../../components/NonComps';
import Seo from '../../components/Seo';

export default function Register() {
    const seoData = {
        pageTitle: 'Register | Petrolida 2021',
    };
    return (
        <>
            <Seo seoData={seoData}>
                <title>{seoData.pageTitle}</title>
            </Seo>
            <Navbar />
            <div>
                <section
                    id='competition'
                    className='py-20 text-center'
                    style={{
                        backgroundImage: 'url("/img/bg-reg.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                    }}
                >
                    <main className='container text-white'>
                        <h2 className='mb-8'>Competition Registration Closed</h2>
                        <Comps register />
                    </main>
                </section>
                <section className='py-20'>
                    <main className='container text-center text-primary'>
                        <h2 className='my-8'>Non Competition Registration Closed</h2>
                        <NonComps register petro />
                    </main>
                </section>
                <Footer />
            </div>
        </>
    );
}
