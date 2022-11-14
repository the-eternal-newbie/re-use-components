import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Button, { IButton } from './Button';

export default {
    title: 'ReactComponentLibrary/Button',
    component: Button,
} as Meta<IButton>;

const Template: Story<IButton> = args => <Button name="default" {...args} />;

export const HelloWorld = Template.bind({});

HelloWorld.args = {
    children: (
        <p>
            {
                'Hello world! This is a test text to see how much this button is expanded.\nrelease of Firefox Nightly (35.0a1) I have been experiencing an issue with text-overflow: ellipsis inside a flexbox container with flex-direction: ...'
            }
        </p>
    ),
    className: 'main',
    onClick: () => console.log('CLICKED!!!'),
};

export const ClickMe = Template.bind({});
ClickMe.args = {
    children: <p>{'Click me!'}</p>,
};
