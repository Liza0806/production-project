import { StateSchema } from 'app/providers/StoreProvider';

// eslint-disable-next-line max-len
export const getArticleRecommendationsIsLoading = (state: StateSchema) => state.articleDetailsPage?.comments?.isLoading;
// eslint-disable-next-line max-len
export const getArticleRecommendationsError = (state: StateSchema) => state.articleDetailsPage?.comments?.error;
