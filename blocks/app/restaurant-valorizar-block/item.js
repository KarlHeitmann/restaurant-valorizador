import React from 'react';

const icono_star = <svg width="24" height="28" viewbox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M24 27.7846L12 7L0 27.7846H24ZM17.2861 23.8903L11.957 14.6599L6.62776 23.8903H17.2861Z" fill="#3C6F8D"/>
  <path d="M7 12L5.5 10L12 1L18 10L16.5 11.5L12 4.5L7 12Z" fill="#3C6F8D" stroke="black"/>
</svg>

const icono_star_off = <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g opacity="0.1">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M24 27.7846L12 7L0 27.7846H24ZM17.2861 23.8903L11.957 14.6599L6.62776 23.8903H17.2861Z" fill="#3C6F8D"/>
    <path d="M7 12L5.5 10L12 1L18 10L16.5 11.5L12 4.5L7 12Z" fill="#3C6F8D" stroke="black"/>
  </g>
</svg>

function Item(props) {
  const {
    cantidad,
    texto,
    clase
  } = props.data_item;
  const temp = [ icono_star_off, icono_star_off, icono_star_off, icono_star_off, icono_star_off ];
  const calidad_iconos_jsx  = temp.map((element, index) => { return(index < Number(cantidad)  ? icono_star : icono_star_off) })
  return(
    <div className="restaurant-valoracion__item">
      <div className="restaurant-valoracion__item-texto">
        {texto}
      </div>
      <div className="restaurant-valoracion__item-valoracion">
        <span
          className={clase}>
          { cantidad }
        </span>
        {
          calidad_iconos_jsx
        }
      </div>
    </div>
  )
}

export default Item;