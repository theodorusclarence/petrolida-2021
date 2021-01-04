import Navbar from '../../components/Navbar';
import { useRouter } from 'next/router';
import { comps } from '../../store/data';

export default function Competition({ comp }) {
    const router = useRouter();
    const { name } = router.query;

    return (
        <>
            <Navbar />
            <h1>Competition</h1>
            <h2>{name}</h2>
            <pre>{JSON.stringify(comp, null, 2)}</pre>
            <div className='min-h-screen bg-gray-200'>hello</div>
            <div className='min-h-screen bg-gray-200'>hello</div>
            <div className='min-h-screen bg-gray-200'>hello</div>
            <h2>test</h2>
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
