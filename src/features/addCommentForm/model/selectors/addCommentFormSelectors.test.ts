import { StateSchema } from 'app/providers/StoreProvider';
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from 'features/addCommentForm/model/selectors/addCommentFormSelectors';

describe(' addCommentFormSelectors.test.ts', () => {
    test('should return data', () => {
        const data = 'string';
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text: 'string',
            },
        };
        expect(getAddCommentFormText(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state data', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormText(state as StateSchema)).toEqual(undefined);
    });
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                error: 'error',
            },
        };
        expect(getAddCommentFormError(state as StateSchema)).toEqual('error');
    });
    test('should work with empty state error', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined);
    });
});
// npm run test:unit addCommentFormSelectors.test.ts
