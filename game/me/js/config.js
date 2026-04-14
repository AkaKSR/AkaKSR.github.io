// === GAME CONFIGURATION ===
var ManaEmpire = window.ManaEmpire || {};
window.ManaEmpire = ManaEmpire;

ManaEmpire.config = {
  MAX_UPGRADE_LEVEL: 50,
  SAVE_KEY: 'manaEmpireSave',
  SAVE_INTERVAL: 30,
  ORB_MIN_DELAY: 30000,
  ORB_MAX_DELAY: 60000,
  ORB_DURATION: 10000,

  FACILITY_DATA: [
    { name: '🌀 마나 응결기', baseMPS: 0.1, baseCost: 15, costMul: 1.15 },
    { name: '💫 마법 촛불',   baseMPS: 0.5, baseCost: 100, costMul: 1.15 },
    { name: '📖 마법 서재',   baseMPS: 4,   baseCost: 500, costMul: 1.15 },
    { name: '🔯 마법진',     baseMPS: 10,  baseCost: 3000, costMul: 1.15 },
    { name: '🌙 달빛 제단',   baseMPS: 40,  baseCost: 10000, costMul: 1.15 },
    { name: '🧙 대마법사',   baseMPS: 100, baseCost: 50000, costMul: 1.15 },
    { name: '🌌 차원의 틈',   baseMPS: 300, baseCost: 200000, costMul: 1.15 }
  ],

  UPGRADE_DATA: [
    { name: '마나 집중',      desc: '클릭당 마나 +1',       baseCost: 50,    type: 'click',     value: 1 },
    { name: '마법사의 손길',   desc: '클릭당 마나 +5',       baseCost: 500,   type: 'click',     value: 5 },
    { name: '마나 증폭 룬',    desc: '자동 생산 효율 +10%',  baseCost: 1000,  type: 'autoBoost', value: 0.10 },
    { name: '고대 마법 서적',   desc: '클릭당 마나 +20',      baseCost: 5000,  type: 'click',     value: 20 },
    { name: '시간 왜곡 주문',   desc: '자동 생산 효율 +50%',  baseCost: 50000, type: 'autoBoost', value: 0.50 }
  ],

  ACHIEVEMENT_DATA: [
    { id: 'click1',    icon: '🥉', name: '마나의 각성',     desc: '1번 클릭' },
    { id: 'click100',  icon: '🥈', name: '마법 수련생',     desc: '100번 클릭' },
    { id: 'click1000', icon: '🥇', name: '마나 조련사',     desc: '1,000번 클릭' },
    { id: 'click10000',icon: '💎', name: '마나의 신',       desc: '10,000번 클릭' },
    { id: 'mana100',   icon: '✨', name: '마나 한 방울',     desc: '총 100 마나 생산' },
    { id: 'mana10000', icon: '✨', name: '마나 애호가',     desc: '총 10,000 마나 생산' },
    { id: 'mana1m',    icon: '🔮', name: '마나 술사',       desc: '총 1,000,000 마나 생산' },
    { id: 'mana1b',    icon: '🌍', name: '마나 제국',       desc: '총 1,000,000,000 마나 생산' },
    { id: 'fac1',      icon: '🏠', name: '마법 입문',       desc: '시설 1개 구매' },
    { id: 'fac10',     icon: '🏙️', name: '소규모 마법단',   desc: '시설 총 10개 보유' },
    { id: 'fac50',     icon: '🌆', name: '마법사 길드',     desc: '시설 총 50개 보유' },
    { id: 'fac100',    icon: '🌐', name: '마나 제국 건설',   desc: '시설 총 100개 보유' },
    { id: 'upg1',      icon: '⚡', name: '각성의 시작',     desc: '업그레이드 1회 구매' },
    { id: 'upg10',     icon: '🔥', name: '마법 연구자',     desc: '업그레이드 10회 구매' }
  ],

  MILESTONES: [100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000]
};
