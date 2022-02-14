import { useEffect, useState, useRef } from 'react'
import { getComment, setItem } from '../../service/AvitoService'
import './modal.scss'

const Modal = (props)=> {

    const [alert, setAlert] = useState(false);
    const [itemInput, setItemInput] = useState('');
    const [comments, setComments] = useState([]);
    
    const mounted = useRef(true);

    

    useEffect(() => {
        if (props.imageId) {
            setComments([]);
            getComment(props.imageId).then(item => {
                setComments(item.comments || [])
            })
        }
    }, [props.imageId])

    useEffect(() => {
        if(alert) {
          setTimeout(() => {
            setAlert(false);
          }, 1000)
        }
      }, [alert])

      

   const handleSubmit = (e) => {
    e.preventDefault();
    setItem({id: props.imageId, comments: [...comments, {item: itemInput, id: comments.length}]})
    .then(result => {

        if(mounted.current){
            setItemInput('');
            setComments(result.comments || [])
            setAlert(true);
        }
        
      })
  };



    return(

        <div className={`modal__wrapper ${props.isOpened ? 'open': 'close'}`} style ={{...props.style}}>
            <div className='modal__body'>
                <div className='modal__close' onClick={props.onModalClose}>x</div>
          
                <h2>{props.title}</h2>
                <hr />
                {props.children}

                <div className="comment">
                    <h2>Коментарии:</h2>
                    <ul>
                        {comments.map(comment => <li>{comment.item}</li>)}
                    </ul>

                {alert && <h3> Коментарий отправлен </h3>}
                </div>
                <form onSubmit={handleSubmit}>
                <label>
                    <p>Отставить коментарий</p>
                    <input type="text"  onChange={event => setItemInput(event.target.value)} value={itemInput}/>
                </label>
                <button type="submit">Отправить</button>
                </form>
                
            </div>
        </div>
       
    )
}

export default Modal;