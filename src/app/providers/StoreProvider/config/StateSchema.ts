import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import {
    AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { CombinedState, Dispatch } from 'redux';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';

import { NavigateOptions } from 'react-router';
import { To } from '@remix-run/router/dist/history';
import { ArticleDetailsSchema } from 'entities/Article';
import {
    ArticleDetailsCommentSchema,
    ArticleDetailsPageRecommendationsSchema,
    ArticleDetailsPageSchema,
} from 'Pages/ArticleDetailsPage';
import { ArticlePageSchema } from 'Pages/ArticlesPage';
import { ScrollSaverUISchema } from 'features/ScrollSaver';
import { LoginSchema } from
    '../../../../features/AuthByUserName/model/types/loginSchema';
import {
    AddCommentFormSchema,
} from '../../../../features/addCommentForm';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    scroll: ScrollSaverUISchema;

    // Async
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
   // articleDetailsComments?: ArticleDetailsCommentSchema;
   // articleDetailsRecommendations?: ArticleDetailsPageRecommendationsSchema;
    addCommentForm?: AddCommentFormSchema;
    articlesPage?: ArticlePageSchema;
    articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
// true = was mounted
    getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
  //  navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    dispatch?: Dispatch;
    state: StateSchema;
}
