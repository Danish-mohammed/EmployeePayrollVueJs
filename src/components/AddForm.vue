<template>
    <div>
        <div className="payroll-main">
            <header className='header-content header'>
                <div className="logo-content">
                    <img src="../assets/logo(1).png" alt="" />
                    <div>
                        <span className="emp-text">EMPLOYEE</span> <br />
                        <span className="emp-text emp-payroll">PAYROLL</span>
                    </div>
                </div>
            </header>
            <div>
            <pre>
            {{JSON.stringify(formValues,null,2)}}
            </pre>
            </div>
            <div className="form-content">
                <form className="form-head" action="#" @submit="submitForm">
                    <div className="form-head">Employee Payroll form</div>
                    <div className="row-content">
                        <label className="label text" htmlFor="name">Name</label>
                        <input className="input" type="text" id="name" v-model.trim="formValues.name" />
                   
                    </div>
                    <div className="row-content">
                        <label className="label text" htmlFor="profilePic">Profile image</label>
                        <div className="profile-radio-content">
                            <label >
                                <input type="radio" name="profilePic" value="../assets/Ellipse-1.png" v-model="formValues.profilePic" /><img src="../assets/Ellipse-1.png" alt="Profile1"/>
                               
                            </label>
                            <label >
                                <input type="radio" name="profilePic" value="../assets/Ellipse-5.png" v-model="formValues.profilePic"/><img src="../assets/Ellipse-5.png" alt="Profile2"/>
                               
                            </label>
                            <label >
                                <input type="radio" name="profilePic" value="../assets/Ellipse-8.png" v-model="formValues.profilePic"/><img src="../assets/Ellipse-8.png" alt="Profile3"/>
                               
                            </label>
                            <label >
                                <input type="radio" name="profilePic" value="../assets/Ellipse-4.png" v-model="formValues.profilePic"/><img src="../assets/Ellipse-4.png" alt="Profile4" />
                              
                            </label>

                        </div>
                        
                    </div>
                    <div className="row-content">
                        <label className="label text" htmlFor="gender">Gender</label>
                        <div>
                            <input type="radio" id="male"   name="gender" value="male" v-model="formValues.gender" />
                            <label className="text" htmlFor="male">Male</label>
                            <input type="radio" id="female"  name="gender" value="female" v-model="formValues.gender" />
                            <label className="text" htmlFor="female">Female</label>
                        </div>
                      
                    </div>
                    <div className="row-content">
                        <label className="label text" htmlFor="departments">Department</label>
                        <input type="checkbox" id="it" value="it" v-model="formValues.department" />
                        <label for="it">IT</label>     
                        <input type="checkbox" id="hr" value="hr" v-model="formValues.department" />
                        <label for="hr">HR</label>
                        <input type="checkbox" id="engineer" value="engineer"  v-model="formValues.department"/>
                        <label for="engineer">Engineer</label>
                        <input type="checkbox" id="sales" value="sales"  v-model="formValues.department"/>
                        <label for="sales">SALES</label>
                        <input type="checkbox" id="other" value="other"  v-model="formValues.department"/>
                        <label for="other">Other</label>
                       
                       
                    </div>

                    <div className="row-content">
                        <label className="label text" htmlFor="salary">Salary</label>
                        <input className="input" type="text" id="salary" name="salary" v-model="formValues.salary" />
                       
                    </div>

                    <div className="row-content">
                        <label className="label text" htmlFor="startDate">Start Date</label>
                        <div>
                            <select id="day" name="day" v-model="formValues.day">
                            <option value="">Day</option>
                                <option value="01">1</option>
                                <option value="02">2</option>
                                <option value="03">3</option>
                                <option value="04">4</option>
                                <option value="05">5</option>
                                <option value="06">6</option>
                                <option value="07">7</option>
                                <option value="08">8</option>
                                <option value="09">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>
                            <select id="month" name="month" v-model="formValues.month">
                            <option value="" disabled selected>Month</option>
                                <option value="Jan">January</option>
                                <option value="Feb">Febuary</option>
                                <option value="Mar">March</option>
                                <option value="Apr">April</option>
                                <option value="May">May</option>
                                <option value="Jun">June</option>
                                <option value="Jul">July</option>
                                <option value="Aug">August</option>
                                <option value="Sep">September</option>
                                <option value="Oct">October</option>
                                <option value="Nov">November</option>
                                <option value="Dec">December</option>
                            </select>
                            <select id="year" name="year" v-model="formValues.year">
                            <option value="" disabled selected>Year</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                            </select>
                        </div>
                       
                    </div>

                    <div className="row-content">
                        <label className="label text" htmlFor="notes">Notes</label>
                        <textarea id="notes" className="input" name="notes" v-model="formValues.note" placeholder="Type your note here"></textarea>
        
                    </div>

                    <div className="buttonParent">
                       <router-link to="/"> <button type="submit" className="resetButton button cancelButton">Cancel</button></router-link>

                        <div className="submit-reset">
                            <button type="submit" className="button submitButton" id="submitButton">Submit</button>
                           <button type="button"  className="resetButton button">Reset</button> 
                        </div>
                    </div >
                </form >
            </div >
        </div > 
    </div>
