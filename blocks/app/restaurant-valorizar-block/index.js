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
  RangeControl,
} = wp.components;

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
    return (
      <div className={ `align${props.attributes.block_alignment}`}>
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
    );
  }
});