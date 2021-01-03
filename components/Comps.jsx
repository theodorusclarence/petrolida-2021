import Card from './Card';

export default function Comps() {
    const comps = [
        {
            route: 'oil-rig-design-competition',
            img: 'ordc',
            text: 'Oil Rig Design Competition',
        },
        {
            route: 'fracturing-fluid-design-competition',
            img: 'ffdc',
            text: 'Fracturing Fluid Design Competition',
        },

        {
            route: 'stock-trading-competition',
            img: 'stc',
            text: 'Stock Trading Competition',
        },
        {
            route: 'petrosmart-competition',
            img: 'petrosmart',
            text: 'Petrosmart Competition',
        },
        {
            route: 'case-study-competition',
            img: 'csc',
            text: 'Case Study Competition',
        },
        {
            route: 'paper-competition',
            img: 'paper',
            text: 'Paper Competition',
        },
        {
            route: 'business-case-competition',
            img: 'bcc',
            text: 'Business Case Competition',
        },
    ];
    return (
        <div className='comps-group grid md:grid-cols-3 gap-4 justify-center md:justify-around md:mx-16'>
            {comps.map(({ route, img, text }) => (
                <Card key={route} img={img} text={text} route={route} />
            ))}
        </div>
    );
}
