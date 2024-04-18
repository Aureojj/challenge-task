const sortProducts = require('../../inventory-management/sort-products.js')

describe('Sort products', () => {
  it('should sort products by price in ascending order', () => {
    const products = [
      { name: 'Product A', price: 100, stock: 5 },
      { name: 'Product B', price: 200, stock: 3 },
      { name: 'Product C', price: 50, stock: 10 }
    ]
    const expected = [
      { name: 'Product C', price: 50, stock: 10 },
      { name: 'Product A', price: 100, stock: 5 },
      { name: 'Product B', price: 200, stock: 3 }
    ]
    expect(sortProducts(products, 'price', true)).toEqual(expected)
  })

  it('should sort products by price in descending order', () => {
    const products = [
      { name: 'Product A', price: 100, stock: 5 },
      { name: 'Product B', price: 200, stock: 3 },
      { name: 'Product C', price: 50, stock: 10 }
    ]
    const expected = [
      { name: 'Product B', price: 200, stock: 3 },
      { name: 'Product A', price: 100, stock: 5 },
      { name: 'Product C', price: 50, stock: 10 }
    ]
    expect(sortProducts(products, 'price', false)).toEqual(expected)
  })

  it('should sort products by name in ascending order', () => {
    const products = [
      { name: 'Product B', price: 200, stock: 3 },
      { name: 'Product A', price: 100, stock: 5 },
      { name: 'Product C', price: 50, stock: 10 }
    ]
    const expected = [
      { name: 'Product A', price: 100, stock: 5 },
      { name: 'Product B', price: 200, stock: 3 },
      { name: 'Product C', price: 50, stock: 10 }
    ]
    expect(sortProducts(products, 'name', true)).toEqual(expected)
  })

  it('should sort products by name in descending order', () => {
    const products = [
      { name: 'Product B', price: 200, stock: 3 },
      { name: 'Product A', price: 100, stock: 5 },
      { name: 'Product C', price: 50, stock: 10 }
    ]
    const expected = [
      { name: 'Product C', price: 50, stock: 10 },
      { name: 'Product B', price: 200, stock: 3 },
      { name: 'Product A', price: 100, stock: 5 }
    ]
    expect(sortProducts(products, 'name', false)).toEqual(expected)
  })

  it('should sort products by stock in ascending order', () => {
    const products = [
      { name: 'Product B', price: 200, stock: 3 },
      { name: 'Product C', price: 50, stock: 10 },
      { name: 'Product A', price: 100, stock: 5 }
    ]
    const expected = [
      { name: 'Product B', price: 200, stock: 3 },
      { name: 'Product A', price: 100, stock: 5 },
      { name: 'Product C', price: 50, stock: 10 }
    ]
    expect(sortProducts(products, 'stock', true)).toEqual(expected)
  })

  it('should sort products by stock in descending order', () => {
    const products = [
      { name: 'Product B', price: 200, stock: 3 },
      { name: 'Product C', price: 50, stock: 10 },
      { name: 'Product A', price: 100, stock: 5 }
    ]
    const expected = [
      { name: 'Product C', price: 50, stock: 10 },
      { name: 'Product A', price: 100, stock: 5 },
      { name: 'Product B', price: 200, stock: 3 }
    ]
    expect(sortProducts(products, 'stock', false)).toEqual(expected)
  })

  it('should throw an error if products is not an array', () => {
    expect(() => {
      sortProducts('not an array', 'price', true)
    }).toThrow()
  })

  it('should throw an error if sortKey is not a string or number', () => {
    const products = [
      { name: 'Product A', price: 100 },
      { name: 'Product B', price: 50 },
      { name: 'Product C', price: 150 }
    ]
    expect(() => {
      sortProducts(products, true, true)
    }).toThrow()
  })

  it('should throw an error if ascending is not a boolean', () => {
    const products = [
      { name: 'Product A', price: 100 },
      { name: 'Product B', price: 50 },
      { name: 'Product C', price: 150 }
    ]
    expect(() => {
      sortProducts(products, 'price', 'not a boolean')
    }).toThrow()
  })
})
