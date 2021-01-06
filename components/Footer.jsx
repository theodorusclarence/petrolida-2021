import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare, faLine, faLinkedin } from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
    return (
        <footer className='bg-primary py-4 flex items-center flex-col flow-content'>
            <div className='flex text-white'>
                <a
                    href='https://lin.ee/7vNwVR8'
                    title='Add our official line'
                    target='_blank'
                    rel='noopener noreferer'
                >
                    <FontAwesomeIcon
                        className='mx-2  hover:text-gray-200'
                        icon={faLine}
                        size='2x'
                    />
                </a>
                <a
                    href='https://www.linkedin.com/company/petroleum-integrated-days-petrolida/'
                    target='_blank'
                    rel='noopener noreferer'
                >
                    <FontAwesomeIcon
                        title='Our LinkedIn'
                        className='mx-2 hover:text-gray-200'
                        icon={faLinkedin}
                        size='2x'
                    />
                </a>
                <a
                    href='https://www.instagram.com/petrolida2021/'
                    title='Our Instagram'
                    target='_blank'
                    rel='noopener noreferer'
                >
                    <FontAwesomeIcon
                        className='mx-2 hover:text-gray-200'
                        icon={faInstagramSquare}
                        size='2x'
                    />
                </a>
            </div>
            <a
                href='https://speitssc.org'
                title='Go To SPE ITS SC Website'
                target='_blank'
                rel='noopener noreferer'
            >
                <img className='w-16' src='/img/spe.png' alt='Logo SPE' />
            </a>
            <p className='text-white text-sm'>© Creative Design and Technology Petrolida 2021</p>
        </footer>
    );
}
