export default function Footer() {
    return (
        <footer className='bg-primary py-4 flex items-center flex-col flow-content'>
            <div className='flex text-white space-x-4'>
                <a
                    href='https://lin.ee/7vNwVR8'
                    title='Add our official line'
                    target='_blank'
                    rel='noopener noreferer'
                >
                    <img className='w-8' src='/img/line.svg' alt='Line' />
                </a>
                <a
                    href='https://www.linkedin.com/company/petroleum-integrated-days-petrolida/'
                    title='Our LinkedIn'
                    target='_blank'
                    rel='noopener noreferer'
                >
                    <img className='w-8' src='/img/linkedin.svg' alt='Linkedin' />
                </a>
                <a
                    href='https://www.instagram.com/petrolida2021/'
                    title='Our Instagram'
                    target='_blank'
                    rel='noopener noreferer'
                >
                    <img className='w-8' src='/img/ig.svg' alt='Instagram' />
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
