import { getHeading } from '../support/app.po';

describe('erkjbro-tech', () => {
  beforeEach(() => cy.visit('/'));

  it('should display heading on portfolio page', () => {
    // // Custom command example, see `../support/commands.ts` file
    // cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getHeading().contains('Erik J Brown');
  });
});
