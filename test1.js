Feature('Test1');

Scenario('First Test', async ({ I }) => {
  I.amOnPage('https://fast.com/');

  I.usePlaywrightTo('testing1', async ({ browser, browserContext, page }) => {
    const resp = await page.evaluate(_ => {}, `browserstack_executor: ${JSON.stringify({action: 'getSessionDetails'})}`);
    console.log(resp)
  });

});
