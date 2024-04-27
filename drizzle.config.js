/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  driver: "pg",
  dbCredentials: {
    connectionString: NEXT_PUBLIC_DATABASE_URL,
  },
};
