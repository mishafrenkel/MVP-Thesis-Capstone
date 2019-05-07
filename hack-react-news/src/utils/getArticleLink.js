const ROOT_URL = 'https://news.ycombinator.com';
export const ARTICLE = `${ROOT_URL}/item?id=`;
export const USER = `${ROOT_URL}/user?id=`;

const getArticleLink = ({ url, id }) => {
  const commentLink= `${ARTICLE}${id}`;
  const link = !!url ? url : commentLink;
  return link;
};

export default getArticleLink;
