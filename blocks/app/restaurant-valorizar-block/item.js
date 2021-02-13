import React from 'react';

function Item(props) {
  return(
    <div class="restaurant-valoracion__item">
      <div class="restaurant-valoracion__item-texto">
        {props.texto}
      </div>
      <div class="restaurant-valoracion__item-valoracion">
        <span class="restaurant-valoracion__data cantidad-ph">
          {/* { props.attributes.cantidad } */}
        </span>
        {
          props.cantidad
        }
      </div>
    </div>
  )
}

export default Item;