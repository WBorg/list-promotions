import React from 'react';
import PromotionCard from '../Card/Card';
import list from './List.module.css'


const PromotionList = ({loading, promotions}) =>{
    if (loading){
        return <div>carregando...</div>
    }

    return (
        <>
          {promotions.map( (promotions) => (
              <PromotionCard promotion={promotions} key={promotions.id} className={list.promototionList}/>
            )
            )
          } 
        </>
    )
}

export default PromotionList
