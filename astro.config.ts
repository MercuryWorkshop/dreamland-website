import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Dreamland.js',
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            href: "/logo.png"
          }
        }
      ],
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
          link: '/getting-started'
        },
        {
          label: 'Introduction',
          autogenerate: {
            directory: 'intro'
          }
        },
        {
          label: 'Reactivity',
          autogenerate: {
            directory: 'reactivity'
          }
        },
        {
          label: "Styling",
          autogenerate: {
            directory: "styling"
          }
        }
      ]
    })
  ]
})
