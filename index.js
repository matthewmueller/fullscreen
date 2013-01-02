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
  this.parent = el.parentNode;
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
  document.body.appendChild(this.el);
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
  this.parent.appendChild(this.el);
  this.emit('close');
};

/**
 * keydown
 */

Fullscreen.prototype.keydown = function(e) {
  if (e.keyCode == 27) this.close();
};
