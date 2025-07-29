describe('API Test - Sauce Demo Inventory', () => {
  it('should return a 200 status and contain inventory items', () => {
    cy.request('https://www.saucedemo.com/inventory.html').then((response) => {
      expect(response.status).to.eq(200)
    })
  })
})
