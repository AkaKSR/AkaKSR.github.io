// === SAVE / LOAD SYSTEM ===
ManaEmpire.save = {

  saveGame: function () {
    try {
      var state = ManaEmpire.state;
      var data = {
        mana: state.mana,
        totalMana: state.totalMana,
        totalClicks: state.totalClicks,
        facilities: state.facilities,
        upgrades: state.upgrades,
        achievements: state.achievements,
        totalUpgradePurchases: state.totalUpgradePurchases
      };
      localStorage.setItem(ManaEmpire.config.SAVE_KEY, JSON.stringify(data));
      var indicator = document.getElementById('save-indicator');
      indicator.classList.add('show');
      setTimeout(function () { indicator.classList.remove('show'); }, 1500);
    } catch (e) {
      console.warn('Save failed:', e);
    }
  },

  loadGame: function () {
    try {
      var raw = localStorage.getItem(ManaEmpire.config.SAVE_KEY);
      if (!raw) return;
      var parsed = JSON.parse(raw);
      var state = ManaEmpire.state;
      state.mana = parsed.mana || 0;
      state.totalMana = parsed.totalMana || 0;
      state.totalClicks = parsed.totalClicks || 0;
      state.facilities = parsed.facilities || [0, 0, 0, 0, 0, 0, 0];
      state.upgrades = parsed.upgrades || [0, 0, 0, 0, 0];
      state.achievements = parsed.achievements || {};
      state.totalUpgradePurchases = parsed.totalUpgradePurchases || 0;
      while (state.facilities.length < 7) state.facilities.push(0);
      while (state.upgrades.length < 5) state.upgrades.push(0);
      ManaEmpire.milestones.recalcIndex();
    } catch (e) {
      console.warn('Load failed:', e);
    }
  },

  resetGame: function () {
    if (confirm('정말로 모든 기록을 초기화하시겠습니까?\n이 작업은 되돌릴 수 없습니다.')) {
      localStorage.removeItem(ManaEmpire.config.SAVE_KEY);
      ManaEmpire.state.reset();
      ManaEmpire.milestones.lastIndex = -1;
      ManaEmpire.achievements.buildCards();
      ManaEmpire.facilities.buildCards();
      ManaEmpire.upgrades.buildCards();
      ManaEmpire.ui.update();
    }
  }
};
