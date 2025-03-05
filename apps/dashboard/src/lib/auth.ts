import { PrismaClient } from '@prisma/client';
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { nextCookies } from 'better-auth/next-js';
import {
  admin,
  bearer,
  multiSession,
  oAuthProxy,
  oidcProvider,
  oneTap,
  openAPI,
  organization,
  twoFactor,
} from 'better-auth/plugins';
import { passkey } from 'better-auth/plugins/passkey';

const prisma = new PrismaClient();

export const auth = betterAuth({
  debug: true,
  appName: 'Libre & vivant',
  database: prismaAdapter(prisma, {
    provider: 'sqlite',
  }),
  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ['google'],
    },
  },
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      disableSignUp: true,
      disableImplicitSignUp: true,
      requestSignUp: false,
    },
  },
  plugins: [
    admin(),
    organization(),
    twoFactor(),
    passkey(),
    openAPI(),
    bearer(),
    admin(),
    multiSession(),
    oneTap(),
    oAuthProxy(),
    nextCookies(),
    oidcProvider({
      loginPage: '/login',
    }),
  ],
});
