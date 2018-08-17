import { instance as ajax } from '@/lib/request';

export const getTopics = (params) => ajax.get('/topics', { params });
export const getTopicById = (params) => ajax.get(`/topic/${params.id}`);
export const getUserInfo = (params) => ajax.get(`/user/${params.loginname}`);
