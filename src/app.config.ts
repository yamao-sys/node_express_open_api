if (!process.env.NODE_ENV) {
  console.error("NODE_ENV environment variables is missing")
  process.exit()
}

if (!process.env.BASE_URL) {
  console.error("BASE_URL environment variables is missing")
  process.exit()
}

if (!process.env.DB_HOST) {
  console.error("DB_HOST environment variables is missing")
  process.exit()
}

if (!process.env.DB_NAME) {
  console.error("DB_NAME environment variables is missing")
  process.exit()
}

if (!process.env.SYNCHRONIZE) {
  console.error("SYNCHRONIZE environment variables is missing")
  process.exit()
}

if (!process.env.MIGRATIONS_RUN) {
  console.error("MIGRATIONS_RUN environment variables is missing")
  process.exit()
}

if (!process.env.JWT_SECRET) {
  console.error("JWT_SECRET environment variables is missing")
  process.exit()
}

export const appConfig = {
  app: {
    nodeEnv: process.env.NODE_ENV,
    baseUrl: process.env.BASE_URL,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    synchronize: JSON.parse(process.env.SYNCHRONIZE),
    dropSchema: JSON.parse(process.env?.DROP_SCHEMA ?? 'false'),
    migrationsRun: JSON.parse(process.env.MIGRATIONS_RUN),
    jwtSecret: process.env.JWT_SECRET,
  },
}
