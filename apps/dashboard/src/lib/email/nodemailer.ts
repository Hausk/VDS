export const server = {
  host: process.env.EMAIL_SERVER_HOST as string,
  port: process.env.EMAIL_SERVER_PORT as number | undefined,
  auth: {
    user: process.env.EMAIL_SERVER_USER as string,
    pass: process.env.EMAIL_SERVER_PASSWORD as string,
  },
};
