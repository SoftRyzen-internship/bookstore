export const totalDiscount = Math.floor(Math.random() * 5) + 1;

export const shippingCost = Math.floor(Math.random() * 31) + 50;

export function calculateTotal(items) {
  return items.reduce((sum, item) => {
    const { price, discount, quality } = item;

    const itemTotal = (quality * (price - (price * discount) / 100)).toFixed(1);
    return sum + parseFloat(itemTotal);
  }, 0);
}
