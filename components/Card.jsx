import Button from './Button';

export default function Card({ img, text, route, non, register }) {
    const pathHref = register ? 'register' : non ? 'non-competition' : 'competition';

    return (
        <figure className={`card-${non ? 'non' : 'comp'} relative`}>
            <img className='block w-full' src={`/img/${img}.jpg`} alt={text} loading='lazy' />
            <figcaption className='absolute opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-50 top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center'>
                <h3 className='text-white'>{text}</h3>
                <Button card outline href={`/${pathHref}/${route}`}>
                    {register ? 'Register' : 'Learn More'}
                </Button>
            </figcaption>
        </figure>
    );
}
