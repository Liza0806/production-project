import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSaver, ScrollSaverUISchema } from 'features/ScrollSaver';

const initialState: ScrollSaverUISchema = {
    scroll: {},
};
const scrollSchemaSlice = createSlice({
    name: 'scroll',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{ path: string, position: number }>,
        ) => {
            state.scroll[payload.path] = payload.position;
        },

    },
});

export const { actions: scrollSchemaActions } = scrollSchemaSlice;
export const { reducer: scrollSchemaSliceReducer } = scrollSchemaSlice;
