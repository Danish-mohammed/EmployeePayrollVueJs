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
          </tbody>
          </table>
</template>

<script>
export default {
  name: 'DisplayHome'
}
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
  background: #42515F 0% 0% no-repeat padding-box;
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