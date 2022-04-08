import React from 'react';
import card from './card.module.css';

function PromotionCard({promotion}){

    return(
        <div className={card.promotion_card}>
            <img className={card.promotion_card_image} src={promotion.imageUrl} alt={promotion.title}  />
            <div >
                <h1>{promotion.title}</h1>
                <span>R$ {promotion.price}</span>
                <footer>
                    
                    <div>
                        {/* If antigo */}
                        {promotion.comments.length > 0 && (
                            <div>
                                "{promotion.comments[0].comment}"
                            </div>
                        )}
                    </div>
                    <div>
                        {promotion.comments.length}{' '}
                        {promotion.comments.length >1 ? 'Comentários' : 'Comentário'}
                    </div>

                </footer>
                <a href={promotion.url} target="_blank">II PARA O SITE</a>

            </div>

        </div>


    );
}
export default PromotionCard;