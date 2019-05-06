import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import List from 'components/List';
import { colorsDark } from '/Users/MyFolder/mvp/hrsf113-mvp/hack-react-news/src/styles/palette.js';

import { Wrapper, Title } from './styles';

class App extends Component {
  componentDidMount() {
    this.props.fetchStoriesFirstPage();
    // this.setBodyBackgroundColor();
  }
  render() {
    const { stories } = this.props;
    return (
      <ThemeProvider theme={colorsDark}>
        <div>
          <Wrapper>
            <Title>Hacker News Reader</Title>
            <List stories={stories} />
          </Wrapper>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
