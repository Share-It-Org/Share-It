import React from 'react'

const CategoryButton = ({image, title, id}) => {
    let idAttribute = '';
    
    if(id) {
        idAttribute = id;
    }

  return (
    <div className="category-button" id={idAttribute}>
        <img src={image} />
        {title}
    </div>
  )
}

export default CategoryButton