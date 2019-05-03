module.exports = state => [
    h1(state.title),
    p([
      'this is the ',
      Link({ to: 'https://github.com/magic-modules' }, '@magic-modules'),
      ' GitBadges component. ',
      state.description,
    ]),

    h2({ id: 'installation' }, 'installation'),
    p(
      'installation is done using npm. for now, all magic modules are living on github and not on npm.',
    ),
    p('note the missing @ before magic-modules.'),
    p('this is how we install npm modules from github.'),
    Pre(`npm install magic-modules/git-badges`),

    h2({ id: 'require' }, 'require'),
    p('first add the component to the assets'),
    Pre(`
// assets/index.js
module.exports = {
  //...other exports
  GitBadges: require('@magic-modules/git-badges'),
}`),
    h2({ id: 'usage' }, 'usage'),
    p(
      'in a page/component, just pass the badge user/project string for those badges you want to show:',
    ),
    Pre(`
GitBadges({
  // show all badges,
  // insert project into the various urls of the badges
  project: 'user/project',

  // optional if different to project above
  // every one of this arguments can be false to hide a badge
  npm: 'user/project' || false,
  travis: 'user/project' || false,
  coveralls: 'user/project' || false,
  appveyor: 'user/project' || false, // - will automatically be removed from the user (appveyor needs that)
  greenkeeper: 'user/project' || false,

  // optional, master is default value
  branch: 'master',
})
`),
    p('renders'),
    GitBadges({
      project: 'magic-modules/git-badges',
    }),
  ]
