
import React from 'react'
import ListCards from './list-cards'
import Data from './data.json'
import { useState } from 'react'

export default function ShoppingShoes() {

    const [listShoes, setShoes] = useState(Data);
    const [selectedShoes, setSelectedShoes] = useState(Data[0]);

    const handleDetail = (shoes) => {
        setSelectedShoes(shoes);
        console.log(selectedShoes);

    }

    return (
        <div>
            <h1 className="text-center text-3xl text-red-500 font-bold mt-5">Shopping Shoes</h1>
            <ListCards listShoesProps={listShoes} onDetail={handleDetail} selectedShoes={selectedShoes} />

        </div>
    )
}
