import { Selector } from 'testcafe';

fixture('Exemplo com Debug')
    .page('https://automationpratice.com.br/');

test('Teste com Debug', async t => {

    await t
        .click(Selector('a').withText('Login'))
        .typeText(Selector('#user'), 'herbert@gmail.com')
        .typeText(Selector('#password'), '123456')
        .click('#btnLogin');
});
