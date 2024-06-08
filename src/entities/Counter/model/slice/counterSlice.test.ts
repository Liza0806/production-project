import { counterReducer } from 'entities/Counter';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { counterActions } from 'entities/Counter/model/slice/counterSlice';
import { CounterSchema } from '../types/counterSchema';

describe('counterSlice.test()', () => {
    test('decremented', () => {
        const state: CounterSchema = { value: 10 };
        expect(
            counterReducer(state, counterActions.decremented()),
        ).toEqual({ value: 9 });
    });
    test('incremented', () => {
        const state: CounterSchema = { value: 10 };
        expect(
            counterReducer(state, counterActions.incremented()),
        ).toEqual({ value: 11 });
    });
    test('should work with empty state', () => {
        expect(
            counterReducer(undefined, counterActions.incremented()),
        ).toEqual({ value: 1 });
    });
});
// npm run test:unit counterSlice.test.ts
