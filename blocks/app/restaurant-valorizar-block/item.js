import React from 'react';

function Item(props) {
  // const temp = [ icono_star_off, icono_star_off, icono_star_off, icono_star_off, icono_star_off ];
  // const calidad_iconos_jsx  = temp.map((element, index) => { return(index < Number(props.cantidad)  ? icono_star : icono_star_off) })
  return(
    <div className="restaurant-valoracion__item">
      <div className="restaurant-valoracion__item-texto">
        {props.texto}
      </div>
      <div className="restaurant-valoracion__item-valoracion">
        <span className="restaurant-valoracion__data cantidad-ph">
          { props.cantidad }
        </span>
        {
          props.cantidad
        }
      </div>
    </div>
  )
}

export default Item;