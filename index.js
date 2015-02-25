var Disclosure = function(el) {
  var self = this;
  self.el = el;
  self.isActive = false;
  self.details = el.querySelectorAll('[data-details]');
  el.addEventListener('click', function(e) { self.toggle(e) });
  self.hide();
};

Disclosure.prototype.hide = function() {
  for (var i = 0; i < this.details.length; i++) {
    this.details[i].style.display = 'none';
  }
};

Disclosure.prototype.show = function() {
  for (var i = 0; i < el.details.length; i++) {
    this.details[i].style.display = 'block';
  }
};

Disclosure.prototype.toggle = function(e) {
  e.stopPropagation();
  this.isActive = !this.isActive;
  if (this.isActive) { this.show() } else { this.hide() }
};

module.exports = {
  create: function(el) {
    return new Disclosure(el);
  },
  all: function() {
    var els = document.querySelectorAll("[data-disclose]");
    for (var i = 0; i < els.length; i++) {
      new Disclosure(els[i]);
    }
  }
};
