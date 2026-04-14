// === UTILITY FUNCTIONS ===
ManaEmpire.utils = {

  formatNumber: function (n) {
    if (n < 0) return '-' + this.formatNumber(-n);
    if (n < 1000) return n % 1 === 0 ? n.toString() : n.toFixed(2);
    var units = ['', 'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc'];
    var i = 0;
    var v = n;
    while (v >= 1000 && i < units.length - 1) { v /= 1000; i++; }
    return v.toFixed(2) + units[i];
  },

  totalFacilities: function () {
    return ManaEmpire.state.facilities.reduce(function (a, b) { return a + b; }, 0);
  },

  getFacilityCost: function (index) {
    var fac = ManaEmpire.config.FACILITY_DATA[index];
    return Math.floor(fac.baseCost * Math.pow(fac.costMul, ManaEmpire.state.facilities[index]));
  },

  getUpgradeCost: function (index) {
    var upg = ManaEmpire.config.UPGRADE_DATA[index];
    return Math.floor(upg.baseCost * Math.pow(1.15, ManaEmpire.state.upgrades[index]));
  },

  getClickPower: function () {
    var power = 1;
    var upgrades = ManaEmpire.config.UPGRADE_DATA;
    var state = ManaEmpire.state;
    for (var i = 0; i < upgrades.length; i++) {
      if (upgrades[i].type === 'click') {
        power += upgrades[i].value * state.upgrades[i];
      }
    }
    return power;
  },

  getAutoBoostMultiplier: function () {
    var mul = 1;
    var upgrades = ManaEmpire.config.UPGRADE_DATA;
    var state = ManaEmpire.state;
    for (var i = 0; i < upgrades.length; i++) {
      if (upgrades[i].type === 'autoBoost') {
        mul += upgrades[i].value * state.upgrades[i];
      }
    }
    return mul;
  },

  getMPS: function () {
    var baseMPS = 0;
    var facilities = ManaEmpire.config.FACILITY_DATA;
    var state = ManaEmpire.state;
    for (var i = 0; i < facilities.length; i++) {
      baseMPS += facilities[i].baseMPS * state.facilities[i];
    }
    return baseMPS * this.getAutoBoostMultiplier();
  }
};
