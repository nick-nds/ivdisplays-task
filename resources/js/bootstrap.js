import { configureEcho } from '@laravel/echo-react';


const sessionToken = document
  .querySelector("meta[name='session-id']")
  ?.getAttribute("content");

configureEcho({
  broadcaster: "reverb",
  key: import.meta.env.VITE_REVERB_APP_KEY,
  wsHost: import.meta.env.VITE_REVERB_HOST,
  wsPort: import.meta.env.VITE_REVERB_PORT,
  forceTLS: false,
  enabledTransports: ['ws'],
  auth: {
    headers: {
      "X-Session-Token": sessionToken, // 👈 pass signed token
    },
  },
});
