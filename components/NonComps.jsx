import Card from './Card';
import gsap, { Power3 } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

export default function NonComps({ register, petro }) {
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
            img: 'pt',
            text: 'Petrolida Talks 2021',
        },
        {
            route: 'city-tour',
            img: 'ct',
            text: 'City Tour',
        },
        {
            route: 'gala-dinner',
            img: 'gd',
            text: 'Gala Dinner',
        },
    ];

    // only show petrotalk
    if (petro) {
        noncomps.pop();
        noncomps.pop();
    }

    return (
        <div className={`grid justify-center gap-4 ${petro ? '' : 'md:grid-cols-3'} md:mx-16`}>
            {noncomps.map(({ route, img, text }) => (
                <Card register={register} non key={route} img={img} text={text} route={route} />
            ))}
        </div>
    );
}
