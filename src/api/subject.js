import * as api from './utils';

export async function createSubject(subject) {
    try {
      const response = await api.post('/subject', subject);
      return response;
    } catch (error) {
      throw error;
    }
  }

  export async function createSubjectNotification(subject) {
    try {
      const response = await api.post('/notification', subject);
      return response;
    } catch (error) {
      throw error;
    }
  }

  export async function getSubjects() {
    try {
      const response = await api.get('/subject');
      return response;
    } catch (error) {
      throw error;
    }
  }