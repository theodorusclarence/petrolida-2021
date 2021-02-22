import Card from './Card';
import gsap, { Power3 } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

export default function Comps({ register }) {
    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '#competition',
                start: 'top 35%',
            },
        }).from('.card-comp', {
            opacity: 0,
            duration: 1,
            y: 100,
            stagger: 0.1,
            ease: Power3.easeOut,
        });
    }, []);

    const comps = [
        {
            route: 'oil-rig-design-competition',
            img: 'ordc',
            text: 'Oil Rig Design Competition',
            type: 'comps',
        },
        {
            route: 'fracturing-fluid-design-competition',
            img: 'ffdc',
            text: 'Fracturing Fluid Design Competition',
            type: 'comps',
        },

        {
            route: 'stock-trading-competition',
            img: 'stc',
            text: 'Stock Trading Competition',
            type: 'comps',
        },
        {
            route: 'petrosmart-competition',
            img: 'petrosmart',
            text: 'Petrosmart Competition',
            type: 'comps',
        },
        {
            route: 'case-study-competition',
            img: 'csc',
            text: 'Case Study Competition',
            type: 'comps',
        },
        {
            route: 'paper-competition',
            img: 'paper',
            text: 'Paper Competition',
            type: 'comps',
        },
        {
            route: 'business-case-competition',
            img: 'bcc',
            text: 'Business Case Competition',
            type: 'comps',
        },
    ];
    return (
        <div className='comps-group grid md:grid-cols-3 gap-4 justify-center md:justify-around md:mx-16'>
            {comps.map(({ route, img, text, type }) => (
                <Card register={register} key={route} img={img} text={text} route={route} type={type}/>
            ))}
        </div>
    );
}
