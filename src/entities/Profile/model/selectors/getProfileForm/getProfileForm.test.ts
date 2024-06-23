import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

const form = {
    username: 'name',
    age: 22,
    country: Country.Kazakhstan,
    lastname: '',
    first: 'name1',
    city: 'my-city',
    currency: Currency.USD,
};

describe('getProfileForm.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});

// npm run test:unit getProfileForm.test.ts
