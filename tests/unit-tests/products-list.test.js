const sortProducts = require('../../inventory-management/sort-products.js')
const productsData = require('../unit-tests/helpers/products-data.js')

describe('Sort products', () => {
  it('should sort products by price in ascending order', () => {
    const expected = [
      { name: 'Product C', price: 50, stock: 10 },
      { name: 'Product A', price: 100, stock: 5 },
      { name: 'Product B', price: 200, stock: 3 }
    ]
    expect(sortProducts(productsData, 'price', true)).toEqual(expected)
  })

  it('should sort products by price in descending order', () => {
    const expected = [
      { name: 'Product B', price: 200, stock: 3 },
      { name: 'Product A', price: 100, stock: 5 },
      { name: 'Product C', price: 50, stock: 10 }
    ]
    expect(sortProducts(productsData, 'price', false)).toEqual(expected)
  })

  it('should sort products by name in ascending order', () => {
    const expected = [
      { name: 'Product A', price: 100, stock: 5 },
      { name: 'Product B', price: 200, stock: 3 },
      { name: 'Product C', price: 50, stock: 10 }
    ]
    expect(sortProducts(productsData, 'name', true)).toEqual(expected)
  })

  it('should sort products by name in descending order', () => {
    const expected = [
      { name: 'Product C', price: 50, stock: 10 },
      { name: 'Product B', price: 200, stock: 3 },
      { name: 'Product A', price: 100, stock: 5 }
    ]
    expect(sortProducts(productsData, 'name', false)).toEqual(expected)
  })

  it('should sort products by stock in ascending order', () => {
    const expected = [
      { name: 'Product B', price: 200, stock: 3 },
      { name: 'Product A', price: 100, stock: 5 },
      { name: 'Product C', price: 50, stock: 10 }
    ]
    expect(sortProducts(productsData, 'stock', true)).toEqual(expected)
  })

  it('should sort products by stock in descending order', () => {
    const expected = [
      { name: 'Product C', price: 50, stock: 10 },
      { name: 'Product A', price: 100, stock: 5 },
      { name: 'Product B', price: 200, stock: 3 }
    ]
    expect(sortProducts(productsData, 'stock', false)).toEqual(expected)
  })

  it('should throw an error if products is not an array', () => {
    expect(() => {
      sortProducts('not an array', 'price', true)
    }).toThrow()
  })

  it('should throw an error if sortKey is not a string or number', () => {
    expect(() => { sortProducts(productsData, true, true) }).toThrow()
  })

  it('should throw an error if ascending is not a boolean', () => {
    expect(() => { sortProducts(productsData, 'price', 'not a boolean') }).toThrow()
  })
})
