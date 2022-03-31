import React,{useState, useEffect} from 'react'
import { detailList } from './ItemDetailList';
import ProductDetail from '../ItemDetail';


const ItemDetail = () => {
    const [details, setDetails] = useState([]);

    const getDetails = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(detailList);
        }, 2000);
      });

      const getDetailList = async () => {
        try {
          const res = await getDetails;
          setDetails(res);
        } catch (err) {
          console.log(err);
        }
      };

    useEffect(() => {
        getDetailList();
      }, []);
      

    return (
        <div>
            {details.map( ( detail ) => {
                const {id} = detail
                return(
                    <ProductDetail props={detail} key={id}/>
                )
            })}
        </div>


      );







}

export default ItemDetail