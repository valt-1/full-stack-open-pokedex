describe('Pokedex', function() {
  beforeEach(function() {
    cy.visit('http://localhost:5000')
  })

  it('front page can be opened', function() {
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('Pokémon page can be navigated to from front page', function() {
    cy.contains('sandslash').click()
    cy.contains('sand rush')
  })
})
