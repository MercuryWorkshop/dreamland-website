import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Dreamland.js',
      logo: {
        src: './src/assets/logo.png'
      },
      social: {
        github: 'https://github.com/mercuryworkshop/dreamlandjs',
        discord: 'https://discord.gg/GKKF3CmHPA'
      },
      sidebar: [
        {
          label: 'Getting Started',
          link: "/getting-started"
        }
      ]
    })
  ]
})
