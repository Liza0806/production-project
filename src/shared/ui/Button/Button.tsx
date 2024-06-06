import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    // eslint-disable-next-line no-unused-vars
    CLEAR = 'clear',
    CLEAR_INVERTED='clearInverted',
    // eslint-disable-next-line no-unused-vars
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    // eslint-disable-next-line no-unused-vars
    BACKGROUND_INVERTED = 'backgroundInverted'
}
export enum ButtonSize {
   M = 'size_m',
   L = 'size_l',
   XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props;
    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
    };

    // @ts-ignore
    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
