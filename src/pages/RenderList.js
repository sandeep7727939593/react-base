const data = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
];

const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
}, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
}, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
}, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
}, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
}];


const RenderList = () => {
    const list = data.map((item) => <li>{item}</li>)
    const filterPeople = people.filter(({id, name, profession}) => profession !== 'astrophysicist');

    const filterList = filterPeople.map(({id, name, profession}) => (
        <li>
            <h3>{name}</h3>
            <p>{profession}</p>
        </li>
    ))

    return <div>
        <h1>
            Render List Using Map/Filter
        </h1>
        <ul>{list}</ul>
        <h2>Filtering arrays of items</h2>
        <ul>{filterList}</ul>
        <h2>Keeping list items in order with key</h2>
    </div>
}

export default RenderList;