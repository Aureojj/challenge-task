function sortProducts (products, sortKey, ascending) {
  if (typeof sortKey !== 'string' && typeof sortKey !== 'number') {
    throw new Error('sortKey must be a string or number')
  }

  if (typeof ascending !== 'boolean') {
    throw new Error('ascending must be a boolean')
  }

  return products.sort((productOne, productTwo) => {
    if (productOne[sortKey] < productTwo[sortKey]) {
      return ascending ? -1 : 1
    }
    if (productOne[sortKey] > productTwo[sortKey]) {
      return ascending ? 1 : -1
    }
    return 0
  })
}

module.exports = sortProducts
