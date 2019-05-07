import hackerNewsApi from 'services/hackerNewsApi';
import { buildRequestCreator } from 'store/utils';

const NS = '@hnReader/story';

export const actionTypes = {
  GET_STORY_IDS: `${NS}/GET_STORY_IDS`,
  GET_STORIES: `${NS}/GET_STORIES`,
};

const actions = {
  fetchStoryIds: buildRequestCreator(
    actionTypes.GET_STORY_IDS,
    ({ request, payload, dispatch }) => {
      dispatch(request.request(payload));
      return hackerNewsApi
        .getTopStoryIds()
        .then(storyIds => {
          dispatch(request.success({ storyIds }));
          dispatch(actions.getStories({ storyIds, page: 0 }));
          return storyIds;
        })
        .catch(err => dispatch(request.failure(err)));
    },
  ),
  getStories: buildRequestCreator(actionTypes.GET_STORIES, ({ request, payload, dispatch }) => {
    const { storyIds, page } = payload;
    dispatch(request.request(payload));
    return hackerNewsApi
      .getStoriesByPage(storyIds, page)
      .then(stories => dispatch(request.success({ stories })))
      .catch(err => dispatch(request.failure(err)));
  }),
};

export default actions;
