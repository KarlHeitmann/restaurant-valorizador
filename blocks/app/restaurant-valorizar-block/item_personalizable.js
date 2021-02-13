import React from 'react';
import block_icons from '../icons/index';



function ItemPersonalizable(props) {
  const {
    cantidad,
    texto,
    clase_caption,
    clase_value,
  } = props.data_item;
  const temp = [ block_icons.nimman_off, block_icons.nimman_off, block_icons.nimman_off, block_icons.nimman_off, block_icons.nimman_off ];
  const calidad_iconos_jsx  = temp.map((element, index) => { return(index < Number(cantidad)  ? block_icons.nimman : block_icons.nimman_off) })
  return(
    <div className="restaurant-valoracion__item">
      <div className="restaurant-valoracion__item-texto">
        {texto}
      </div>
      <div className="restaurant-valoracion__item-valoracion">
        <span
          className={clase_caption}>
          { texto }
        </span>
        <span
          className={clase_value}>
          { cantidad }
        </span>
        {
          calidad_iconos_jsx
        }
      </div>
    </div>
  )
}

export default ItemPersonalizable;
