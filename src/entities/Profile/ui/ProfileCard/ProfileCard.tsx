import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from 'entities/Currency/model/types/currency';
import { CurrencySelect } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';
import { CountrySelect } from 'entities/Country';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeLastname?: (value?: string) => void;
    onChangeFirstname?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation();
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeLastname,
        onChangeFirstname,
        onChangeCity,
        onChangeAge,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,

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
    const mods: Mods = {
        [cls.editing]: !readonly,
    };
    return (
        <div className={classNames(
            cls.ProfileCard,
            mods,
            [className],
        )}
        >
            <div className={cls.header} />
            <div className={cls.data}>
                <div className={cls.avatarWrapper}>
                    {data?.avatar
                        && <Avatar src={data?.avatar} alt={data.username} />}
                </div>
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
                    placeholder={t('age')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder={t('city')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    value={data?.username}
                    placeholder={t('username')}
                    className={cls.input}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('avatar')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
