import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'uk' : 'en');
    };

    return (
        <div className={classNames('', {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR}
                onClick={toggle}
            >
                {/* i18next-extract-disable-next-line */}
                {t(short ? 'Lang' : 'Language')}
            </Button>
        </div>
    );
});

export default LangSwitcher;
