// === FACILITY SYSTEM ===
ManaEmpire.facilities = {

  buildCards: function () {
    var list = document.getElementById('facility-list');
    list.innerHTML = '';
    var data = ManaEmpire.config.FACILITY_DATA;
    var fmt = ManaEmpire.utils.formatNumber.bind(ManaEmpire.utils);

    for (var i = 0; i < data.length; i++) {
      var fac = data[i];
      var cost = ManaEmpire.utils.getFacilityCost(i);
      var count = ManaEmpire.state.facilities[i];

      var card = document.createElement('div');
      card.className = 'facility-card';
      card.id = 'fac-card-' + i;
      card.innerHTML =
        '<div class="card-header">' +
          '<span class="card-title">' + fac.name + '</span>' +
          '<span class="card-count" id="fac-count-' + i + '">x' + count + '</span>' +
        '</div>' +
        '<div class="card-desc">MPS: ' + fac.baseMPS + '/개</div>' +
        '<div class="card-footer">' +
          '<span class="card-cost" id="fac-cost-' + i + '">비용: ' + fmt(cost) + ' ✨</span>' +
          '<button class="card-btn buy-facility" id="fac-btn-' + i + '" onclick="ManaEmpire.facilities.buy(' + i + ')">구매</button>' +
        '</div>';
      list.appendChild(card);
    }
  },

  buy: function (index) {
    var state = ManaEmpire.state;
    var cost = ManaEmpire.utils.getFacilityCost(index);
    if (state.mana >= cost) {
      state.mana -= cost;
      state.facilities[index]++;
      ManaEmpire.effects.playCardGlow('fac-card-' + index);
      ManaEmpire.achievements.checkAll();
      ManaEmpire.ui.update();
    }
  }
};
