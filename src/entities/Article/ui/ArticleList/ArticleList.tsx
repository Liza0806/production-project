import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import { memo } from 'react';
import {
    ArticleListItemSkeleton,
} from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { nanoid } from '@reduxjs/toolkit';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading: boolean;
    view?: ArticleView;
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
    } = props;
    const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item) => <ArticleListItemSkeleton view={view} className={cls.card} />);

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                {getSkeletons(view)}
            </div>

        );
    }
    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
        />
    );
    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0 ? articles.map(renderArticle)
                : null}

        </div>
    );
});