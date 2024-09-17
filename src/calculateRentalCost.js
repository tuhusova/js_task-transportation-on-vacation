/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayPrice = 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  if (days < 3) {
    return days * dayPrice;
  }

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return days * dayPrice - SHORT_TERM_DISCOUNT;
  }

  return days * dayPrice - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
