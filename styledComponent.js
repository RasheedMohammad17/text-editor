import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  background-color: #000; /* Black background */
  min-height: 100vh;
  padding: 40px;
  color: #ffffff;
  font-family: Arial, sans-serif;
`

export const SideImage = styled.img`
  width: 300px;
  height: auto;
  margin-right: 40px;
`

export const EditorContainer = styled.div`
  flex-grow: 1;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 28px;
  margin-bottom: 20px;
`

export const Toolbar = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin-bottom: 20px;
  gap: 15px;
`

export const ButtonItem = styled.li``

// Shared button style
const BaseBtn = styled.button`
  color: ${props => (props.active ? '#000' : '#fff')};
  background-color: ${props => (props.active ? '#faff00' : 'transparent')};
  border: 1px solid #faff00;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #faff00;
    color: #000;
  }

  &:focus {
    outline: none;
  }
`

export const BoldBtn = styled(BaseBtn)``
export const ItalicBtn = styled(BaseBtn)``
export const UnderlineBtn = styled(BaseBtn)``

export const TextArea = styled.textarea`
  width: 100%;
  height: 250px;
  background-color: #1e1e1e;
  color: white;
  border: 1px solid #444;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  resize: none;

  font-weight: ${props => (props.activeBold ? 'bold' : 'normal')};
  font-style: ${props => (props.activeItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.activeUnderline ? 'underline' : 'none')};

  &:focus {
    outline: none;
    border-color: #faff00;
  }
`
