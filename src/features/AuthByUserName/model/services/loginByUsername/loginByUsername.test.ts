import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('login by username test', () => {
    test('should be able to sign in', async () => {
        const userValue = { username: 'username', id: '123' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ username: 'username', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toEqual('fulfilled');
        expect(result.payload).toEqual(userValue);
    });

    test('403 error login', async () => {
        const userValue = { username: 'username', id: '123' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: '403' }));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ username: 'username', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toEqual('rejected');
    });
});
// jest.mock('axios');
// const mockedAxios = jest.mocked(axios, true);
//
// describe('login by username test', () => {
//     let dispatch: Dispatch;
//     let getState: () => StateSchema;
//
//     beforeEach(() => {
//         dispatch = jest.fn();
//         getState = jest.fn();
//     });
//
//     test('should be able to sign in', async () => {
//      const userValue = { username: 'username', id: '123' };
//      mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
//      const action = loginByUsername({ username: 'username', password: '123' });
//      const result = await action(dispatch, getState, undefined);
//      console.log(result);
//
//         expect(dispatch).toHaveBeenCalledTimes(3);
//         expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
//         expect(mockedAxios.post).toHaveBeenCalled();
//         expect(result.meta.requestStatus).toEqual('fulfilled');
//         expect(result.payload).toEqual(userValue);
//     });
//
//     test('403 error login', async () => {
//         //  const userValue = { username: 'username', id: '123' };
//         mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
//         const action = loginByUsername({ username: 'username', password: '123' });
//         const result = await action(dispatch, getState, undefined);
//         console.log(result);
//
//         expect(dispatch).toHaveBeenCalledTimes(2);
//         expect(mockedAxios.post).toHaveBeenCalled();
//         expect(result.meta.requestStatus).toEqual('rejected');
//     });
// });
// // npm run test:unit loginByUsername.test.ts
