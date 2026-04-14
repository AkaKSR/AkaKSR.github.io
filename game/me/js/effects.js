// === DOM-BASED VISUAL EFFECTS ===
ManaEmpire.effects = {

  centerPanel: null,

  init: function () {
    this.centerPanel = document.getElementById('center-panel');
  },

  spawnFloatText: function (x, y, text) {
    var el = document.createElement('div');
    el.className = 'float-text';
    el.textContent = text;
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    this.centerPanel.appendChild(el);
    setTimeout(function () { el.remove(); }, 1000);
  },

  spawnDOMParticles: function (x, y, count) {
    var colors = ['#6060ff', '#a040ff', '#80c0ff', '#ffd700', '#ffffff'];
    var panel = this.centerPanel;
    for (var i = 0; i < count; i++) {
      var el = document.createElement('div');
      el.className = 'particle';
      var angle = Math.random() * Math.PI * 2;
      var dist = Math.random() * 80 + 30;
      el.style.setProperty('--px', Math.cos(angle) * dist + 'px');
      el.style.setProperty('--py', Math.sin(angle) * dist + 'px');
      el.style.left = x + 'px';
      el.style.top = y + 'px';
      el.style.background = colors[Math.floor(Math.random() * colors.length)];
      el.style.boxShadow = '0 0 6px ' + el.style.background;
      panel.appendChild(el);
      (function (e) { setTimeout(function () { e.remove(); }, 700); })(el);
    }
  },

  spawnRipple: function (x, y) {
    var el = document.createElement('div');
    el.className = 'ripple';
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    this.centerPanel.appendChild(el);
    setTimeout(function () { el.remove(); }, 800);
  },

  playCardGlow: function (cardId) {
    var card = document.getElementById(cardId);
    if (!card) return;
    var glow = document.createElement('div');
    glow.className = 'card-magic-glow';
    card.appendChild(glow);
    setTimeout(function () { glow.remove(); }, 500);
  }
};
