import Button from './Button';
import NewTabBtn from './NewTabBtn';

export default function Card({ img, text, route, non, register, type }) {
    const pathHref = register ? 'register' : non ? 'non-competition' : 'competition';

    return (
        <figure className={`card-${non ? 'non' : 'comp'} relative`}>
            <img className='block w-full' src={`/img/${img}.jpg`} alt={text} loading='lazy' />
            <figcaption className='absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center transition-opacity bg-black bg-opacity-50 opacity-0 hover:opacity-100'>
                <h3 className='text-white'>{text}</h3>
                {/* If on register, and the route is bcc so turn it into new tab link */}
                {register ? (
                    <NewTabBtn outline disabled href={'/'}>
                        Closed
                    </NewTabBtn>
                ) : (
                    <Button card outline href={`/${pathHref}/${route}`}>
                        {register ? 'Register' : 'Learn More'}
                    </Button>
                )}
            </figcaption>
        </figure>
    );
}
