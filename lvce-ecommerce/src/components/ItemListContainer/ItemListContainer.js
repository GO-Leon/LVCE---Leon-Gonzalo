import Card from '../Card/Card'

const ItemList = () => {

    return(
        <div className="cardContainer">
            <Card img='' title='Sarten' price={1000} detail='Sarten con mango'/>
            <Card img='' title='Cacerola' price={3000} detail='Cacerola de 28cm'/>
            <Card img='' title='Bifera' price={2500} detail='Dimensiones ideales para familias numerosas'/>
            <Card img='' title='Flip' price={2000} detail='Cocina de ambos lados, super facil'/>
        </div>
    ) 
}

export default ItemList;