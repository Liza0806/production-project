import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from 'features/AuthByUserName';
import { loginActions, loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';

describe('loginSlice.test()', () => {
    test('test set usernsame ', () => {
        const state: DeepPartial<LoginSchema> = { username: 'username' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('123123'),
        )).toEqual({ username: '123123' });
    });

    test('test set password ', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('123123'),
        )).toEqual({ password: '123123' });
    });
});
// npm run test:unit loginSlice.test.ts
