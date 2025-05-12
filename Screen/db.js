export const buttons = [
  {
    type: 'Regulatory Signs',
    description: 'test sjdnkbadkwebwhfebsklhjklsdbcklfwehbewbclwb ',
    groups: [
       {
      group: 'Priority Signs',
      description: 'priority sign description',
      signs: [
        {
          name: 'stop sign',
          // or a URI
          description: 'stop it'
        },
        {
          name: 'Detour Ahead',
          //image: require('../assets/images/detour_ahead.png'),
          description: 'Shows that traffic will be diverted.'
        }
      ]
    },







    ],
  },



  {
    type: 'Warning Signs',
    groups: [
      { group: 'Road Work', signs: ['Men at Work', 'Detour Ahead'] },
      { group: 'School Zone', signs: ['School Crossing', 'Slow Down'] },
    ],
  },
  {
    type: '4 Signs',
    groups: [
      { group: 'Priority Signs', signs: ['Stop', 'Give Way'] },
      { group: 'Prohibitory Signs', signs: ['No Entry', 'No Left Turn'] },
    ],
  },
  {
    type: '3 Signs',
    groups: [
      { group: 'Priority Signs', signs: ['Stop', 'Give Way'] },
      { group: 'Prohibitory Signs', signs: ['No Entry', 'No Left Turn'] },
    ],
  },
];
