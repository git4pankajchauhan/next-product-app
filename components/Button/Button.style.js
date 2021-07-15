import styled from 'styled-components'
import { colors, fonts } from 'styles/style_var'

const colorFunction = props => {
  if (props.color === 'primary') return colors.primary
  if (props.color === 'secondry') return colors.blue
  return props.color
}

export const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.125em;
  font-size: ${props => props.fontSize || '1.5rem'};
  padding: ${props => props.padding || '0.25em 2em'};

  box-shadow: ${props => (props.outline ? 'unset' : colors.shadowSm)};

  background-color: ${props => (props.outline ? 'transparent' : colorFunction(props))};

  border: ${props => props.borderSize || '0.15em'} solid;
  border-color: ${props => colorFunction(props)};

  color: ${props => (props.outline ? colorFunction(props) : '#fff')};

  transition: 0.3s ease-out;

  width: ${props => props.width || 'unset'};

  border-radius: ${props => props.rounded || '0.4em'};
  font-family: ${fonts.title};
  text-decoration: none;
  ${props => {
    if (props.noShadow) return 'box-shadow:unset;'
  }}

  &:hover,
  &:focus {
    color: ${props => props.hover_color || '#fff'};
    background-color: ${props => colorFunction(props)};
    box-shadow: ${props => (!props.outline ? colors.shadowBg : 'unset')};
    filter: ${props => (props.outline ? 'unset' : 'brightness(0.8)')};
    ${props => {
      if (props.noShadow) return 'box-shadow:unset;'
    }}
  }
  svg,
  i {
    font-size: ${props => props.fonticon || '1.8rem'};
  }
`
