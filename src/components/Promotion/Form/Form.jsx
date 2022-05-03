import React , {useState , useEffect} from 'react';
import formCss from './form.module.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const initialValue = {
    title: "",
    imageUrl: "",
    url: "",
    price: 0

};

const PromotionForm = ({id}) => {

    const [values, setValues] = useState(initialValue);
    const navigate = useNavigate();
    console.log(values)
    
    function onChange(ev){

        const {name, value} = ev.target;
        //const {title, imageUrl, url, price} = initialValue

        // console.log({name, value});
        setValues({...values, [name]: value })
    }

    function onSubmit(ev){
        ev.preventDefault();

        const metodo = id ? 'put' : 'post';
        const url = id ? `http://localhost:3004/promotions/${id}` : `http://localhost:3004/promotions/`

        axios[metodo](url,values)
            .then((response) => {
                navigate('/');
            })

    }

    useEffect(
        ()=>{
            if(id){
                axios.get(`http://localhost:3004/promotions/${id}`)
                    .then((response) => {
                        setValues(response.data)
                    })
            }
        }, []
    )



    return(
        <div>
            <h1>Promo Show</h1>
            <h2>Nova Promoção</h2>
            <form onSubmit={onSubmit}>
                <div className={formCss.promotionFormGroup}>
                    <label htmlFor="title">Título</label>
                    <input type="text" id="title" name="title" value={values.title} onChange={onChange}/>
                </div>
                

                <div className={formCss.promotionFormGroup}>
                    <label htmlFor="imageUrl">Url Imagem</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={values.title} onChange={onChange}/>
                </div>
                <div className={formCss.promotionFormGroup}>
                    <label htmlFor="url">Url</label>
                    <input type="text" id="url" name="url" value={values.imageUrl} onChange={onChange}/>
                </div>

                <div className={formCss.promotionFormGroup}>
                    <label htmlFor="price">Preço</label>
                    <input type="number" step="any" id="price" name="price" value={values.price} onChange={onChange}/>
                </div>

                <div>
                    <button type="submit">Salvar</button>
                </div>

                

            </form>
        </div>
    )
}

export default PromotionForm;