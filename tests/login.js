import { Selector } from 'testcafe';

fixture('Login')
    .page('https://automationpratice.com.br/');

test('Login com dados vazios', async t => {
    await t
        .click(Selector('#top_header a').withText('Login'))
        .click(Selector('#btnLogin'))
        .expect(Selector('#login_area span').withText('E-mail inválido.').visible).ok();
});

test('Login com senha vazia', async t => {
    await t
        .click(Selector('#top_header a').withText('Login'))
        .typeText(Selector('#user'), 'qazando@gmail.com')
        .click(Selector('#btnLogin'))
        .expect(Selector('#login_area span').withText('Senha inválida.').visible).ok();
});

test('Login com email vazio', async t => {
    await t
        .click(Selector('#top_header a').withText('Login'))
        .typeText(Selector('#password'), '123456')
        .click(Selector('#btnLogin'))
        .expect(Selector('#login_area span').withText('E-mail inválido.').visible).ok();
});

test('Login com sucesso bolinha', async t => {
    await t
        .click(Selector('#top_header a').withText('Login'))
        .typeText(Selector('#user'), 'qazando@gmail.com')
        .typeText(Selector('#password'), '123456')
        .click(Selector('#btnLogin'))
        .expect(Selector('button').withText('OK').visible).ok();
});

test('Login com sucesso bolinha 2', async t => {
    await t
        .click(Selector('#top_header a').withText('Login'))
        .typeText(Selector('#user'), 'qazando@gmail.com')
        .typeText(Selector('#password'), '123456')
        .click(Selector('#btnLogin'))
        .expect(Selector('button').withText('OK').visible).ok();
});