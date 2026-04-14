// === CANVAS PARTICLE SYSTEM ===
ManaEmpire.particles = {

  canvas: null,
  ctx: null,
  list: [],

  init: function () {
    this.canvas = document.getElementById('particle-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.resize();
    var self = this;
    window.addEventListener('resize', function () { self.resize(); });
  },

  resize: function () {
    var rect = this.canvas.parentElement.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
  },

  spawn: function (x, y, count, colors, speedMul, sizeMul) {
    speedMul = speedMul || 1;
    sizeMul = sizeMul || 1;
    for (var i = 0; i < count; i++) {
      var angle = Math.random() * Math.PI * 2;
      var speed = (Math.random() * 100 + 50) * speedMul;
      this.list.push({
        x: x, y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        decay: 0.8 + Math.random() * 1.2,
        size: (Math.random() * 3 + 2) * sizeMul,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  },

  update: function (dt) {
    var ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (var i = this.list.length - 1; i >= 0; i--) {
      var p = this.list[i];
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.vx *= (1 - 2 * dt);
      p.vy *= (1 - 2 * dt);
      p.life -= p.decay * dt;
      if (p.life <= 0) { this.list.splice(i, 1); continue; }
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }
};
