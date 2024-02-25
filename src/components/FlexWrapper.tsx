import styled from "styled-components";

type FlexWrapperType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    alignItems?: string
    gap?:string
}
export const FlexWrapper = styled.div<FlexWrapperType>`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "flex-start"};
  align-items: ${props => props.align || "stretch"};
  flex-wrap: ${props => props.wrap || "wrap"};
  align-items: ${props => props.alignItems || ""};
  gap: ${props => props.gap || ".5em"};
`