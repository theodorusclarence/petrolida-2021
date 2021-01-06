import Link from 'next/link';
import Button from './Button';

export default function Navbar() {
    return (
        <div className='sticky top-0 z-50 bg-white flex justify-between items-center py-2 px-2 lg:px-4 shadow-md'>
            <Link href='/'>
                <a>
                    <img className='w-28 md:w-36' src='/img/logo_nav.png' alt='Logo Petrolida' />
                </a>
            </Link>

            <div>
                <Button outline href='/' nav>
                    Home
                </Button>
                <Button outline href='/#competition' nav>
                    Competitions
                </Button>
                <Button href='/register'>Register</Button>
            </div>
        </div>
    );
}
