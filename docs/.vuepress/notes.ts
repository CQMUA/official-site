import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const guideNote = defineNoteConfig({
  dir: 'guide',
  link: '/guide',
  sidebar: [
    {
      text: '指南',
      collapsed: false,
      items: 'auto',
    },
  ],
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [guideNote],
})
