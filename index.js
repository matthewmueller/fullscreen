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
  this.emit('open');
  document.body.appendChild(this.el);
  classes(this.el).add('is-fullscreen');
  this.el.focus();
  return this;
};

/**
 * close
 */

Fullscreen.prototype.close = function() {
  events.unbind(this.el);
  this.emit('close');
  classes(this.el).remove('is-fullscreen');
  this.parent.appendChild(this.el);
  return this;
};

/**
 * keydown
 *
 * @api private
 */

Fullscreen.prototype.keydown = function(e) {
  if (e.keyCode == 27) this.close();
};
