import * as api from './utils';

export async function createAssignment(assignment) {
    try {
      const response = await api.post('/assignment', assignment);
      return response;
    } catch (error) {
      throw error;
    }
  }

  export async function getAssignments() {
    try {
      const response = await api.get('/assignment');
      return response;
    } catch (error) {
      throw error;
    }
  }

  export async function updateAssignment(assignment) {
    try {
      const response = await api.put(`/assignment`, assignment);
      return response;
    } catch (error) {
      throw error;
    }
  }
  
  export async function deleteAssignment(assignment) {
    try {
      const response = await api.del(`/assignment`, assignment);
      return response;
    } catch (error) {
      throw error;
    }
  }

  export async function uploadAssignment(assignment) {
    try {
      const response = await api.post(`/fileupload`, assignment);
      return response;
    } catch (error) {
      throw error;
    }
  }