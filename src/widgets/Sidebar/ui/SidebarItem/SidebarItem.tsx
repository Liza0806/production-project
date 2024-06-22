import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { SideBarItemType } from '../../model/items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item?: SideBarItemType;
    collapsed: boolean;
}

export const SidebarItem = (props: SidebarItemProps) => {
    const { item, collapsed } = props;
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);
    if (item?.authOnly && !isAuth) {
        return null;
    }
    return (
        <AppLink
            to={item?.path || '*'}
            theme={AppLinkTheme.SECONDARY}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}

        >
            {item && <item.Icon className={cls.icon} />}
            <span className={cls.link}>
                {t(item?.text || '*')}
            </span>
        </AppLink>

    );
};