</template>


<script>
export default {
    name: 'AddForm',
    data(){
        return{
            formValues:{
                name:'',
                salary:'',
                note:'',
                day:'',
                month:'',
                year:'',
                department:[],
                gender:'',
                profilePic:'',
            },
        }
    },
    methods:{
        submitForm(event){
            event.preventDefault();
            console.log(this.formValues)
            const storageData = JSON.stringify(this.formValues);
            localStorage.setItem("EmployeeList", storageData)
        }
    },   
}
</script>

<style lang="">
    * {
    box-sizing: border-box;
}

body {
    margin: 0;
    height: 100%;
}

.payroll-main{
    height: 100%;
    min-height: calc(100% - 80px);
    background-color: #f7f7f7;
  
    justify-content: center;
    align-items: center;
    padding: 0;
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
    border: 1px solid green;
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
    color: #82A70C;
    padding-left: 10px;
    text-transform: capitalize;
}

.emp-payroll {
    color: #42515f;
}

.form-content {
    min-height: calc(100% - 80px);
    background-color: #f7f7f7;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0px solid green;
}

.form {
    width: 65%;
    padding: 44px 60px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border: 1px solid #f5f5f5;
    border-radius: 8px;
    opacity: 1;
}

.form-head {
    font: normal normal bold 28px/37px Roboto;
    letter-spacing: 0px;
    color: #42515F;
    text-transform: capitalize;
    opacity: 1;
    padding-bottom: 20px;
}

.row-content {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    align-items: center;
    border: 0px solid green;
    font-size: 16px;
}

.label {
    min-width: 140px;
}

label {
    padding: 12px 12px 12px 0px;
    display: inline-block;
}

.text {
    height: auto;
    font-size: 16px;
    color: #43515f;
    opacity: 1;
    font-family: Roboto;
}

.input {
    width: 100%;
    height: 40px;
    padding: 12px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
}

.profile-radio-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.profile-radio-content>label {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.profile {
    width: 40px;
    border-radius: 50%;
    margin-left: 12px;
}

select {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    font: normal normal normal 16px Roboto;
    letter-spacing: 0px;
    color: #42515f;
    background-color: transparent;
}

.buttonParent {
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  .button {
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
  
  .submitButton {
    border: none;
    border: 1px solid grey;
    margin-right: 30px;
  }
  
  .cancelButton {
    text-decoration: none;
    text-align: center;
  }
  
    .resetButton {
        margin-right: 10px;
    }

    error-output {
        margin-left: 10px;
        font-size: 15px;
        font-style: italic;
        color: rgb(231, 66, 66);
    }

@media only screen and (max-width:600px) {
    .form {
        margin-top: 10px;
    }
    .submit-reset {
        width: 100%;
        display: flex;
        flex-grow: 1;
        flex-direction: row-reverse;
        justify-content: space-between
    }
    .cancelButton {
        margin-left: 0px;
    }
    .form {
        width: 85%;
        padding: 44ox 20px;
    }
    .profile-lable {
        margin-left: 0px;
    }
}

@media only screen and (max-width: 960px) {
    .cancelButton {
        margin-left: 0px;
    }
    .form {
        width: 85%;
        padding: 44px 20px;
    }
}

a.button:hover {
    background: grey;
    color: white;
}

.submitButton:hover {
    background-color: #82A70C;
    color: white;
}

.resetButton:hover {
    background: grey;
    color: white;
}

.department {
    margin-left: 30px;
}
</style>