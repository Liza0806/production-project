import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeLastname: (value: string) => void;
    onChangeFirstname: (value: string) => void;
    onChangeCity: (value: string) => void;
    onChangeAge: (value: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation();
    const {
        className,
        data,
        isLoading,
        error,
        onChangeLastname,
        onChangeFirstname,
        onChangeCity,
        onChangeAge,
        readonly,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(
                cls.ProfileCard,
                { [cls.loading]: true },
                [className],
            )}
            >
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(
                cls.ProfileCard,
                {},
                [className, cls.error],
            )}
            >
                <Text
                    title={t('There was an error loading your profile')}
                    text={t('Try to reload the page')}
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(
            cls.ProfileCard,
            {},
            [className],
        )}
        >
            <div className={cls.header} />
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t('your name')}
                    className={cls.input}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('your surname')}
                    className={cls.input}
                    onChange={onChangeLastname}
                    readonly={readonly}
                />
                <Input
                    value={data?.age}
                    placeholder={t('your age')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder={t('your city')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />

            </div>
        </div>
    );
};
