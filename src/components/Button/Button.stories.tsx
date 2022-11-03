import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Button, { ButtonProps } from './Button';

export default {
    title: 'ReactComponentLibrary/Button',
    component: Button,
} as Meta<ButtonProps>;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const HelloWorld = Template.bind({});

HelloWorld.args = {
    label: 'Hello world!',
};

export const ClickMe = Template.bind({});
ClickMe.args = {
    label: 'Click me!',
};
