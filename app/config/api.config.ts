export const API_URL = `${process.env.APP_URL}/api`;

export const getSubjectsUrl = (string: string) =>
  `${API_URL}/subjects${string}`;
