import { useEffect, useState, useRef } from 'react'
import { getComment, setItem } from '../../service/AvitoService'
import './modal.scss'

const Modal = (props)=> {

    const [alert, setAlert] = useState(false);
    const [itemInput, setItemInput] = useState('');
    const[comment, setComment] = useState([])
    
    const mounted = useRef(true);



    useEffect(() => {
        if(comment.length && !alert) {
          return;
        }
        getComment()
          .then(items => {
            if(mounted) {
                setComment(items)
            }
          })
        return () => mounted = false;
      }, [alert, comment])



//    useEffect(() => {
//     if(alert) {
//       setTimeout(() => {
//         if(mounted.current){
//             setAlert(false);
//         }
        
//       }, 1000)
//     }
//   }, [alert])



   const handleSubmit = (e) => {
    e.preventDefault();
    setItem(itemInput)
    .then(() => {

        if(mounted.current){
            setItemInput('');
            setAlert(true);
        }
        
      })
  }; //?

    return(
        <div className={`modal__wrapper ${props.isOpened ? 'open': 'close'}`} style ={{...props.style}}>
            <div className='modal__body'>
                <div className='modal__close' onClick={props.onModalClose}>x</div>
               
          
                <h2>{props.title}</h2>
                <hr />
                {props.children}
                
                

                {props.imageId > 0 && <div className="comment">
                    <h2>Коментарии:</h2>
                    <ul>
                        {
                        getComment(props.imageId).then(item => {
                            console.log(item)
                            item.comments.forEach(item =>{
                            <li key={item.id}>
                                {item.item}

                            </li>
                            })
                        })
                        }
                    </ul>

                {alert && <h3> Коментарий отправлен </h3>}
                </div>}
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