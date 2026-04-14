// === ACHIEVEMENT SYSTEM ===
ManaEmpire.achievements = {

  isOpen: false,

  getCheckFn: function (ach) {
    var state = ManaEmpire.state;
    var utils = ManaEmpire.utils;
    var checks = {
      'click1':     function () { return state.totalClicks >= 1; },
      'click100':   function () { return state.totalClicks >= 100; },
      'click1000':  function () { return state.totalClicks >= 1000; },
      'click10000': function () { return state.totalClicks >= 10000; },
      'mana100':    function () { return state.totalMana >= 100; },
      'mana10000':  function () { return state.totalMana >= 10000; },
      'mana1m':     function () { return state.totalMana >= 1000000; },
      'mana1b':     function () { return state.totalMana >= 1000000000; },
      'fac1':       function () { return utils.totalFacilities() >= 1; },
      'fac10':      function () { return utils.totalFacilities() >= 10; },
      'fac50':      function () { return utils.totalFacilities() >= 50; },
      'fac100':     function () { return utils.totalFacilities() >= 100; },
      'upg1':       function () { return state.totalUpgradePurchases >= 1; },
      'upg10':      function () { return state.totalUpgradePurchases >= 10; }
    };
    return checks[ach.id] || function () { return false; };
  },

  checkAll: function () {
    var data = ManaEmpire.config.ACHIEVEMENT_DATA;
    var state = ManaEmpire.state;
    for (var i = 0; i < data.length; i++) {
      var ach = data[i];
      if (!state.achievements[ach.id] && this.getCheckFn(ach)()) {
        state.achievements[ach.id] = true;
        ManaEmpire.toast.show(ach.icon, ach.name);
        this.updateCard(ach);
      }
    }
  },

  buildCards: function () {
    var grid = document.getElementById('achievement-grid');
    grid.innerHTML = '';
    var data = ManaEmpire.config.ACHIEVEMENT_DATA;
    var state = ManaEmpire.state;
    for (var i = 0; i < data.length; i++) {
      var ach = data[i];
      var unlocked = !!state.achievements[ach.id];
      var card = document.createElement('div');
      card.className = 'ach-card ' + (unlocked ? 'unlocked' : 'locked');
      card.id = 'ach-' + ach.id;
      card.innerHTML =
        '<span class="ach-icon">' + (unlocked ? ach.icon : '❓') + '</span>' +
        '<div class="ach-name">' + (unlocked ? ach.name : '???') + '</div>' +
        '<div class="ach-desc">' + ach.desc + '</div>';
      grid.appendChild(card);
    }
  },

  updateCard: function (ach) {
    var card = document.getElementById('ach-' + ach.id);
    if (!card) return;
    card.className = 'ach-card unlocked';
    card.innerHTML =
      '<span class="ach-icon">' + ach.icon + '</span>' +
      '<div class="ach-name">' + ach.name + '</div>' +
      '<div class="ach-desc">' + ach.desc + '</div>';
  },

  toggle: function () {
    this.isOpen = !this.isOpen;
    document.getElementById('achievement-panel').classList.toggle('open', this.isOpen);
  }
};
