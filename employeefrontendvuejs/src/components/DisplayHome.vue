<template>
  <table id="display" className="display">
    <tbody>
      <tr>
        <th>Profile Image</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Departments</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Notes</th>
        <th>Actions</th>
      </tr>
      <tr v-for="employee in employees" :key="employee.id">
        <td><img :src='`../assets/${employee.profilePic}`'/></td>
        <td>{{ employee.name }}</td>
        <td>{{ employee.gender }}</td>
        <td>{{ employee.departments }}</td>
        <td>{{ employee.salary }}</td>
        <td>{{ employee.startDate }}</td>
        <td>{{ employee.note }}</td>
        <td>
          <img
            @click="remove(employee.employeeId)"
            src="../assets/delete-black-18dp.svg"
            alt="delete"
          />
          <img
            @click="update(employee.employeeId)"
            src="../assets/create-black-18dp.svg"
            alt="edit"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import EmployeeService from "../service/EmployeeService";

export default {
  name: "DisplayHome",
  data() {
    return {
      employees: [],
    };
  },
  methods: {
    getEmployees() {
      EmployeeService.getAllEmployees().then((response) => {
        console.log(response.data.data);
        this.employees = response.data.data;
      });
    },

    update(id) {
      this.$router.push({ name: "EditForm", params: { id: id } });
    },

    remove(employeeId) {
      var answer = window.confirm(
        "Data once deleted cannot be restored!! Do you wish to continue ?"
      );
      if (answer === true) {
        EmployeeService.deleteEmployee(employeeId)
          .then((data) => {
            alert("Employee deleted Successfully!!");
            location.reload();
            this.getEmployees();
          })
          .catch((error) => {
            alert("Something Went Wrong!");
          });
      } else {
        alert("Employee Not Deleted!!!");
      }
    },
    displayMessage() {
      console.log("Welcome to Bridgelabz");
    },
  },
  created() {
    this.displayMessage();
    this.getEmployees();
  },
};
</script>

<style>
.display {
  width: 99.9%;
  border-collapse: separate;
  border-spacing: 0 7px;
  min-width: 800px;
}
th {
  text-align: left;
  padding: 5px 8px;
}
th {
  background: #42515f 0% 0% no-repeat padding-box;
  border-radius: 0px;
  opacity: 1;
  text-align: left;
  font: normal normal normal 14px/24px Roboto;
  color: #ffffff;
  letter-spacing: 0px;
  text-transform: uppercase;
  border: 0px solid #dddddd;
  padding: 8px;
}
td {
  font: normal normal normal 14px/21px Roboto;
  letter-spacing: 0px;
  color: #3d3d3d;
  opacity: 1;
}
td:first-child {
  display: flex;
  align-items: center;
}
td img:first-child {
  margin-right: 10px;
}
td img {
  cursor: pointer;
}
</style>
