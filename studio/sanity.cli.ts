import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'vi3hulky',
    dataset: 'production'
  },
  studioHost: 'athenium-website',
  deployment: {
    appId: 'k5hcdaxngnqgpnz4g32r97kg',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
})
