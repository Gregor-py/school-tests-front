export const API_URL = `${process.env.APP_URL}/api`;

export const getSubjectsUrl = (string: string) =>
  `${API_URL}/subjects${string}`;
export const getAuthUrl = (string: string) => `${API_URL}/auth${string}`;
export const getTestUrl = (string: string) => `${API_URL}/tests${string}`;
export const getTaskUrl = (string: string) => `${API_URL}/tasks${string}`;
export const getAnswerUrl = (string: string) => `${API_URL}/answers${string}`;
export const getUserUrl = (string: string) => `${API_URL}/users${string}`;
