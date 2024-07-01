import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    children: ReactNode;
}

export const Code = (props: CodeProps) => {
    const { className, children } = props;
    const { t } = useTranslation();
    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <button className={cls.copyBtn}>{t('Copy')}</button>
            <code>
                {children}
            </code>
        </pre>
    );
};
