import block_icons from '../icons/index';
import Item from './item';
import './editor.scss';

const {registerBlockType} = wp.blocks;
const {__} = wp.i18n;

const {
  InspectorControls,
  BlockControls,
  AlignmentToolbar,
  BlockAlignmentToolbar,
} = wp.blockEditor;
const {
  PanelBody,
  PanelRow,
  TextControl,
  SelectControl,
  RangeControl,
} = wp.components;

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


registerBlockType('udemy/restaurant-valoracion', {
  title: __('Restaurant valoracion', 'restaurant-valorizador'),
  description: __('Provides a valoration for a restaurant service', 'udemy'),
  // common, formatting, layout, widgets, embed
  category: 'common',
  // icon: 'dashicons-fullscreen-exit-alt'
  // icon: 'welcome-learn-more',
  icon: block_icons.wapuu,
  keywords: [
    __('Food', 'restaurant-valorizador'),
    __('Restaurant', 'restaurant-valorizador'),
    __('Gourmet', 'restaurant-valorizador'),
  ],
  supports: {
    html: false,
  },
  attributes: {
    cantidad: {
      // type: 'integer',
      type: 'string',
      source: 'text',
      default: '2',
      selector: '.cantidad-ph'
    },
    servicio: {
      type: 'string',
      source: 'text',
      default: '2',
      selector: '.servicio-ph'
    },
    calidad: {
      type: 'string',
      source: 'text',
      default: '2',
      selector: '.calidad-ph'
    },
  },
  edit: (props) => {
    return [
      <InspectorControls>
        <PanelBody title={__('Resena en un vistazo', 'restaurant-valorizador')}>
          <PanelRow>
            <p>{__('Configure the contents of your block here', 'restaurant-valorizador')}</p>
          </PanelRow>
          <RangeControl
            label={__('Cantidad', 'restaurant-valorizador')}
            value={Number(props.attributes.cantidad)}
            onChange={cantidad => { props.setAttributes({ cantidad })}}
            min={0} max={5}
          />
          <RangeControl
            label={__('Servicio', 'restaurant-valorizador')}
            value={Number(props.attributes.servicio)}
            onChange={servicio => { props.setAttributes({ servicio })}}
            min={0} max={5}
          />
          <RangeControl
            label={__('Calidad', 'restaurant-valorizador')}
            value={Number(props.attributes.calidad)}
            onChange={calidad => { props.setAttributes({ calidad })}}
            min={0} max={5}
          />
        </PanelBody>
      </InspectorControls>,
      <div className={ props.className }>
        <BlockControls>
          <BlockAlignmentToolbar
            value={props.attributes.block_alignment}
            onChange={(new_val) => {
              props.setAttributes({block_alignment: new_val})
            }}
          />
          <AlignmentToolbar
            value={props.attributes.text_alignment}
            onChange={(new_val) => {
              props.setAttributes({text_alignment: new_val});
            }}
          />
        </BlockControls>
        <div class="restaurant-valoracion">
          <div class="restaurant-valoracion__titulo">
            <strong>
              Reseña en un vistazo*
            </strong>
          </div>
          <Item
            cantidad={props.attributes.cantidad}
            texto={"Cantidad de la comida"}
            clase={"restaurant-valoracion__data cantidad-ph"}
            />
          <Item
            cantidad={props.attributes.servicio}
            texto={"Servicio"}
            clase={"restaurant-valoracion__data servicio-ph"}
            />
          <Item
            cantidad={props.attributes.calidad}
            texto={"Calidad de la comida"}
            clase={"restaurant-valoracion__data calidad-ph"}
            />
        </div>
      </div>
    ];
  },
  save: (props) => {
    const temp = [ icono_star_off, icono_star_off, icono_star_off, icono_star_off, icono_star_off ];
    const cantidad_iconos_jsx = temp.map((element, index) => { return(index < Number(props.attributes.cantidad) ? icono_star : icono_star_off) })
    const servicio_iconos_jsx = temp.map((element, index) => { return(index < Number(props.attributes.servicio) ? icono_star : icono_star_off) })
    const calidad_iconos_jsx  = temp.map((element, index) => { return(index < Number(props.attributes.calidad)  ? icono_star : icono_star_off) })
    return (
      <div className={ `align${props.attributes.block_alignment}`}>
        <div class="restaurant-valoracion">
          <div class="restaurant-valoracion__titulo">
            <strong>
              Reseña en un vistazo*
            </strong>
          </div>
          <div class="restaurant-valoracion__item">
            <div class="restaurant-valoracion__item-texto">Cantidad de la comida: </div>
            <div class="restaurant-valoracion__item-valoracion">
              <span class="restaurant-valoracion__data cantidad-ph">{ props.attributes.cantidad }</span>
              {
                cantidad_iconos_jsx
              }
            </div>
          </div>
          <div class="restaurant-valoracion__item">
            <div class="restaurant-valoracion__item-texto">Servicio: </div>
            <div class="restaurant-valoracion__item-valoracion">
              <span class="restaurant-valoracion__data servicio-ph">{ props.attributes.servicio }</span>
              {
                servicio_iconos_jsx
              }
            </div>
          </div>
          <div class="restaurant-valoracion__item">
            <div class="restaurant-valoracion__item-texto">Calidad de la comida: </div>
            <div class="restaurant-valoracion__item-valoracion">
              <span class="restaurant-valoracion__data calidad-ph">{ props.attributes.calidad }</span>
              { calidad_iconos_jsx }
            </div>
          </div>
        </div>
      </div>
    );
  }
});