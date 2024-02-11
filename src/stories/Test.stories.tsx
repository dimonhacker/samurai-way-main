import type { Meta, StoryObj } from '@storybook/react';

import {InputForm} from '../components/InputForm';

const meta: Meta<typeof InputForm> = {
    component: InputForm,
};

export default meta;
type Story = StoryObj<typeof InputForm>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
    render: () => <InputForm/>,
};

export const InputFormTest = ()=>{
    return <InputForm key={"123123"}/>
}