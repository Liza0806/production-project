import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React from 'react';
import Button, { ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    };

    return (
        <div className={classNames('', {}, [className])}>
            <Button theme={ThemeButton.CLEAR} onClick={toggle}>{t('Language')}</Button>
        </div>
    );
};

export default LangSwitcher;
