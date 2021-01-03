import Card from './Card';

export default function NonComps() {
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
