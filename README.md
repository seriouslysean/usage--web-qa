# Web QA Usage

## Building & Running

Pull this repo down locally and run `npm ci` to install the dependencies.
### Development Build

* Run `npm run dev` to serve a development build.
* Visit `http://127.0.0.1:5173/`.

### Production Build

* Run `npm run build` to generate the production build.
* Run `npm run preview` to serve a production build.
* Visit `http://127.0.0.1:4173/`.

## QA Testing

### Cypress

* Run `npm run dev`
* Run `npm run test:cypress` to run Cypress headlessly
* (optional) Run `npm run test:cypress:open` to run Cypress

For more information, see the [Cypress documentation](https://docs.cypress.io/guides/getting-started/installing-cypress).

### TestCafe

* Run `npm run dev`
* Run `npm run test:testcafe` to run TestCafe headlessly
* (optional) Run `npm run test:testcafe:open` to run TestCafe

For more information, see the [TestCafe documentation](https://testcafe.io/documentation/402635/getting-started).

### Playwright

* Run `npm run dev`
* Run `npm run test:playwright` to run Playwright headlessly
* (optional) Run `npm run test:playwright:open` to run Playwright

For more information, see the [Playwright documentation](https://playwright.dev/docs/intro).
