const PROTOCOL = 'http';
const DOMAIN = 'localhost';
const PORT = '3200';
const TransformedPort = PORT ? `:${PORT}` : '';

export const environment = {
  production: true,
  baseURL: `${PROTOCOL}://${DOMAIN}${TransformedPort}`,
};
