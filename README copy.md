# Visualizer

A HTML5 audio visualizer for microphone or line-in input.

![](img/thumbnail.jpg)

## Requirements

A modern browser like Chrome, Firefox, or Edge is required, though Chrome will likely be fastest.

The page can be run directly from disk. You can also put it on a web server, but it must be served over HTTPS due to browser security restrictions. So it's easiest just to download the repository and run `index.html`.

This project uses browser globals to attach everything to the window object. If you're using a Javascript module system such as requireJS or commonJS (nodejs), Mike Reinstein maintains a port, [available here](https://github.com/mreinstein/visualizer).

## Usage

Once the page is up, allow it to access microphone/line-in input. Use 1-9 to select a visualization (or click/tap to go to the next one), and the += key to switch between variants of that visualization.

On OS X you can use [Soundflower](http://rogueamoeba.com/freebies/soundflower/) to redirect system audio, and on Windows you can use [VB Cable](http://vb-audio.pagesperso-orange.fr/Cable/).

## History

### 2017-02-15 - v8

  * fixed the Image visualizer so it better reflects the current audio
  * added MIT license to project
  * repo cleanup
  * fixed broken three.js reference, added the library to repo
  * readme change, now that the page can be run directly from disk

### 2014-12-15 - v7

  * added two 3D visualizations, sphere and mountain

### 2014-12-01 - v6

  * application restructuring and optimization

### 2014-11-30 - v5

  * added spike and image visualizations

### 2014-11-29 - v4

  * significantly reduced number of particles on clouds/starburst, now load it instead of generating it
  * disabled that mode on Firefox

### 2014-11-29 - v3

  * heavily refactored code to be more modular, with less duplication
  * added box visualization
  * added variants functionality

### 2014-11-27 - v2

  * added clouds/starburst mode

### 2014-11-21 - v1

  * initial port from Processing
