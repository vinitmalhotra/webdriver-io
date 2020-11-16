Feature: Register on the website

    Scenario: Signup a new customer

        Given I'm on the Automation Practise landing page
        When I click "Sign in" link
        When I enter "email" "vinitmalhotra123@gmail.com"
        When I click "Create an account" button
        When I select "Mr" title
        When I enter "firstname" "Vinit"
        When I enter "lastname" "Malhotra"
        When I enter "email" "vinitmalhotra123@gmail.com"
        When I enter "passwd" "Password1"
        When I enter date "4"
        When I enter month "3"
        When I enter year "1987"
        When I enter the "address" "55 collins street"
        When I enter the "city" "Melbourne"
        When I enter state "Arizona"
        When I enter the "postcode" "85006"
        When I enter country "United States"
        When I enter the "mobile" "0449100411"
        When I click "Register" button
        Then I Validate "Vinit Malhotra" on the landing screen
        When I search a product "Printed Chiffon Dress"
        When I click "Search" button
        When I move to "In stock" button
        When I click the "Add to cart" button
        When I click the "Proceed to checkout" button
        When I navigate by clicking "Proceed to checkout" button
        When I navigate by clicking "Proceed to checkout" button
        When I agree TC
        When I navigate by clicking "Proceed to checkout" button
        Then I Validate "Printed Chiffon Dress" on the payments page






