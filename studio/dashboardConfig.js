export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f79f0f2a7879ae7a0cc3d3f',
                  title: 'Sanity Studio',
                  name: 'flexmoney-test-studio',
                  apiId: '5b8630a8-9ff5-42d2-b040-7c7738c0d509'
                },
                {
                  buildHookId: '5f79f0f2218ca0daaf455082',
                  title: 'Blog Website',
                  name: 'flexmoney-test',
                  apiId: 'bec5c916-980a-469c-9490-97ece11f7bbd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joshensongric/flexmoney-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://flexmoney-test.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
