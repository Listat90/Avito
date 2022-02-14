import React, { useEffect, useState } from 'react';
import './photoList.scss'
import Modal from '../modal/Modal';


import {getList} from '../../service/AvitoService'



const PhotoList = ()=>{
    const [list, setList] = useState([])
    const [modal, setModal] = useState({
        modalOpen: false,
        imageId: 0,
        imageUrl: ''
      })


    useEffect(()=>{
        getList()
        .then(items => {
            console.log(items)
            setList(items)
        })
    }, [])
        return (
           
                <div className='photo_list'>
                    <ul className='photo_grid'>
                        {list.map(item => (
                   
                        <li className='photo_item' key={item.name}
                        onClick = {()=>{
                            console.log('click')
                            setModal({imageId: item.id, imageUrl: item.url, modalOpen: true})
                        }
                        }
                        >
                           
              
                            <img  src={item.url} />

                            
                         </li>
                         

                    
                    
                ))}
            </ul>

            <Modal
          
                title={'Modal title'}
                
                isOpened = {modal.modalOpen}
                imageId = {modal.imageId}
                onModalClose = {()=> setModal({...modal, modalOpen: false})}>
                    <img  src={modal.imageUrl} />
                    
            </Modal>
            
                </div>
          
            

                
        )


  
}
export default PhotoList;
 