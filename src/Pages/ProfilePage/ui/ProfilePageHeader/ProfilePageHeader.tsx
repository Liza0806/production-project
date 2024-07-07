import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import {
    getProfileData,
    getProfileReadonly,
    profileActions,
    updateProfileData,
} from 'entities/Profile';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = profileData?.id === authData?.id;

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);
    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Profile')} />
            {canEdit && (
                <div className={cls.btnsWrapper}>
                    {
                        readonly ? (
                            <Button
                                className={cls.editBtn}
                                theme={ButtonTheme.OUTLINE}
                                onClick={onEdit}
                            >
                                {t('Edit')}
                            </Button>
                        )
                            : (
                                <>
                                    <Button
                                        className={cls.editBtn}
                                        theme={ButtonTheme.OUTLINE_RED}
                                        onClick={onCancelEdit}
                                    >
                                        {t('Undo')}
                                    </Button>
                                    <Button
                                        className={cls.saveBtn}
                                        theme={ButtonTheme.OUTLINE}
                                        onClick={onSave}
                                    >
                                        {t('Save')}
                                    </Button>
                                </>

                            )
                    }
                </div>
            )}
        </div>
    );
};
