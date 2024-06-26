import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title Title',
    text: 'Text Text Text Text Text Text',
};

export const PrimarySizeM = Template.bind({});
PrimarySizeM.args = {
    title: 'Title Title',
    text: 'Text Text Text Text Text Text',
    size: TextSize.M,
};

export const PrimarySizeL = Template.bind({});
PrimarySizeL.args = {
    title: 'Title Title',
    text: 'Text Text Text Text Text Text',
    size: TextSize.L,
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title Title',
    text: 'Text Text Text Text Text Text',
    theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title Title',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Text Text Text Text Text Text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title Title',
    text: 'Text Text Text Text Text Text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Title Title',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Text Text Text Text Text Text',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
