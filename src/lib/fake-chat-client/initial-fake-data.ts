import { Conversation, User } from '@lib/types';

export const Amr: User = {
  id: 'Amr123456789',
  name: 'Amr',
};

const John: User = {
  id: 'John123456789',
  name: 'John',
};

const Maria: User = {
  id: 'Maria123456789',
  name: 'Maria',
};

const Felix: User = {
  id: 'Felix123456789',
  name: 'Felix',
};

const Amanda: User = {
  id: 'Amanda123456789',
  name: 'Amanda',
};

const Robert: User = {
  id: 'Robert123456789',
  name: 'Robert',
};

export const initialFakeData: Conversation[] = [
  {
    id: '5f58bcd7a88fab5f34df94d6',
    name: 'eiusmod nostrud sunt',
    last_updated: new Date('2020-05-04T03:37:18').getTime(),
    created_at: new Date('2020-05-04T03:37:18').getTime(),
    user: John,
    messages: [
      {
        id: '5f58bcd7352396fffbae8b6e',
        text: 'Lorem labore ea et',
        created_by: Amr,
        last_updated: new Date('2020-02-16T04:35:16').getTime(),
        created_at: new Date('2020-02-16T04:35:16').getTime(),
      },
      {
        id: '5f58bcd7d95151eaa14ab8aa',
        text: 'ex excepteur deserunt laboris',
        created_by: John,
        last_updated: new Date('2020-08-18T11:16:45').getTime(),
        created_at: new Date('2020-08-18T11:16:45').getTime(),
      },
      {
        id: '5f58bcd7f7745918c2252086',
        text: 'dolore sunt reprehenderit cupidatat',
        created_by: Amr,
        last_updated: new Date('2020-03-23T10:06:33').getTime(),
        created_at: new Date('2020-03-23T10:06:33').getTime(),
      },
    ],
  },
  {
    id: '5f58bcd7200c90cfaac93778',
    name: 'laborum irure enim',
    last_updated: new Date('2020-01-18T02:37:10').getTime(),
    created_at: new Date('2020-01-18T02:37:10').getTime(),
    user: Maria,
    messages: [
      {
        id: '5f58bcd7fd44c584cdc6a3c3',
        text: 'nostrud eiusmod non ut',
        created_by: Maria,
        last_updated: new Date('2020-07-13T03:56:26').getTime(),
        created_at: new Date('2020-07-13T03:56:26').getTime(),
      },
      {
        id: '5f58bcd7d5f9b5ff7c3f4216',
        text: 'voluptate nulla commodo reprehenderit',
        created_by: Maria,
        last_updated: new Date('2020-01-02T11:50:36').getTime(),
        created_at: new Date('2020-01-02T11:50:36').getTime(),
      },
      {
        id: '5f58bcd7e7211b14921efa23',
        text: 'quis laboris fugiat est',
        created_by: Amr,
        last_updated: new Date('2020-02-11T06:04:03').getTime(),
        created_at: new Date('2020-02-11T06:04:03').getTime(),
      },
      {
        id: '5f58bcd759c87fa1b24db871',
        text: 'et aliqua nisi laborum',
        created_by: Maria,
        last_updated: new Date('2020-09-07T10:33:39').getTime(),
        created_at: new Date('2020-09-07T10:33:39').getTime(),
      },
      {
        id: '5f58bcd7587a80c99f3a28e6',
        text: 'deserunt excepteur in eu',
        created_by: Amr,
        last_updated: new Date('2020-02-08T01:22:02').getTime(),
        created_at: new Date('2020-02-08T01:22:02').getTime(),
      },
      {
        id: '5f58bcd7bb6ee157a6ee7be4',
        text: 'amet sunt veniam aute',
        created_by: Amr,
        last_updated: new Date('2020-06-02T11:14:29').getTime(),
        created_at: new Date('2020-06-02T11:14:29').getTime(),
      },
      {
        id: '5f58bcd76bf97a358212baab',
        text: 'laboris commodo do aliqua',
        created_by: Maria,
        last_updated: new Date('2020-04-19T10:27:37').getTime(),
        created_at: new Date('2020-04-19T10:27:37').getTime(),
      },
    ],
  },
  {
    id: '5f58bcd7c23d93722017ccb6',
    name: 'ex cupidatat elit',
    last_updated: new Date('2020-05-15T06:24:26').getTime(),
    created_at: new Date('2020-05-15T06:24:26').getTime(),
    user: Felix,
    messages: [
      {
        id: '5f58bcd72dfebe40537c379e',
        text: 'amet sint laborum ut',
        created_by: Amr,
        last_updated: new Date('2020-05-14T12:24:10').getTime(),
        created_at: new Date('2020-05-14T12:24:10').getTime(),
      },
      {
        id: '5f58bcd7b449b1cfae268ee1',
        text: 'nostrud adipisicing Lorem aute',
        created_by: Felix,
        last_updated: new Date('2020-07-31T04:26:38').getTime(),
        created_at: new Date('2020-07-31T04:26:38').getTime(),
      },
      {
        id: '5f58bcd7357fd38a634ada62',
        text: 'proident nisi in nulla',
        created_by: Amr,
        last_updated: new Date('2020-07-13T12:50:37').getTime(),
        created_at: new Date('2020-07-13T12:50:37').getTime(),
      },
      {
        id: '5f58bcd744483b63148b8620',
        text: 'exercitation Lorem cillum elit',
        created_by: Felix,
        last_updated: new Date('2020-07-25T07:29:04').getTime(),
        created_at: new Date('2020-07-25T07:29:04').getTime(),
      },
      {
        id: '5f58bcd7bf8843d460502aad',
        text: 'qui sint irure sunt',
        created_by: Amr,
        last_updated: new Date('2020-02-24T03:21:14').getTime(),
        created_at: new Date('2020-02-24T03:21:14').getTime(),
      },
    ],
  },
  {
    id: '5f58bcd7e81abbc8cde13cde',
    name: 'ut officia aliqua',
    last_updated: new Date('2020-02-23T11:08:58').getTime(),
    created_at: new Date('2020-02-23T11:08:58').getTime(),
    user: Amanda,
    messages: [
      {
        id: '5f58bcd7a34519f19acd17ab',
        text: 'anim dolor laboris nulla',
        created_by: Amr,
        last_updated: new Date('2020-03-31T08:52:51').getTime(),
        created_at: new Date('2020-03-31T08:52:51').getTime(),
      },
      {
        id: '5f58bcd78cc10cd1c1eab267',
        text: 'deserunt reprehenderit deserunt eiusmod',
        created_by: Amr,
        last_updated: new Date('2020-03-04T02:50:41').getTime(),
        created_at: new Date('2020-03-04T02:50:41').getTime(),
      },
      {
        id: '5f58bcd7b1bd2b6c9c60103a',
        text: 'cillum occaecat et culpa',
        created_by: Amanda,
        last_updated: new Date('2020-04-06T10:26:35').getTime(),
        created_at: new Date('2020-04-06T10:26:35').getTime(),
      },
      {
        id: '5f58bcd7a42c13c4c10de5b6',
        text: 'veniam et eiusmod eu',
        created_by: Amanda,
        last_updated: new Date('2020-06-27T01:06:41').getTime(),
        created_at: new Date('2020-06-27T01:06:41').getTime(),
      },
      {
        id: '5f58bcd7334d5227c8db9520',
        text: 'incididunt ullamco irure ut',
        created_by: Amr,
        last_updated: new Date('2020-03-08T05:36:47').getTime(),
        created_at: new Date('2020-03-08T05:36:47').getTime(),
      },
      {
        id: '5f58bcd750b3180330f4600f',
        text: 'voluptate est eiusmod culpa',
        created_by: Amr,
        last_updated: new Date('2020-07-26T11:58:12').getTime(),
        created_at: new Date('2020-07-26T11:58:12').getTime(),
      },
      {
        id: '5f58bcd76fbc7df84b0a3cf4',
        text: 'ipsum esse cupidatat sit',
        created_by: Amr,
        last_updated: new Date('2020-04-11T06:57:03').getTime(),
        created_at: new Date('2020-04-11T06:57:03').getTime(),
      },
      {
        id: '5f58bcd79c0390617f81a01f',
        text: 'nostrud ut deserunt aute',
        created_by: Amr,
        last_updated: new Date('2020-04-29T06:29:58').getTime(),
        created_at: new Date('2020-04-29T06:29:58').getTime(),
      },
      {
        id: '5f58bcd72564603b846a41ac',
        text: 'nisi do tempor non',
        created_by: Amanda,
        last_updated: new Date('2020-02-16T03:05:41').getTime(),
        created_at: new Date('2020-02-16T03:05:41').getTime(),
      },
    ],
  },
  {
    id: '5f58bcd7a3d6fed0fd68b7a9',
    name: 'consequat amet cupidatat',
    last_updated: new Date('2020-04-08T06:45:00').getTime(),
    created_at: new Date('2020-04-08T06:45:00').getTime(),
    user: Robert,
    messages: [
      {
        id: '5f58bcd7c34da3af332cc958',
        text: 'tempor elit sit incididunt',
        created_by: Robert,
        last_updated: new Date('2020-06-15T06:40:25').getTime(),
        created_at: new Date('2020-06-15T06:40:25').getTime(),
      },
      {
        id: '5f58bcd706ac7b83822c692f',
        text: 'laboris commodo id anim',
        created_by: Amr,
        last_updated: new Date('2020-04-08T06:26:18').getTime(),
        created_at: new Date('2020-04-08T06:26:18').getTime(),
      },
      {
        id: '5f58bcd7e0a785e3e5516e47',
        text: 'quis dolore occaecat irure',
        created_by: Amr,
        last_updated: new Date('2020-07-10T06:56:34').getTime(),
        created_at: new Date('2020-07-10T06:56:34').getTime(),
      },
      {
        id: '5f58bcd79d24061ede254048',
        text: 'irure dolor nulla ullamco',
        created_by: Robert,
        last_updated: new Date('2020-02-14T02:14:32').getTime(),
        created_at: new Date('2020-02-14T02:14:32').getTime(),
      },
      {
        id: '5f58bcd7a6bf2527d1bde8cd',
        text: 'mollit ipsum occaecat aute',
        created_by: Amr,
        last_updated: new Date('2020-03-25T05:35:35').getTime(),
        created_at: new Date('2020-03-25T05:35:35').getTime(),
      },
      {
        id: '5f58bcd79cac300d1980db1b',
        text: 'ad cillum occaecat cupidatat',
        created_by: Amr,
        last_updated: new Date('2020-08-01T07:23:38').getTime(),
        created_at: new Date('2020-08-01T07:23:38').getTime(),
      },
      {
        id: '5f58bcd75e712600083cd4e6',
        text: 'incididunt excepteur qui magna',
        created_by: Amr,
        last_updated: new Date('2020-04-17T04:37:53').getTime(),
        created_at: new Date('2020-04-17T04:37:53').getTime(),
      },
      {
        id: '5f58bcd7e99102f90e2c9130',
        text: 'labore aute ad laborum',
        created_by: Robert,
        last_updated: new Date('2020-03-15T10:43:57').getTime(),
        created_at: new Date('2020-03-15T10:43:57').getTime(),
      },
      {
        id: '5f58bcd7f7f92c4b24287bbd',
        text: 'ad esse sunt dolor',
        created_by: Amr,
        last_updated: new Date('2020-05-16T11:17:31').getTime(),
        created_at: new Date('2020-05-16T11:17:31').getTime(),
      },
      {
        id: '5f58bcd7494bcc51e9df2d4e',
        text: 'nisi pariatur quis ut',
        created_by: Amr,
        last_updated: new Date('2020-01-21T05:19:04').getTime(),
        created_at: new Date('2020-01-21T05:19:04').getTime(),
      },
    ],
  },
];
