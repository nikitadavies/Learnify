import * as subjectsApi from './subject';
import * as loginApi from './login';
import * as assignmentApi from './assignment'


const api = {
 subject: subjectsApi,
 login: loginApi,
 assignment: assignmentApi
};

export default api;