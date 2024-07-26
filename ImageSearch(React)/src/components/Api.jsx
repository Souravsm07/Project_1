import axios from 'axios';

const API_KEY = '_Skyat61IFOgVmTghgHc6oV7VQMsU6DqsuMjnCA5s3o';

export const getImageData = async (query) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: { query },
    headers: {
      Authorization: `Client-ID ${API_KEY}`,
    },
  });
  return response.data;
};