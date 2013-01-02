/**
 * Module dependencies
 */

var Emitter = require('emitter'),
    events = require('event'),
    classes = require('classes');

/**
 * Expose `Fullscreen`
 */

module.exports = Fullscreen;

/**
 * Initialize `Fullscreen`
 *
 * @param {DOM Node} el
 * @api public
 */

function Fullscreen(el) {
  if(!(this instanceof Fullscreen)) return new Fullscreen(el);
  this.el = el;
}

/**
 * Mixin `Emitter`
 */

Emitter(Fullscreen.prototype);

/**
 * open
 */

Fullscreen.prototype.open = function() {
  events.bind(this.el, 'keydown', this.keydown.bind(this));
  classes(this.el).add('fullscreen');
  this.emit('open');
  this.el.focus();
};

/**
 * close
 */

Fullscreen.prototype.close = function() {
  events.unbind(this.el);
  classes(this.el).remove('fullscreen');
  this.emit('close');
};

/**
 * Keydown
 */

Fullscreen.prototype.keydown = function(e) {
  if (e.keyCode == 27) this.close();
};
