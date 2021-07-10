function formatUSD(value = 0) {
  return Number(value.toFixed()).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}

export {formatUSD};
