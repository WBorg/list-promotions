 import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import formCss from './Form.module.css';
import UIButton from 'components/UI/Button/Button';
import api from 'services/api';

//2
const initialValue = {
  title: '',
  url: '',
  image: '',
  price: 0,
}



const PromotionForm = ( {id}) =>{
    const [values, setValues] = useState(id ? null: initialValue);
    const [acao, setAcao] = useState('Nova');
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
          api.get(`/promotions/${id}`)
            .then((response) => {
              setValues(response.data);
              setAcao('Editar')
            })
        }
      }, []);
    
    function onSubmit(ev) {
        ev.preventDefault(); //não execute o comportamento default do form
    
        const method = id ? 'put' : 'post';
        const url = id
          ? `/promotions/${id}`
          : '/promotions'
    
        api[method](url, values)
          .then((response) => {
            navigate('/');
          });


    }
    
      function onChange(ev) {
        const { name, value } = ev.target;
        setValues({ ...values, [name]: value });
      }
    
    function renderBtn(values) {
      console.log(values);
      if (values == initialValue){
        return(
          <div className={formCss.promotionFormGroupBtn}>
          <UIButton type="submit" component="button" theme="contained-primary">Salvar</UIButton>
          <UIButton to="/" component={Link} theme="contained-warning" >Cancelar</UIButton>
          </div>
        )
      } else {
        return(
          <div className={formCss.promotionFormGroupBtn}>
          <UIButton type="submit" component="button" >Salvar</UIButton>
          <UIButton to="/" component={Link} theme="bordered-warning" >Cancelar</UIButton>
          </div>
        )
      }
    }

    return( 
        <div>
        <h1>Buscapé Promoções</h1>
        <h2>{acao} Promoção</h2>
        {!values
          ? (
            <div>Carregando...</div>
            ) : (
            <div>
              <div>
                <img className={formCss.promotionImage}  src={values.imageUrl} alt={values.title}  />
              </div>
            <form onSubmit={onSubmit}> 
              
              <div className={formCss.promotionFormGroup}>
                <label htmlFor="title">Título</label>
                 <input id="title" name="title" type="text"  onChange={onChange} value={values.title} /> 
              </div>
              <div className={formCss.promotionFormGroup}>
                <label htmlFor="url">Link</label>
                <input id="url" name="url" type="text" onChange={onChange} value={values.url}/> 
              </div>
              <div className={formCss.promotionFormGroup}>
                <label htmlFor="imageUrl">Imagem (URL)</label>
                <input id="imageUrl" name="imageUrl" type="text" onChange={onChange}  value={values.imageUrl}/> 
              </div>
              <div className={formCss.promotionFormGroup}>
                <label htmlFor="price">Preço</label>
                <input id="price" name="price" type="number" step="any" onChange={onChange}  value={values.price}/> 
              </div>
                {renderBtn(values)}
            </form>
            </div>
           )} 
      </div>    
      )
}

export default PromotionForm;