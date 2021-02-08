<?php

function rv_enqueue_editor_assets() {
  wp_register_script(
    'rv_blocks_bundle',
    plugins_url('/blocks/dist/bundle.js', RESTAURANT_VALORIZADOR_PLUGIN_URL ),
    ['wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor', 'wp-api'],
    filemtime(plugin_dir_path( RESTAURANT_VALORIZADOR_PLUGIN_URL ) . '/blocks/dist/bundle.js')
  );

  wp_enqueue_script( 'rv_blocks_bundle' );
}

function rv_enqueue_block_assets() {
  wp_register_style(
    'rv_blocks',
    plugins_url( '/blocks/dist/blocks-main.css', RESTAURANT_VALORIZADOR_PLUGIN_URL)
  );

  wp_enqueue_style('rv_blocks');
}
