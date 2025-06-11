import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {Component} from 'react'
import {
  AppContainer,
  EditorContainer,
  SideImage,
  Heading,
  Toolbar,
  ButtonItem,
  BoldBtn,
  ItalicBtn,
  UnderlineBtn,
  TextArea,
} from './styledComponent'

class TextEditor extends Component {
  state = {bold: false, italic: false, underline: false}

  changeBold = () => {
    this.setState(prevState => ({bold: !prevState.bold}))
  }

  changeItalic = () => {
    this.setState(prevState => ({italic: !prevState.italic}))
  }

  changeUnderline = () => {
    this.setState(prevState => ({underline: !prevState.underline}))
  }

  render() {
    const {bold, italic, underline} = this.state

    return (
      <AppContainer>
        <SideImage
          src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
          alt="text editor"
        />
        <EditorContainer>
          <Heading>Text Editor</Heading>
          <Toolbar>
            <ButtonItem>
              <BoldBtn
                onClick={this.changeBold}
                active={bold}
                data-testid="bold"
              >
                <VscBold size={20} />
              </BoldBtn>
            </ButtonItem>
            <ButtonItem>
              <ItalicBtn
                onClick={this.changeItalic}
                active={italic}
                data-testid="italic"
              >
                <GoItalic size={20} />
              </ItalicBtn>
            </ButtonItem>
            <ButtonItem>
              <UnderlineBtn
                onClick={this.changeUnderline}
                active={underline}
                data-testid="underline"
              >
                <AiOutlineUnderline size={20} />
              </UnderlineBtn>
            </ButtonItem>
          </Toolbar>
          <TextArea
            rows="15"
            cols="60"
            activeBold={bold}
            activeItalic={italic}
            activeUnderline={underline}
            placeholder="Start typing here..."
          />
        </EditorContainer>
      </AppContainer>
    )
  }
}

export default TextEditor
