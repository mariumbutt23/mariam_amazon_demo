//This page is the stepdefinition to write the functionality code of the task.
/// <reference types="Cypress" />
import {Given, When,And, Then} from '@badeball/cypress-cucumber-preprocessor';
import commonUtils from '../Base/BasePage';

const utils = new commonUtils();

Given('User open the google chrome and go to amazon application url.', () => {
   utils.visit('baseUrl')
})

When('User Enter laptop in the search box' , () => {
    utils.senKeys("//input[@id='twotabsearchtextbox']" , 'laptop');
    utils.click("//input[@id='nav-search-submit-button']");
})

When('User Filter the items by price using filter', ()=>{
    utils.click("//span[contains(text(), '$500 to $600')]//parent::a");
})

When('Go to the last Page', ()=>{
    cy.go('back');
})

Then('Log to console title and price of the penultimate item', () => {
    cy.log(cy.title());
    cy.log()
})
