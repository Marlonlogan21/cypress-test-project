describe('Performance Test', () => {
  it('measures page load time for Sauce Demo', () => {
    const start = Date.now();
    cy.visit('https://www.saucedemo.com');
    cy.then(() => {
      const duration = Date.now() - start;
      cy.log(`Page loaded in ${duration} ms`);
      expect(duration).to.be.lessThan(3000); // You can adjust this threshold
    });
  });
});
