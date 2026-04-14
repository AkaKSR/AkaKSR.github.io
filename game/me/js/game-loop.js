// === GAME LOOP ===
ManaEmpire.gameLoop = {

  lastTime: 0,
  saveAccumulator: 0,
  idleAccumulator: 0,
  uiAccumulator: 0,
  crystalAnimAccumulator: 0,

  start: function () {
    this.lastTime = performance.now();
    var self = this;
    requestAnimationFrame(function (now) { self.tick(now); });
  },

  tick: function (now) {
    var dt = (now - this.lastTime) / 1000;
    this.lastTime = now;
    var clampedDt = Math.min(dt, 0.25);

    // Idle production
    this.idleAccumulator += clampedDt;
    if (this.idleAccumulator >= 0.1) {
      var mps = ManaEmpire.utils.getMPS();
      var gain = mps * this.idleAccumulator;
      if (gain > 0) {
        ManaEmpire.state.mana += gain;
        ManaEmpire.state.totalMana += gain;
        ManaEmpire.milestones.check();
        ManaEmpire.achievements.checkAll();
      }
      this.idleAccumulator = 0;
    }

    // Auto-save
    this.saveAccumulator += clampedDt;
    if (this.saveAccumulator >= ManaEmpire.config.SAVE_INTERVAL) {
      this.saveAccumulator = 0;
      ManaEmpire.save.saveGame();
    }

    // Golden orb
    ManaEmpire.goldenOrb.tick(now);

    // Canvas particles
    ManaEmpire.particles.update(clampedDt);

    // UI (~10fps)
    this.uiAccumulator += clampedDt;
    if (this.uiAccumulator >= 0.1) {
      this.uiAccumulator = 0;
      ManaEmpire.ui.update();
    }

    // Crystal animation speed (~every 2s)
    this.crystalAnimAccumulator += clampedDt;
    if (this.crystalAnimAccumulator >= 2) {
      this.crystalAnimAccumulator = 0;
      ManaEmpire.crystal.updateAnimationSpeed();
    }

    var self = this;
    requestAnimationFrame(function (t) { self.tick(t); });
  }
};
