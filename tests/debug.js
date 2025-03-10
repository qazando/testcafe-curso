import { Selector } from 'testcafe';

fixture('Exemplo com Debug')
    .page('https://automationpratice.com.br/');

test('login herbertao falha API', async t => {
    await t
        .click(Selector('#top_header a').withText('Login'))
        .typeText(Selector('#user'), 'qazando@gmail.com')
        .typeText(Selector('#password'), '123456')
        .click(Selector('#btnLogin'));
});

test('teste herbertao de login falha mobile', async t => {
    await t
        .click(Selector('#top_header a').withText('Login'))
        .typeText(Selector('#user'), 'qazando@gmail.com')
        .typeText(Selector('#password'), '123456')
        .click(Selector('#btnLogin'));
});
