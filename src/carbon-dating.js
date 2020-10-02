const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;
const LOG_2 = 0.693;

module.exports = function dateSample(sampleActivity) {
  let smplAct = Number(sampleActivity);
  if (typeof (smplAct) !== "string" || smplAct <= 0) {
    return false;
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY) / smplAct / (LOG_2 / HALF_LIFE_PERIOD));
}
