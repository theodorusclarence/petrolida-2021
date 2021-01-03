import Link from 'next/link';

export default function Button({ href, children, outline, style, nav, card, onClick }) {
    return (
        <Link href={href}>
            <a
                onClick={onClick}
                style={style}
                className={`text-xs lg:text-base inline-block font-bold ${
                    nav ? 'px-1 lg:px-2 mr-0 lg:mr-2' : 'px-6 lg:px-8'
                } py-1  rounded-full ${
                    outline ? 'bg-white text-primary hover:text-white ' : 'bg-primary text-white'
                } hover:bg-hover ${
                    nav ? 'border-white' : 'border-primary'
                } hover:border-hover border-2 `}
            >
                {children}
            </a>
        </Link>
    );
}
