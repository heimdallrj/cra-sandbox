import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImageInput } from '@jetpack/react';

export default {
  title: 'Components/ImageInput',
  component: ImageInput,
  argTypes: {
    alt: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    name: {
      control: { type: 'text' },
    },
    src: {
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      page: null,
    },
  },
} as ComponentMeta<typeof ImageInput>;

const Template: ComponentStory<typeof ImageInput> = (args: any) => {
  return <ImageInput {...args} />;
};

export const Story = Template.bind({});
Story.args = {
  alt: 'alt text',
  disabled: false,
  name: 'image name',
  src: 'https://avatars.githubusercontent.com/u/22632046?s=200&v=4',
};
