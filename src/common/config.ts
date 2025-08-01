const {
  GOOGLE_SERVICE_TYPE = '',
  GOOGLE_PROJECT_ID = '',
  GOOGLE_PRIVATE_KEY_ID = '',
  GOOGLE_PRIVATE_KEY = '',
  GOOGLE_CLIENT_EMAIL = '',
  GOOGLE_CLIENT_ID = '',
  GOOGLE_AUTH_URI = '',
  GOOGLE_TOKEN_URI = '',
  GOOGLE_AUTH_PROVIDER_CERT_URL = '',
  GOOGLE_CLIENT_CERT_URL = '',
  GOOGLE_UNIVERSE_DOMAIN = '',
  GOOGLE_SCOPE = '',
  GOOGLE_PROJECT_NUMBER = '',
  GOOGLE_CALENDAR_ID = '',
  PAYMONGO_PUBLIC_KEY = '',
  PAYMONGO_SECRET_KEY = '',
  PAYMONGO_API_BASE_URL = ''
} = process.env;

export const googleConfig = {
  maxResults: 50,
  type: GOOGLE_SERVICE_TYPE,
  projectId: GOOGLE_PROJECT_ID,
  projectNumber: GOOGLE_PROJECT_NUMBER,
  privateKeyId: GOOGLE_PRIVATE_KEY_ID,
  privateKey: GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  calendarId: GOOGLE_CALENDAR_ID,
  clientEmail: GOOGLE_CLIENT_EMAIL,
  clientId: GOOGLE_CLIENT_ID,
  authUri: GOOGLE_AUTH_URI,
  tokenUri: GOOGLE_TOKEN_URI,
  scopes: GOOGLE_SCOPE,
  auth_provider_x509_cert_url: GOOGLE_AUTH_PROVIDER_CERT_URL,
  client_x509_cert_url: GOOGLE_CLIENT_CERT_URL,
  universe_domain: GOOGLE_UNIVERSE_DOMAIN
};

export const payMongoConfig = {
  credentials: {
    publicKey: PAYMONGO_PUBLIC_KEY,
    secretKey: PAYMONGO_SECRET_KEY
  },
  paths: {
    createCheckoutSession: 'v1/checkout_sessions',
    getCheckoutSessionById: 'v1/checkout_sessions/{sessionId}'
  },
  baseUrl: PAYMONGO_API_BASE_URL
};

export const apiSvcUrl =
  process.env.NODE_ENV === 'development' ? process.env.API_SVC_URL : '';
