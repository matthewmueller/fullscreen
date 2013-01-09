/**
 * Module dependencies
 */

var domify = require('domify'),
    Emitter = require('emitter'),
    events = require('event'),
    classes = require('classes'),
    template = require('./template');

/**
 * Expose `Fullscreen`
 */

module.exports = Fullscreen;

/**
 * Overlay singleton
 */

var overlay = domify(template)[0];
document.body.appendChild(overlay);

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
  events.bind(overlay, 'keydown', this.keydown.bind(this));
  // clear anything that was there
  overlay.innerHTML = '';
  overlay.appendChild(this.el);
  classes(this.el).add('is-fullscreen');
  classes(overlay).remove('hide');
  this.emit('open');
  this.el.focus();
  return this;
};

/**
 * close
 */

Fullscreen.prototype.close = function() {
  events.unbind(overlay);
  this.parent.appendChild(this.el);
  classes(this.el).remove('is-fullscreen');
  classes(overlay).add('hide');
  this.emit('close');
  this.el.focus();
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
