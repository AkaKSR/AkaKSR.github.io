// === MAIN ENTRY POINT ===
(function () {
  'use strict';

  // 1. Load saved data
  ManaEmpire.save.loadGame();

  // 2. Initialize subsystems
  ManaEmpire.particles.init();
  ManaEmpire.effects.init();
  ManaEmpire.crystal.init();
  ManaEmpire.goldenOrb.init();

  // 3. Build UI cards
  ManaEmpire.facilities.buildCards();
  ManaEmpire.upgrades.buildCards();
  ManaEmpire.achievements.buildCards();

  // 4. Initial render
  ManaEmpire.ui.update();

  // 5. Start game loop
  ManaEmpire.gameLoop.start();

  console.log('✨ Mana Empire initialized!');
})();
