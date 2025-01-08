import axios from 'axios';
import { useEffect, useState } from 'react';

type data = {
    id: number;
    name: string;
}



const FetchApi = () =>{
    const [items, setItems] = useState<data[]>([]);
    useEffect(() => {
        axios.get('https://6337e3045327df4c43d96a10.mockapi.io/user')
        .then(res => {
            setItems(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div>
            <h1>Fetch API</h1>
            {items.map((data, idx) => (
                <div key={idx}>
                    <span>{data.id}. {data.name}</span>
                </div>
            ))}
        </div>
    )
}

export default FetchApi