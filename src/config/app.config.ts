interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Team Member', 'Administrator'],
  tenantName: 'Company',
  applicationName: 'review request',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage users',
    'Manage companies',
    'Manage reviews',
    'Manage products',
    'Manage orders',
    'Manage feedbacks',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/13a51e12-7d46-45f8-b813-720efc2ee995',
};
