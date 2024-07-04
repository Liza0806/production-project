import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsData = (state: StateSchema) => state.articleDetails?.data
    || undefined;
// eslint-disable-next-line max-len
export const getArticleDetailsIsLoading = (state: StateSchema) => state.articleDetails?.isLoading
    || false;
export const getArticleDetailsError = (state: StateSchema) => state.articleDetails?.error
    || undefined;
