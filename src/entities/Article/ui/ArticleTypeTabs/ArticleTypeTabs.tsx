import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback, useMemo } from 'react';
import { Tabs, TabsItem } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from 'entities/Article';
import { useTranslation } from 'react-i18next';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = (props: ArticleTypeTabsProps) => {
    const { t } = useTranslation();
    const { className, value, onChangeType } = props;
    const typeTabs = useMemo<TabsItem[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('all'),
        },
        {
            value: ArticleType.IT,
            content: t('it'),
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('economics'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('science'),
        },
    ], [t]);

    const onTabClick = useCallback((tab:TabsItem) => {
        onChangeType(tab.value as ArticleType);
    }, [onChangeType]);

    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
            className={classNames('', {}, [className])}
        />
    );
};
