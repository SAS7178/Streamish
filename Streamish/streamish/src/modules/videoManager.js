const baseUrl = '/api/video';


export const getAllVideos = () => {
  return fetch(baseUrl)
    .then((res) => res.json())
};

export const getAllVideosWComments = () => {
  return fetch(baseUrl + "/GetWithComments")
    .then((res) => res.json())
};

export const searchVideo = () => {
  return fetch(baseUrl + `/searchVideos`)
    .then((res) => res.json())
};

export const addVideo = (video) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(video),
  });
};