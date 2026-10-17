# Jones Automation Exercise

This project contains a Playwright and TypeScript automation test for the contact form at [https://test.netlify.app/](https://test.netlify.app/).

The test fills in the Name, Email, Phone, Company, and Website fields, selects **51–500** for Number of Employees, takes a screenshot before submitting, clicks **Request a call back**, and logs a message when the thank-you page appears.

## Project structure

```text
pages/
  ContactFormPage.ts       Page object for the contact form
tests/
  contactForm.spec.ts      Contact form automation test
playwright.config.ts       Playwright configuration
package.json               Project scripts and dependencies
tsconfig.json              TypeScript configuration
```

## Requirements

- Node.js 18 or later
- npm

## Install

From the project directory, run:

```powershell
npm install
npx.cmd playwright install chromium
```

## Run the test

Run the test in a visible Chromium browser:

```powershell
npm.cmd test
```

To use Playwright's interactive test UI instead:

```powershell
npm.cmd run test:ui
```

The test saves its pre-submission screenshot in the Playwright test output directory.
