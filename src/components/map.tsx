type TItems = {
    id: number;
    name: string;
}


const items: TItems[] = [
    {
        id: 1,
        name: 'Item 1'
    },
    {
        id: 2,
        name: 'Item 2'
    },
    {
        id: 3,
        name: 'Item 3'
    },
    {
        id: 4,
        name: 'Item 4'
    }
]
const MapData = () => {
    return (
        <div>
            <h1>Item List</h1>
            {items.map((data, idx) => (
                <div key={idx}>
                    <span>{data.id}. {data.name}</span>
                </div>
            ))}
        </div>
    )
}

export default MapData