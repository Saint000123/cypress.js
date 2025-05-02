describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
         cy.get('#loginButton').click(); // Нажал войти 
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авт. вижу текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден дял пользователя

     })

     it('Неврный пароль и верный логин' , function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio'); // Ввели неверный пароль
        cy.get('#loginButton').click(); // Нажал войти 
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю что после авт. вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден дял пользователя

    })

    it('Проверка , что в логине есть @' , function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('germandolnikov.ru'); // Ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввел верный пароль
        cy.get('#loginButton').click(); // Нажал войти 
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю что после авт. вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден дял пользователя

    })

    it('Проверка забыли пароль' , function () { 
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').click(); // Нажимаю восстанвоить пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввел почту для восстановления 
        cy.get('#restoreEmailButton').click(); // Нажал отправить код 
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю на совп. текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден дял пользователя

    })

    it('Неправильный логин и правильный пароль' , function () { 
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('german@dolniko.ru'); // Ввел неправильный логин 
        cy.get('#pass').type('iLoveqastudio1'); // Ввел правильный пароль 
        cy.get('#loginButton').click(); // Нажал войти 
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю что после авт. вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден дял пользователя

    })
    
    it('Проверка на приведение к строчным буквам в логине' , function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввел логин строчными буквами 
        cy.get('#pass').type('iLoveqastudio1'); // Ввел правильный пароль 
        cy.get('#loginButton').click(); // Нажал войти 
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю что после авт. вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден дял пользователя

        
    })
})
     
  

 
 
 