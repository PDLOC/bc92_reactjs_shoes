
import Card from "./card"

export default function ListCards(props) {

    const renderListShoes = () => {
        const { listShoesProps, onDetail, selectedShoes } = props;
        return listShoesProps.map((item) => {
            return <Card key={item.id} shoesProp={item} onDetail={onDetail} selectedShoes={selectedShoes} />
        })
    }

    return (
        <div className="container mx-auto my-10">
            <div className="grid grid-cols-3 xl:grid-cols-6 sm:grid-cols-2 2sm:grid-cols-2 gap-5">
                {renderListShoes()}
            </div>
        </div>
    )
}
