"use client";

import axios from "axios";

const server = "https://wordsapi-nkj3.onrender.com";

export const getDialoguesApi = () => {
  return axios.get(`${server}/dialogues`);
};

export const getProverbsApi = () => {
  return axios.get(`${server}/proverbs`);
};

export const getQuotesApi = () => {
  return axios.get(`${server}/quotes`);
};
