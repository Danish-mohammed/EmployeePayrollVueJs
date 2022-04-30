<template>
     <div>
                <body>
                    <header class="header-content header">
                        <div class="logo-content">
                            <img src="../assets/logo(1).png" alt="" />
                            <div>
                                <span class="emp-text">EMPLOYEE</span><br/>
                                <span class="emp-text emp-payroll">PAYROLL</span>
                            </div>
                        </div>
                    </header>
                            <div class="main-content">
                                <div class="header-content sub-main-content">
                                    <div class="emp-details-text">
                                        Employee Details
                                    <div class="emp-count"></div>
                                </div>
                                   
                                        <div>
                                                <router-link to="/addemployee"><button class="button">Add User</button></router-link>
                                        </div>
                            
                                </div>
                                <div class="table-main">
                                    <DisplayHome />
                                </div>
                            </div>
                </body>
                
     </div>
</template>

<script>
import DisplayHome from './DisplayHome.vue'

export default {
    name: 'Home',
    components: {
        DisplayHome
    }
}
</script>

<style>
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    height: 100%;
}

.header {
    padding: 15px 0;
    background-color: #ffffff;
}

.header-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.logo-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 0px solid green;
    width: 80%;
}

.logo-content-img {
    border: 0px solid #42515f;
}

.emp-text {
    font: normal normal bold 20px/20px Montserrat;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0px;
    padding-left: 10px;
    text-transform: capitalize;
}

.emp-payroll {
    color: #42515f;
}

.main-content {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 80px);
    background-color: #f7f7f7;
    padding: 30px 0 10px;
    box-sizing: border-box;
}

.header-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    padding-bottom: 25px;
}

.emp-details-text {
    margin-right:70%;
    font-family: Roboto;
    font: normal normal bold italic 24px/25px Roboto;
    letter-spacing: 0px;
    color: #42515f;
    opacity: 1;
}

.emp-count {
    background-color: #82a70c;
    color: #ffffff;
    border-radius: 50%;
    font-size: 20px;
    width: 40px;
}
      

.button {
    display: inline-block;
    align-items:flex-end;
    font-size: 20px;
    font-family: Roboto;
    letter-spacing: 0px;
    color: #42515f;
    opacity: 1;
    background: transparent;
    border: none;
    font-weight: 400;
    min-width: 140px;
    padding: 7px 7px;
    border: 1px solid #707070;
    cursor: pointer;
    
  }  

.table-main {
    width: 80%;
    margin: 0 auto;
    overflow: auto;
}

.table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 15px;
    min-width: 800px;
}

td,
th {
    text-align: left;
    padding: 5px 8px;
}

.tr {
    background: #1b2630 0% 0% no-repeat padding-box;
}

.th {
    background-color: #1b2630;
    background: #1b2630 0% 0% no-repeat padding-box;
    border-radius: 3px 3px 0px 0px;
    text-align: left;
    font: normal normal medium 18px/24px Roboto;
    letter-spacing: 0px;
    color: #ffffff;
    text-transform: uppercase;
    opacity: 1;
    border: 0px solid #dddddd;
}

tr:not(:first-child) {
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #e3e3e3;
    border-radius: 3px;
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

.dept-label {
    background-color: #e9fea5;
    border-radius: 40%;
    width: fit-content;
    padding: 1px 7px;
    text-align: center;
    font-size: 14px;
    display: inline-block;
    font-weight: 300;
    margin-bottom: 8px;
}
</style>