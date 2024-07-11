import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Article, ArticleType, ArticleView } from '../../model/types/article';
import { ArticleList } from './ArticleList';

const article = {
    id: 'string',
    title: 'string',
    user: {
        id: '1',
        username: 'admin',
        avatar: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    },
    subtitle: 'string',
    views: 334,
    createdAt: '26.02.2022',
    type: [
        ArticleType.IT, ArticleType.IT, ArticleType.IT, ArticleType.IT,
    ],
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                // eslint-disable-next-line max-len
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                // eslint-disable-next-line max-len
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                // eslint-disable-next-line max-len
            ],
        },
        {
            id: '4',
            type: 'CODE',
            // eslint-disable-next-line max-len
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: '5',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                // eslint-disable-next-line max-len
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                // eslint-disable-next-line max-len
            ],
        },
        {
            id: '2',
            type: 'IMAGE',
            // eslint-disable-next-line max-len
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Рисунок 1 - скриншот сайта',
        },
        {
            id: '3',
            type: 'CODE',
            // eslint-disable-next-line max-len
            code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
        },
        {
            id: '7',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                // eslint-disable-next-line max-len
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
            ],
        },
    ],
} as Article;

export default {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

export const ArticleListSmallView = Template.bind({});
ArticleListSmallView.args = {
    articles: new Array(9)
        .fill(article),
    isLoading: false,
};
export const ArticleListBigView = Template.bind({});
ArticleListBigView.args = {
    articles: new Array(3)
        .fill(article),
    isLoading: false,
    view: ArticleView.BIG,
};

export const ArticleListIsLoadingSmallView = Template.bind({});
ArticleListIsLoadingSmallView.args = {
    articles: new Array(9)
        .fill(article),
    isLoading: true,
};

export const ArticleListIsLoadingBigView = Template.bind({});
ArticleListBigView.args = {
    articles: new Array(3)
        .fill(article),
    isLoading: true,
    view: ArticleView.BIG,
};
