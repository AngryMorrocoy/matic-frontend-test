import { ArticleSchema } from "./types";

export function getArticles(): ArticleSchema[] {
  const sampleArticles: ArticleSchema[] = [
    {
      author: 'asdasd',
      title: 'aaaa',
      content:
        'hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola ',
      createdAt: '2022-09-25T23:02:34.228Z',
      updatedAt: '2022-09-25T23:02:34.228Z',
      imageUrl: 'https://picsum.photos/533/400?random=87',
      id: '291b7b99-55b2-4c14-b286-133518f300e3',
    },
    {
      author: 'asda',
      title: 'aaa',
      content: 'dddd',
      createdAt: '2022-09-25T23:03:11.892Z',
      updatedAt: '2022-09-25T23:03:11.892Z',
      imageUrl: 'https://picsum.photos/533/400?random=38',
      id: 'd64667c5-d11c-4ffb-a718-78e7cf85a9e1',
    },
    {
      author: 'asdasd',
      title: 'asdasd',
      content: 'asdasdasd',
      createdAt: '2022-09-25T23:04:03.487Z',
      updatedAt: '2022-09-25T23:04:03.487Z',
      imageUrl: 'https://picsum.photos/533/400?random=25',
      id: '73415e8b-fa70-4967-970f-74b6c5c3291b',
    },
    {
      author: 'Miguel Durán',
      title: 'New Title',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus nunc vel urna consequat porta. Vivamus erat mauris, consectetur at magna vel, congue scelerisque sem.',
      createdAt: '2022-09-25T23:14:27.790Z',
      updatedAt: '2022-09-25T23:14:27.790Z',
      imageUrl: 'https://picsum.photos/533/400?random=70',
      id: '5f91830c-ad16-4259-b6f2-4afcc8cbe6a5',
    },
  ];

  return sampleArticles;
}
