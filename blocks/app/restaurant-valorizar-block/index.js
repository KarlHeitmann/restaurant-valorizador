import block_icons from '../icons/index';
import Item from './item';
import './editor.scss';
import ItemPersonalizable from './item_personalizable';

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
  RangeControl,
} = wp.components;

registerBlockType('udemy/restaurant-valoracion', { // TODO: cambiar este udemy
  title: __('Valorización de Restaurants', 'restaurant-valorizador'),
  description: __('Provee de valorización para los servicios de un restaurant', 'restaurant-valorizador'),
  // common, formatting, layout, widgets, embed
  category: 'common',
  // icon: 'dashicons-fullscreen-exit-alt'
  // icon: 'welcome-learn-more',
  icon: block_icons.nimman,
  keywords: [
    __('Comida', 'restaurant-valorizador'),
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
    ubicacion: {
      type: 'string',
      source: 'text',
      default: '2',
      selector: '.ubicacion-ph'
    },
    calidad: {
      type: 'string',
      source: 'text',
      default: '2',
      selector: '.calidad-ph'
    },
    precio: {
      type: 'string',
      source: 'text',
      default: '2',
      selector: '.precio-ph'
    },
    personalizable_caption: {
      type: 'string',
      source: 'text',
      default: '',
      selector: '.personalizable-caption-ph'
    },
    personalizable_value: {
      type: 'string',
      source: 'text',
      default: '2',
      selector: '.personalizable-value-ph'
    },
    link_mas: {
      type: 'string',
      source: 'text',
      default: '#',
      selector: '.link-footer-ph'
    }
  },
  edit: (props) => {
    const items = [
      {
        cantidad: props.attributes.cantidad,
        texto: "Cantidad de la comida:",
        clase: "restaurant-valoracion__data cantidad-ph"
      },
      {
        cantidad: props.attributes.calidad,
        texto: "Calidad de la comida:",
        clase: "restaurant-valoracion__data calidad-ph"
      },
      {
        cantidad: props.attributes.servicio,
        texto: "Servicio:",
        clase: "restaurant-valoracion__data servicio-ph"
      },
      {
        cantidad: props.attributes.ubicacion,
        texto: "Ubicación:",
        clase: "restaurant-valoracion__data ubicacion-ph"
      },
      {
        cantidad: props.attributes.precio,
        texto: "Precio:",
        clase: "restaurant-valoracion__data precio-ph"
      }
    ]
    return [
      <InspectorControls>
        <PanelBody title={__('Reseña en un vistazo', 'restaurant-valorizador')}>
          <PanelRow>
            <p>{__('Valorizaciones del bloque', 'restaurant-valorizador')}</p>
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
            label={__('Ubicación', 'restaurant-valorizador')}
            value={Number(props.attributes.ubicacion)}
            onChange={ubicacion => { props.setAttributes({ ubicacion })}}
            min={0} max={5}
          />
          <RangeControl
            label={__('Calidad', 'restaurant-valorizador')}
            value={Number(props.attributes.calidad)}
            onChange={calidad => { props.setAttributes({ calidad })}}
            min={0} max={5}
          />
          <RangeControl
            label={__('Precio', 'restaurant-valorizador')}
            value={Number(props.attributes.precio)}
            onChange={precio => { props.setAttributes({ precio })}}
            min={0} max={5}
          />
          <TextControl
            label={__("Texto de valorización personalizable", 'restaurant-valorizador')}
            value={ props.attributes.personalizable_caption }
            onChange={ personalizable_caption => { props.setAttributes({ personalizable_caption }) } }
          />
          <RangeControl
            label={__('Valor de item personalizable', 'restaurant-valorizador')}
            value={Number(props.attributes.personalizable_value)}
            onChange={ personalizable_value => { props.setAttributes({ personalizable_value })}}
            min={0} max={5}
          />
          <TextControl
            label={__("Link ver más...", 'restaurant-valorizador')}
            value={ props.attributes.link_mas }
            onChange={ link_mas => { props.setAttributes({ link_mas }) } }
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
        <div class="restaurant-valoracion restaurant-valoracion-v2">
          <div class="restaurant-valoracion__titulo">
            <strong>
              🍽 Reseña en un vistazo*
            </strong>
          </div>
          {
            items.map(item => <Item data_item={item}/>)
          }
          {
            props.attributes.personalizable_caption != '' && <ItemPersonalizable
              data_item={{
                cantidad: props.attributes.personalizable_value,
                texto: props.attributes.personalizable_caption,
                clase_caption: "restaurant-valoracion__data personalizable-caption-ph",
                clase_value: "restaurant-valoracion__data personalizable-value-ph",
              }}
            />
          }
          <div class="restaurant-valoracion__footer">
            <a href={props.attributes.link_mas}>
              *Conoce el significado de cada puntuación.
            </a>
          </div>

        <div class="restaurant-valoracion-v2-right">
        </div>
        <div class="restaurant-valoracion-v2-down">
        </div>
        </div>
      </div>
    ];
  },
  save: (props) => {
    const items = [
      {
        cantidad: props.attributes.cantidad,
        texto: "Cantidad de la comida:",
        clase: "restaurant-valoracion__data cantidad-ph"
      },
      {
        cantidad: props.attributes.calidad,
        texto: "Calidad de la comida:",
        clase: "restaurant-valoracion__data calidad-ph"
      },
      {
        cantidad: props.attributes.servicio,
        texto: "Servicio:",
        clase: "restaurant-valoracion__data servicio-ph"
      },
      {
        cantidad: props.attributes.ubicacion,
        texto: "Ubicación:",
        clase: "restaurant-valoracion__data ubicacion-ph"
      },
      {
        cantidad: props.attributes.precio,
        texto: "Precio:",
        clase: "restaurant-valoracion__data precio-ph"
      }
    ]
    return (
      <div className={ `align${props.attributes.block_alignment}`}>
        <div class="restaurant-valoracion restaurant-valoracion-v2">
          <div class="restaurant-valoracion__titulo">
            <strong>
              Reseña en un vistazo*
            </strong>
          </div>
          {
            items.map(item => <Item data_item={item}/>)
          }
          {
            props.attributes.personalizable_caption != '' && <ItemPersonalizable
              data_item={{
                cantidad: props.attributes.personalizable_value,
                texto: props.attributes.personalizable_caption,
                clase_caption: "restaurant-valoracion__data personalizable-caption-ph",
                clase_value: "restaurant-valoracion__data personalizable-value-ph",
              }}
            />
          }
          <div class="restaurant-valoracion__footer">
            <a href={props.attributes.link_mas}>
              *Conoce el significado de cada puntuación.
            </a>
          </div>
        </div>

        <div class="restaurant-valoracion-v2-right">
        </div>
        <div class="restaurant-valoracion-v2-down">
        </div>
      </div>
    );
  }
});