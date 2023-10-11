/// <reference types="Cypress" />

class basePage{

    visit(url){
        cy.visit(Cypress.config(url));
    }

    senKeys(path , data){
        cy.xpath(path).type(data);
        
    }

    click(path){
        cy.xpath(path).click();
    }




}
export default basePage