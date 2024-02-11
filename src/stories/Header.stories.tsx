import type { Meta, StoryObj } from '@storybook/react';

import {Header} from '../layout/header/Header';
import styled from "styled-components";

const meta: Meta<typeof Header> = {
    component: Header,
};

export default meta;

export const HeaderTest = ()=>{
    return  <Header></Header>
}
