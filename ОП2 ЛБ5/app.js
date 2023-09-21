const formElem = document.forms.main;
const users = [];

function createUser(formElem){
    let newData = null;
    newData = new Object();
    newData.email = formElem.email.value;
    newData.userName = formElem.userName.value;
    newData.userYears = radio1();
    function radio1(){
        for(let n = 0; n <= 3; n++){
            if(formElem.userYears[n].checked == true) return n;
        }
    };
    newData.q1 = formElem.q1.checked;
    newData.q2Checkbox1 = formElem.q2[0].checked;
    newData.q2Checkbox2 = formElem.q2[1].checked;
    newData.q2Checkbox3 = formElem.q2[2].checked;
    newData.q3 = formElem.q3.value;

    users.push(newData);
};





