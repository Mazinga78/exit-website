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
    add_action('admin_menu', array($this, 'adminPage'));
    add_action('admin_init', array($this, 'settings'));
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
}

$exitWebsitePlugin = new exitWebsitePlugin();
