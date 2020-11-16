const { Given, When, Then, And } = require('cucumber');
const chai = require('chai');

Given(/^I'm on the Automation Practise landing page$/, function () {
  browser.url('http://automationpractice.com/index.php')
  browser.maximizeWindow();
});

When(/^I click \"([^\"]*)\" link$/, function (link) {
  const btn = $(`//a[contains(text(),'${link}')]`)
  btn.click();
});

When(/^I click \"([^\"]*)\" button$/, function (value) {
  const button = $(`//button[contains(., '${value}')]`);
  button.click();
  browser.pause(6000);
});

When(/^I select \"([^\"]*)\" title$/, function (mr) {
  const gender = $("//input[@id='id_gender1']");
  gender.click();
});

When(/^I enter \"([^\"]*)\" \"([^\"]*)\"$/, function (fieldname, value,) {
  const inputname = $(`//input[contains(@class,'is_required')][contains(@name,'${fieldname}')]`);
  inputname.setValue(value);
});

When(/^I enter the \"([^\"]*)\" \"([^\"]*)\"$/, function (fieldname, value,) {
  const inputname = $(`//input[contains(@class,'form-control')][contains(@name,'${fieldname}')]`);
  inputname.setValue(value);
});

When(/^I enter date \"([^\"]*)\"$/, function (date) {
  const datebox = $('#days');
  datebox.selectByAttribute('value', date);
});

When(/^I enter month \"([^\"]*)\"$/, function (date) {
  const datebox = $('#months');
  datebox.selectByAttribute('value', '3');
});

When(/^I enter year \"([^\"]*)\"$/, function (date) {
  const datebox = $('#years');
  datebox.selectByAttribute('value', date);
});

When(/^I enter state \"([^\"]*)\"$/, function (value) {
  const statebox = $('#id_state');
  statebox.selectByAttribute('value', '3');
});

When(/^I enter country \"([^\"]*)\"$/, function (value) {
  const countrybox = $('#id_country');
  countrybox.selectByAttribute('value', '21');
});

Then(/^I Validate \"([^\"]*)\" on the landing screen$/, function (value) {
  const name = $(".account>span").getText();
  chai.assert.equal(value, name);
});

When(/^I search a product \"([^\"]*)\"$/, function (value) {
  const searchbox = $('#search_query_top');
  searchbox.setValue(value);
});

When(/^I move to \"([^\"]*)\" button$/, function (value) {
  const elem = $(`//span[contains(., '${value}')]`);
  elem.scrollIntoView();
  elem.moveTo();
});

When(/^I click the \"([^\"]*)\" button$/, function (value) {
  browser.pause(6000);
  const button = $(`//span[contains(., '${value}')]`);
  button.click();
});

When(/^I navigate by clicking \"([^\"]*)\" button$/, function (valule) {
  const button = $(".cart_navigation > .button-medium");
  button.click();
});

When(/^I agree TC$/, function () {
  const checkbox = $("//input[@name='cgv']");
  checkbox.click();
});

Then(/^I Validate \"([^\"]*)\" on the payments page$/, function (value) {
  const name = $(".cart_description>.product-name>a").getText();
  chai.assert.equal(value, name);
});