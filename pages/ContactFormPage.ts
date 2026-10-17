import { Page, Locator, expect } from '@playwright/test';

export class ContactFormPage {
  private readonly nameInput: Locator;
  private readonly emailInput: Locator;
  private readonly phoneInput: Locator;
  private readonly companyInput: Locator;
  private readonly websiteInput: Locator;
  private readonly numberOfEmployeesSelect: Locator;
  private readonly requestCallBackButton: Locator;
  private readonly thankYouHeading: Locator;

  constructor(private readonly page: Page) {
    this.nameInput = page.locator('#name');
    this.emailInput = page.locator('#email');
    this.phoneInput = page.locator('#phone');
    this.companyInput = page.locator('#company');
    this.websiteInput = page.locator('#website');
    this.numberOfEmployeesSelect = page.locator('#employees');
    this.requestCallBackButton = page.locator('form button');
    this.thankYouHeading = page.locator('h1');
  }

  async goto(): Promise<void> {
    await this.page.goto('/');
  }

  async fillName(value: string): Promise<void> {
    await this.nameInput.fill(value);
  }

  async fillEmail(value: string): Promise<void> {
    await this.emailInput.fill(value);
  }

  async fillPhone(value: string): Promise<void> {
    await this.phoneInput.fill(value);
  }

  async fillCompany(value: string): Promise<void> {
    await this.companyInput.fill(value);
  }

  async fillWebsite(value: string): Promise<void> {
    await this.websiteInput.fill(value);
  }

  async selectNumberOfEmployees(value: string): Promise<void> {
    await this.numberOfEmployeesSelect.selectOption(value);
  }

  async clickRequestCallBack(): Promise<void> {
    await this.requestCallBackButton.click();
  }

  async expectThankYouPageVisible(): Promise<void> {
    await expect(this.thankYouHeading).toBeVisible();
    await expect(this.thankYouHeading).toHaveText('Thank You!');
  }
}
