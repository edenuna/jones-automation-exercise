import { test } from '@playwright/test';
import { ContactFormPage } from '../pages/ContactFormPage';

const requiredContactDetails = {
  name: 'Eden Mottahede',
  email: 'eden.mottahede@example.com',
  phone: '0501234567',
};

test('TC-01: Submit a contact form with all fields completed', async ({ page }, testInfo) => {
  const contactFormPage = new ContactFormPage(page);
  const contactDetails = {
    ...requiredContactDetails,
    company: 'Jones Automation',
    website: 'https://www.jonesautomation.example',
  };

  await test.step('Precondition: Open the contact form', async () => {
    await contactFormPage.goto();
  });

  await test.step('Enter contact details in all form fields', async () => {
    await contactFormPage.fillName(contactDetails.name);
    await contactFormPage.fillEmail(contactDetails.email);
    await contactFormPage.fillPhone(contactDetails.phone);
    await contactFormPage.fillCompany(contactDetails.company);
    await contactFormPage.fillWebsite(contactDetails.website);
  });

  await test.step('Select 51-500 employees', async () => {
    await contactFormPage.selectNumberOfEmployees('51-500');
  });

  await test.step('Capture the completed form before submission', async () => {
    await page.screenshot({
      path: testInfo.outputPath('contact-form-before-submit.png'),
      fullPage: true,
    });
  });

  await test.step('Submit the contact form', async () => {
    await contactFormPage.clickRequestCallBack();
  });

  await test.step('Verify the thank-you page is displayed', async () => {
    await contactFormPage.expectThankYouPageVisible();
    console.log('Reached the thank-you page.');
  });
});
