import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleView } from 'entities/Article';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg';
import { memo } from 'react';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (newView:ArticleView)=> void;
}
const viewTypes = [
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
];
export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;
    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };
    return (
        <div className={classNames('', {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button theme={ButtonTheme.CLEAR} onClick={onClick(viewType.view)}>
                    <Icon Svg={viewType.icon} />
                </Button>
            ))}
        </div>
    );
});
