<?php
/*
    Plugin Name: Exit Website
    Description: On External Webiste link click open a modal popup with confirm exit action
    Version: 1.0
    Author: Diego Pecivalle 
  */


class exitWebsitePlugin
{
  function __construct()
  {
    add_action('wp_enqueue_scripts', array($this, 'wpew_scripts'));
    //add_action('admin_menu', array($this, 'adminPage'));
    //add_action('admin_init', array($this, 'settings'));
    add_action('get_footer', array($this, 'wpew_popup'));
  }

  function adminPage()
  {
    add_options_page('Exit Website Settings', 'Exit Website', 'manage_options', 'exit-website-settings-page', array($this, 'exitHTML'));
  }

  function exitHTML()
  { ?>
    ciao ecco il mio pimoplugin
  <?php
  }

  function settings()
  {
    register_setting('exitWebsite', 'ews_title', array(
      'sanitize_callback' => 'sanitize_text_field',
      'default' => 'Ecco il mio titolo'
    ));


    register_setting('exitWebsite', 'ews_text', array(
      'sanitize_callback' => 'sanitize_text_field',
      'default' => 'stai lasciando il sito, clicca su confemra per lasciare, opure annula per restare',
    ));
  }

  function wpew_scripts()
  {
    wp_enqueue_style('wpew_style', plugin_dir_url(__FILE__) . '/build/style-index.css');
    wp_enqueue_script('wpew_scripts', plugin_dir_url(__FILE__) . '/build/index.js', array(), '1.0.0', true);
  }

  function wpew_popup()
  {
  ?>

    <div class="exit-popup exit-hidden">
      <span class="exit-close-x">&#10006;</span>
      <h3>Attenzione</h3>
      <p>
        Si avvsa che state lascando questo sito Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Distinctio, eaque.
      </p>
      <p id="exit-timer-text" class="exit-timer-hidden">
        Il reindirizzamento al sito <span class="exit-href-print"></span> avverà automaticamente tra <span id="exit-timer"></span>
        s
      </p>
      <div class="exit-buttons">
        <div class="exit-close exit-btn">Chiudi</div>
        <a href="#" class="exit-go-to-btn exit-btn" target="_blank">Vai al sito</a>
      </div>
    </div>
    <div class="exit-overlay exit-hidden"></div>
<?php

  }
}

$exitWebsitePlugin = new exitWebsitePlugin();
