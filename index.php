<?php
/*
 * Plugin Name: Restaurant valorizador
 * Description: Un plugin para valorizar los restaurants.
 * Version: 1.0
 * Author: Karl Heitmann
 * Author URI: https://karlheitmann.github.io
 * Text domain: restaurant-valorizador
 */

// Setup
define( 'RESTAURANT_VALORIZADOR_PLUGIN_URL', __FILE__);

// Includes
include( 'blocks/enqueue.php');

// Hooks
add_action('enqueue_block_editor_assets', 'rv_enqueue_editor_assets');
add_action('enqueue_block_assets', 'rv_enqueue_block_assets');
