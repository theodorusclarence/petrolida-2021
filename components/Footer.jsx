import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare, faLine, faLinkedin } from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
    return (
        <footer className='bg-primary py-4 flex items-center flex-col flow-content'>
            <div className='flex text-white text-4xl '>
                <a href='https://lin.ee/7vNwVR8' target='_blank' rel='noopener noreferer'>
                    <FontAwesomeIcon className='mx-2 hover:text-gray-200' icon={faLine} />
                </a>
                <a
                    href='https://www.linkedin.com/company/petroleum-integrated-days-petrolida/'
                    target='_blank'
                    rel='noopener noreferer'
                >
                    <FontAwesomeIcon className='mx-2 hover:text-gray-200' icon={faLinkedin} />
                </a>
                <a
                    href='https://www.instagram.com/petrolida2021/'
                    target='_blank'
                    rel='noopener noreferer'
                >
                    <FontAwesomeIcon
                        className='mx-2 hover:text-gray-200'
                        icon={faInstagramSquare}
                    />
                </a>
            </div>
            <a href='https://speitssc.org' target='_blank' rel='noopener noreferer'>
                <img className='w-16' src='/img/spe.png' alt='Logo SPE' />
            </a>
            <p className='text-white text-sm'>© Creative Design and Technology Petrolida 2021</p>
        </footer>
    );
}
