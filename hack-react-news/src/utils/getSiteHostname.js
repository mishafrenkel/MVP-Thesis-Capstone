import urlParser from 'url';

const getSiteHostname = url => {
  let hostname = '';

  if (url) {
    if (!url.includes('//')) {
      url = `http://${url}`;
    }

    hostname = urlParser.parse(url).hostname;
  }

  if (hostname.includes('www.')) {
    hostname = hostname.split('www.')[1];
  }

  return hostname;
};

export default getSiteHostname;
