import("drizzle-kit").Config;
export default {
  schema: "./utils/schema.js",
  driver: "pg",
  dbCredentials: {
    connectionString:
      "postgresql://fasafedb_owner:HuCs6TXP1kcx@ep-weathered-frog-a2xsnoxd.eu-central-1.aws.neon.tech/fasafedb?sslmode=require",
  },
};
