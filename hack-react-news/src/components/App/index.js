import { connect } from 'react-redux';
import actions from 'store/story/actions';
import { hasMoreStoriesSelector } from 'store/story/selectors';
import App from './App';

const mapStateToProps = state => ({
  layout: state.app.layout,
  theme: state.app.theme,
  stories: state.story.stories,
  page: state.story.page,
  storyIds: state.story.storyIds,
  isFetching: state.story.isFetching,
  hasMoreStores: hasMoreStoriesSelector(state),
});

const mapDispatchToProps = dispatch => ({
  getStories: ({ storyIds, page }) => dispatch(actions.getStories({ storyIds, page })),
  getStoriesFirstPage: () => dispatch(actions.fetchStoryIds()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
