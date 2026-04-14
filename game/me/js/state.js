// === GAME STATE ===
ManaEmpire.state = {
  mana: 0,
  totalMana: 0,
  totalClicks: 0,
  facilities: [0, 0, 0, 0, 0, 0, 0],
  upgrades: [0, 0, 0, 0, 0],
  achievements: {},
  totalUpgradePurchases: 0
};

ManaEmpire.state.reset = function () {
  this.mana = 0;
  this.totalMana = 0;
  this.totalClicks = 0;
  this.facilities = [0, 0, 0, 0, 0, 0, 0];
  this.upgrades = [0, 0, 0, 0, 0];
  this.achievements = {};
  this.totalUpgradePurchases = 0;
};
