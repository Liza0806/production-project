import { LoginSchema } from 'features/AuthByUserName';
import { loginActions, loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import {
    profileActions, profileReducer, ProfileSchema, updateProfileData, ValidateProfileError,
} from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { action } from '@storybook/addon-actions';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Ukraine,
    lastname: 'ulbi tv',
    first: 'asd',
    city: 'asf',
    currency: Currency.USD,
};

describe('profileSlice.test()', () => {
    test('test set readonly ', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: true };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(false),
        )).toEqual({ readonly: false });
    });

    test('test cansel edit ', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            readonly: true,
            validateErrors: undefined,
            form: data,
            data,
        });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: 'name' } };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({ username: 'username' }),
        )).toEqual({
            form: { username: 'username' },
        });
    });
    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });
    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, ''),

        )).toEqual({
            isLoading: false,
            data,
            form: data,
            validateErrors: undefined,
            validateError: undefined,
            readonly: true,
        });
    });
});
// npm run test:unit profileSlice.test.ts
