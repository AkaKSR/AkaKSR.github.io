// === UI UPDATE SYSTEM ===
ManaEmpire.ui = {

  update: function () {
    var state = ManaEmpire.state;
    var utils = ManaEmpire.utils;
    var fmt = utils.formatNumber.bind(utils);
    var config = ManaEmpire.config;

    // Center panel
    document.getElementById('mana-display').textContent = '✨ ' + fmt(state.mana) + ' 마나';
    var mps = utils.getMPS();
    document.getElementById('mps-display').textContent = '초당 마나 생산량: ' + fmt(mps) + ' ✨/s';
    document.getElementById('click-count-display').textContent =
      '총 클릭: ' + fmt(state.totalClicks) + ' | 클릭 파워: ' + fmt(utils.getClickPower());

    // Crystal glow
    var glowEl = document.getElementById('crystal-glow');
    var intensity = Math.min(1, 0.3 + mps / 500);
    var size = 200 + Math.min(200, mps / 10);
    glowEl.style.width = size + 'px';
    glowEl.style.height = size + 'px';
    glowEl.style.opacity = intensity;

    // Facility cards
    var facData = config.FACILITY_DATA;
    for (var i = 0; i < facData.length; i++) {
      var cost = utils.getFacilityCost(i);
      var canBuy = state.mana >= cost;
      var card = document.getElementById('fac-card-' + i);
      if (card) {
        card.classList.toggle('disabled', !canBuy);
        var countEl = document.getElementById('fac-count-' + i);
        if (countEl) countEl.textContent = 'x' + state.facilities[i];
        var costEl = document.getElementById('fac-cost-' + i);
        if (costEl) costEl.textContent = '비용: ' + fmt(cost) + ' ✨';
        var btn = document.getElementById('fac-btn-' + i);
        if (btn) btn.disabled = !canBuy;
      }
    }

    // Upgrade cards
    var upgData = config.UPGRADE_DATA;
    var maxLv = config.MAX_UPGRADE_LEVEL;
    for (var j = 0; j < upgData.length; j++) {
      var uCost = utils.getUpgradeCost(j);
      var maxed = state.upgrades[j] >= maxLv;
      var uCanBuy = !maxed && state.mana >= uCost;
      var uCard = document.getElementById('upg-card-' + j);
      if (uCard) {
        uCard.classList.toggle('disabled', !uCanBuy && !maxed);
        var lvEl = document.getElementById('upg-level-' + j);
        if (lvEl) lvEl.textContent = 'Lv.' + state.upgrades[j] + '/' + maxLv;
        var uCostEl = document.getElementById('upg-cost-' + j);
        if (uCostEl) uCostEl.textContent = maxed ? 'MAX' : ('비용: ' + fmt(uCost) + ' ✨');
        var uBtn = document.getElementById('upg-btn-' + j);
        if (uBtn) {
          uBtn.disabled = !uCanBuy;
          uBtn.textContent = maxed ? '최대' : '구매';
        }
        var bar = document.getElementById('upg-bar-' + j);
        if (bar) bar.style.width = ((state.upgrades[j] / maxLv) * 100) + '%';
      }
    }
  }
};
