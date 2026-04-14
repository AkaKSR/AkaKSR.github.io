// === GOLDEN ORB EVENT SYSTEM ===
ManaEmpire.goldenOrb = {

  el: null,
  visible: false,
  timeout: null,
  nextTime: 0,

  init: function () {
    this.el = document.getElementById('golden-orb');
    this.scheduleNext();
    var self = this;
    this.el.addEventListener('click', function (e) {
      e.stopPropagation();
      self.collect();
    });
  },

  scheduleNext: function () {
    var cfg = ManaEmpire.config;
    this.nextTime = performance.now() + cfg.ORB_MIN_DELAY + Math.random() * cfg.ORB_MAX_DELAY;
  },

  show: function () {
    this.visible = true;
    this.el.style.display = 'block';
    this.el.classList.remove('disappear');
    var rect = ManaEmpire.effects.centerPanel.getBoundingClientRect();
    var x = 60 + Math.random() * (rect.width - 120);
    var y = 60 + Math.random() * (rect.height - 120);
    this.el.style.left = x + 'px';
    this.el.style.top = y + 'px';
    this.el.style.animation = 'none';
    void this.el.offsetWidth;
    this.el.style.animation = 'orb-appear 0.5s ease-out, orb-spin 2s linear infinite 0.5s';
    var self = this;
    this.timeout = setTimeout(function () { self.hide(false); }, ManaEmpire.config.ORB_DURATION);
  },

  hide: function (collected) {
    if (!this.visible) return;
    this.visible = false;
    clearTimeout(this.timeout);
    this.el.classList.add('disappear');
    var el = this.el;
    setTimeout(function () {
      el.style.display = 'none';
      el.classList.remove('disappear');
    }, 500);
    if (collected) {
      var state = ManaEmpire.state;
      var utils = ManaEmpire.utils;
      var bonus = Math.max(1, state.mana * 0.1);
      state.mana += bonus;
      state.totalMana += bonus;
      var ox = parseFloat(this.el.style.left);
      var oy = parseFloat(this.el.style.top);
      ManaEmpire.effects.spawnFloatText(ox, oy - 20, '+' + utils.formatNumber(bonus) + ' ⭐ 보너스!');
      ManaEmpire.particles.spawn(ox, oy, 30, ['#ffd700', '#ffaa00', '#fff'], 2, 1.5);
      ManaEmpire.milestones.check();
      ManaEmpire.ui.update();
    }
    this.scheduleNext();
  },

  collect: function () {
    this.hide(true);
  },

  tick: function (now) {
    if (!this.visible && now >= this.nextTime) {
      this.show();
    }
  }
};
