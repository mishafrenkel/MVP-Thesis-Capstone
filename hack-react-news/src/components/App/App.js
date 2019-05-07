import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import { layouts, themes } from 'store/app/utils';
import { darkThemeColors, lightThemeColors } from 'styles/themeStyles';
import Nav from 'components/NavBar';
import List from 'components/List';
import Grid from 'components/GridLayout';
import Loader from 'components/LoadingAnimation';

import { Wrapper, Title, TitleWrapper, GithubLink, SocialLink } from './styles';

class App extends Component {
  static defaultProps = {
    stories: [],
  }; 


  componentDidMount() {
    this.props.getStoriesFirstPage();
    this.toggleDarkTheme();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.theme !== this.props.theme) {
      this.toggleDarkTheme();
    }
  }
  

  toggleDarkTheme() {
    if (this.props.theme === themes.light) {
      document.body.style = `background-color: ${lightThemeColors.background};`;
    } else {
      document.body.style = `background-color: ${darkThemeColors.background};`;
    }
  }


  getStories = () => {
    const { storyIds, page, getStories, isGetting } = this.props;
    if (!isGetting) {
      getStories({ storyIds, page });
    }
  };

  render() {
    const { stories, layout, theme, hasMoreStores } = this.props;
    return (
      <ThemeProvider theme={theme === themes.light ? lightThemeColors : darkThemeColors}>
        <div>
          <Nav />
          <Wrapper>
            <TitleWrapper>
              <Title>
                <div>{'Hacker News Streamer'}</div>
                <GithubLink
                  href="https://github.com/mishafrenkel"
                  target="_blank"
                >
                  (click here to view the source code)
                </GithubLink>
              </Title>
              <div>
                <SocialLink href="https://twitter.com/mikebeingfrank" target="blank">
                  <i className="fab fa-twitter fa-md" />
                </SocialLink>
                <SocialLink href="https://www.linkedin.com/in/michael-frenkel-1a540752/" target="blank">
                  <i className="fab fa-linkedin-in fa-md"></i>
                </SocialLink>
                <SocialLink href="https://www.quora.com/profile/Michael-Frenkel-1" target="blank">
                  <i className="fab fa-quora" />
                </SocialLink>
                <SocialLink href="https://github.com/mishafrenkel" target="blank">
                  <i className="fab fa-github"></i>
                </SocialLink>
                <SocialLink href="https://news.ycombinator.com/" target="blank">
                  <i className="fab fa-hacker-news"></i>
                </SocialLink>
              </div>
            </TitleWrapper>
            <InfiniteScroll
              dataLength={stories.length}
              next={this.getStories}
              hasMore={hasMoreStores}
              loader={<Loader />}
              style={{
                height: '100%',
                overflow: 'visible',
              }}
            >
              {layout === layouts.list ? <List stories={stories} /> : <Grid stories={stories} />}
            </InfiniteScroll>
          </Wrapper>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
