import { createStore } from 'vuex'


export default createStore({
  state: {
    posts: [
        { 
          title: 'First website: prerequisites',
          category: 'Coding',
          description: 'How to get started with your first website',
          path: '/post2',
        },
        {
          title: 'Getting Started',
          category: 'Coding', 
          description: 'The story of me and my first website',
          path: '/post1'
        },
        {
          title: 'third',
          category: 'Coding', 
          description: 'The story of me and my first website',
          path: '/post1'
        },
      ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})