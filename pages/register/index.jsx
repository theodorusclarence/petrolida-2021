import Comps from '../../components/Comps';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
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
                    <main className='container'>
                        <h2 className='mb-8 text-white'>Register Now!</h2>
                        <Comps register />
                    </main>
                </section>
                <Footer />
            </div>
        </>
    );
}
