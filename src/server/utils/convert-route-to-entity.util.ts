const mapping: Record<string, string> = {
  companies: 'company',
  feedbacks: 'feedback',
  orders: 'order',
  products: 'product',
  reviews: 'review',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
