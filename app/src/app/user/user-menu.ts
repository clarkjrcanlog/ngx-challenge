import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: '/user',
    },
    {
      title: 'User Menu 1',
      icon: 'person-outline',
      link: '/user/test-page',
    },
    {
      title: 'User Menu 2',
      icon: 'person-outline',
    },
    {
      title: 'User Menu 3',
      icon: 'person-outline',
      children: [
        {
            title: 'User Menu 3.1',
        },
        {
            title: 'User Menu 3.2',
        },
        {
            title: 'User Menu 3.3',
            children: [
                {
                    title: 'User Menu 3.3.1',
                },
                {
                    title: 'User Menu 3.3.2',
                },
                {
                    title: 'User Menu 3.3.3',
                },
              ]
        },
      ]
    }
];
