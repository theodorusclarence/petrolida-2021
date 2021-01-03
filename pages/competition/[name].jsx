import Navbar from '../../components/Navbar';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Competition() {
    const router = useRouter();
    const { name } = router.query;

    return (
        <>
            <Navbar />
            <h1>Competition</h1>
            <h2>{name}</h2>
            <div className='min-h-screen bg-gray-200'>hello</div>
            <div className='min-h-screen bg-gray-200'>hello</div>
            <div className='min-h-screen bg-gray-200'>hello</div>
            <h2>test</h2>
        </>
    );
}
