import axios from "axios";

const api = axios.create({
  params: {
    api_key: "RGAPI-1a90fc88-f1c8-44d3-9ac0-bc621e89fd96"
  }
});

export const lolApi = {
  test: () => api.get(`/lol/summoner/v4/summoners/by-name/판다삐`),
  searchSummoner: name => api.get(`/lol/summoner/v4/summoners/by-name/${name}`),
  searchMatch: accountId => api.get(`/lol/match/v4/matchlists/by-account/${accountId}`)
};