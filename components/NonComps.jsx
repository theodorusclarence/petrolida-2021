import Card from './Card';
import gsap, { Power3 } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

export default function NonComps() {
    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '#non-competition',
                start: 'top 50%',
            },
        }).from('.card-non', {
            opacity: 0,
            duration: 1,
            y: 100,
            stagger: 0.1,
            ease: Power3.easeOut,
        });
    }, []);

    const noncomps = [
        {
            route: 'petrolida-talks',
            img: 'petrotalk',
            text: 'Petrolida Talks 2021',
        },
        {
            route: 'city-tour',
            img: 'citytour',
            text: 'City Tour',
        },
        {
            route: 'gala-dinner',
            img: 'galdin',
            text: 'Gala Dinner',
        },
    ];
    return (
        <div className='grid md:grid-cols-3 gap-4 justify-center md:mx-16'>
            {noncomps.map(({ route, img, text }) => (
                <Card non key={route} img={img} text={text} route={route} />
            ))}
        </div>
    );
}
