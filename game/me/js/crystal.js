// === CRYSTAL CLICK HANDLER ===
ManaEmpire.crystal = {

  wrapperEl: null,
  crystalEl: null,

  init: function () {
    this.wrapperEl = document.getElementById('crystal-wrapper');
    this.crystalEl = document.getElementById('crystal');
    var self = this;
    this.wrapperEl.addEventListener('click', function (e) { self.onClick(e); });
  },

  onClick: function (e) {
    var state = ManaEmpire.state;
    var utils = ManaEmpire.utils;
    var effects = ManaEmpire.effects;
    var particles = ManaEmpire.particles;

    var power = utils.getClickPower();
    state.mana += power;
    state.totalMana += power;
    state.totalClicks++;

    // Bounce
    this.crystalEl.classList.remove('bounce');
    void this.crystalEl.offsetWidth;
    this.crystalEl.classList.add('bounce');
    var ref = this.crystalEl;
    setTimeout(function () { ref.classList.remove('bounce'); }, 100);

    // Position
    var rect = effects.centerPanel.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    effects.spawnFloatText(x, y - 20, '+' + utils.formatNumber(power) + ' ✨');
    effects.spawnDOMParticles(x, y, 8);
    effects.spawnRipple(x, y);
    particles.spawn(x, y, 6, ['#6060ff', '#a040ff', '#ffd700'], 1, 1);

    ManaEmpire.milestones.check();
    ManaEmpire.achievements.checkAll();
    ManaEmpire.ui.update();
  },

  updateAnimationSpeed: function () {
    var mps = ManaEmpire.utils.getMPS();
    var floatDuration = Math.max(1, 3 - Math.min(2, mps / 200));
    this.crystalEl.style.animationDuration = floatDuration + 's';
    var glowEl = document.getElementById('crystal-glow');
    var glowDuration = Math.max(0.5, 2 - Math.min(1.5, mps / 300));
    glowEl.style.animationDuration = glowDuration + 's';
  }
};
