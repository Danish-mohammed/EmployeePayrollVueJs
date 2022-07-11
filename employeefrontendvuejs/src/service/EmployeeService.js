import axios from 'axios';

const EMPLOYEE_API_BASE_URL = 'http://localhost:8082/employeepayrollservice';

class EmployeeService{

      getAllEmployees() {
        return axios.get(`${EMPLOYEE_API_BASE_URL}/get`);
      }

      addEmployees(data){
        return axios.post(`${EMPLOYEE_API_BASE_URL}/create`, data)
      }

      deleteEmployee(employee_id) {
        return axios.delete(`${EMPLOYEE_API_BASE_URL}/delete/${employee_id}`); 
      }

      getEmployee(employee_id) {
        return axios.get(`${EMPLOYEE_API_BASE_URL}/get/${employee_id}`);
      }

      updateEmployee(id,data) {
        return axios.put(`${EMPLOYEE_API_BASE_URL}/update/${id}`, data);
      }
}

export default new EmployeeService();