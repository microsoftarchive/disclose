var Disclosure = function(el) {
  var self = this;
  self.el = el;
  self.isActive = false;
  self.details = el.querySelectorAll('[data-details]');

  self.overlay = document.createElement('div');
  self.overlay.style.position = 'fixed';
  self.overlay.style.top = '0';
  self.overlay.style.right = '0';
  self.overlay.style.bottom = '0';
  self.overlay.style.left = '0';
  self.el.insertBefore(self.overlay, self.el.firstChild);

  self.el.addEventListener('click', function(e) { self.toggle(e) });
  self.overlay.addEventListener('click', function(e) { self.hide(e) });

  for(var i = 0; i < self.details.length; i++) {
    self.details[i].addEventListener('click', function(e) { e.stopPropagation() });
  }

  self.hide();
};

Disclosure.prototype.hide = function() {
  this.overlay.style.display = 'none';
  for (var i = 0; i < this.details.length; i++) {
    this.details[i].style.display = 'none';
  }
};

Disclosure.prototype.show = function() {
  this.overlay.style.display = 'block';
  for (var i = 0; i < this.details.length; i++) {
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
