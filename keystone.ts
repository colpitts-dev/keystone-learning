import 'dotenv/config'
import { config, list } from '@keystone-6/core'
import { text } from '@keystone-6/core/fields'

const databaseURL =
  process.env.DATABASE_URL || 'postgres://localhost:5432/keystone-learning_dev'

export default config({
  db: {
    provider: 'postgresql',
    url: databaseURL,
    onConnect: async (context) => {
      console.log('💾 Connected to database')
    },
    // Optional advanced configuration
    enableLogging: true,
    useMigrations: true,
    idField: { kind: 'uuid' },
    //shadowDatabaseUrl: 'postgres://dbuser:dbpass@localhost:5432/shadowdb',
  },
  lists: {
    Person: list({
      fields: {
        name: text({ validation: { isRequired: true } }),
        email: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
      },
    }),
  },
})
