import ApiService from './Api';

const JSON_QUERY = '.json?print=pretty';
const BASE_URL = 'https://hacker-news.firebaseio.com/v0';
const client = new ApiService({ baseURL: BASE_URL });

const hackerNewsApi = {};
const PAGE_LIMIT = 20;

const getPageSlice = (limit, page = 0) => ({ begin: page * limit, end: (page + 1) * limit });
const getPageValues = ({ begin, end, items }) => items.slice(begin, end);

hackerNewsApi.getTopStoryIds = () => client.get(`/topstories${JSON_QUERY}`);
hackerNewsApi.getStory = id => client.get(`/item/${id}${JSON_QUERY}`);
hackerNewsApi.getStoriesByPage = (ids, page) => {
  const { begin, end } = getPageSlice(PAGE_LIMIT, page);
  const activateIds = getPageValues({ begin, end, items: ids });
  const storyPromises = activateIds.map(id => hackerNewsApi.getStory(id));
  return Promise.all(storyPromises);
};

export default hackerNewsApi;



//  import ApiService from './Api';

//  const BASE_URL = 'https://hacker-news.firebaseio.com/v0';
//  const client = new ApiService({ baseUrl: BASE_URL });
//  const JSON_QUERY = '.json?print=pretty';
 
//  // 500 top stories returned which kills performance 
//  // set page limit 
//  const PAGE_LIMIT = 20;
//  const hackerNewsApi = {};

//  const getPageSlice = (limit, page = 0) => ({ begin: page * limit, end: (page + 1) * limit });
//  const getPageValues = ({ begin, end, items }) => items.slice(begin, end);
// hackerNewsApi.getTopStoryIds = () => client.get(`/topstories${JSON_QUERY}`);
// hackerNewsApi.getStory = id => client.get(`/item/${id}${JSON_QUERY}`);
// hackerNewsApi.getStoriesByPage = (ids, page) => {
//   const { begin, end } = getPageSlice(PAGE_LIMIT, page);
//   const activeIds = getPageValues({ begin, end, items: ids });
//   const storyPromises = activeIds.map(id => hackerNewsApi.get(id));
//   return Promise.all(storyPromises);
// };

// export default hackerNewsApi;