// === MILESTONE SYSTEM ===
ManaEmpire.milestones = {

  lastIndex: -1,

  check: function () {
    var milestones = ManaEmpire.config.MILESTONES;
    var totalMana = ManaEmpire.state.totalMana;
    for (var i = milestones.length - 1; i >= 0; i--) {
      if (totalMana >= milestones[i] && i > this.lastIndex) {
        this.lastIndex = i;
        this.spawnExplosion();
        break;
      }
    }
  },

  recalcIndex: function () {
    this.lastIndex = -1;
    var milestones = ManaEmpire.config.MILESTONES;
    var totalMana = ManaEmpire.state.totalMana;
    for (var i = milestones.length - 1; i >= 0; i--) {
      if (totalMana >= milestones[i]) { this.lastIndex = i; break; }
    }
  },

  spawnExplosion: function () {
    var particles = ManaEmpire.particles;
    var cx = particles.canvas.width / 2;
    var cy = particles.canvas.height / 2;
    var colors = ['#6060ff', '#a040ff', '#ffffff', '#80c0ff', '#c080ff'];
    particles.spawn(cx, cy, 80, colors, 2.5, 1.8);
  }
};
