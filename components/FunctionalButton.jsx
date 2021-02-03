export default function FunctionalButton({ children, outline, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`text-xs lg:text-base inline-block font-bold px-6 lg:px-8 py-1  rounded-full hover:bg-hover border-primary hover:border-hover border-2 
            ${outline ? 'bg-white text-primary hover:text-white ' : 'bg-primary text-white'} `}
        >
            {children}
        </button>
    );
}
