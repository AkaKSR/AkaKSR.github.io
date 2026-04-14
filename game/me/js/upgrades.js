// === UPGRADE SYSTEM ===
ManaEmpire.upgrades = {

  buildCards: function () {
    var list = document.getElementById('upgrade-list');
    list.innerHTML = '';
    var data = ManaEmpire.config.UPGRADE_DATA;
    var max = ManaEmpire.config.MAX_UPGRADE_LEVEL;
    var fmt = ManaEmpire.utils.formatNumber.bind(ManaEmpire.utils);

    for (var i = 0; i < data.length; i++) {
      var upg = data[i];
      var cost = ManaEmpire.utils.getUpgradeCost(i);
      var level = ManaEmpire.state.upgrades[i];
      var pct = (level / max) * 100;

      var card = document.createElement('div');
      card.className = 'upgrade-card';
      card.id = 'upg-card-' + i;
      card.innerHTML =
        '<div class="card-header">' +
          '<span class="card-title">⬆️ ' + upg.name + '</span>' +
          '<span class="card-count" id="upg-level-' + i + '">Lv.' + level + '/' + max + '</span>' +
        '</div>' +
        '<div class="card-desc">' + upg.desc + '</div>' +
        '<div class="card-footer">' +
          '<span class="card-cost" id="upg-cost-' + i + '">비용: ' + fmt(cost) + ' ✨</span>' +
          '<button class="card-btn buy-upgrade" id="upg-btn-' + i + '" onclick="ManaEmpire.upgrades.buy(' + i + ')">구매</button>' +
        '</div>' +
        '<div class="upgrade-level-bar"><div class="upgrade-level-fill" id="upg-bar-' + i + '" style="width:' + pct + '%"></div></div>';
      list.appendChild(card);
    }
  },

  buy: function (index) {
    var state = ManaEmpire.state;
    var max = ManaEmpire.config.MAX_UPGRADE_LEVEL;
    if (state.upgrades[index] >= max) return;
    var cost = ManaEmpire.utils.getUpgradeCost(index);
    if (state.mana >= cost) {
      state.mana -= cost;
      state.upgrades[index]++;
      state.totalUpgradePurchases++;
      ManaEmpire.effects.playCardGlow('upg-card-' + index);
      ManaEmpire.achievements.checkAll();
      ManaEmpire.ui.update();
    }
  }
};
