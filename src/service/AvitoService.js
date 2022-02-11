
//получение картинок
export function getList() {
    return fetch('https://boiling-refuge-66454.herokuapp.com/images')
      .then(data => data.json())
  }



 //получение коментов

  export function getComment(id) {
    return fetch(`http://localhost:3333/comment/${id}`)
      .then(data => data.json())
  }


//добавление коментов

export function setItem(item) {
  console.log(item)
  return fetch(`http://localhost:3333/comment/${item.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  })
    .then(data => data.json())
 }
  