//Problem 1 Problem 1 Problem 1 Problem 1 Problem 1 Problem 1 Problem 1 

let employeeInfo = {
    'employeeInfo':[
        {
            'firstName': 'Sam',
            'department': 'Tech',
            'designation':'Manager',
            'salary': 40000,
            'raiseEligable': true
        },
        {
            'firstName': 'Mary',
            'department': 'Finance',
            'designation':'Trainee',
            'salary': 18500,
            'raiseEligable': true
        },
        {
            'firstName': 'Bill',
            'department': 'HR',
            'designation':'Executive',
            'salary': 21200,
            'raiseEligable': false
        },
    ]
}

function printEmployees(employeeObj){
    for (let i = 0; i < employeeInfo['employeeInfo'].length; i++){
        console.log(employeeInfo['employeeInfo'][i]['firstName']);
    };
};

console.log('List of Employees for Initial Employee JSON:');

printEmployees(employeeInfo);


//Problem 2 Problem 2 Problem 2 Problem 2 Problem 2 Problem 2 Problem 2 

let companyInfo = {
    'companyInfo':{
        'companyName': 'Tech Stars',
        'website': 'www.techstars.site',
        'employeeNames': [
            'Sam',
            'Mary',
            'Bill'
        ]
    }
}

function printCompanyEmployees(companyObj){
    for (let i = 0; i < companyInfo['companyInfo']['employeeNames'].length; i++){
        console.log(companyInfo['companyInfo']['employeeNames'][i]);
    };
};

console.log('Employee Names in Array for Initial Company JSON');

printCompanyEmployees(companyInfo);


console.log('%j', employeeInfo)
console.log('%j', companyInfo)

//Problem 3 Problem 3 Problem 3 Problem 3 Problem 3 Problem 3 Problem 3 

let newEmployee = {
    'firstName': 'Anna',
    'department': 'Tech',
    'designation':'Executive',
    'salary': 25600,
    'raiseEligable': false
}

function addAnna(employeeObj, companyObj, newEmObj){
    employeeObj['employeeInfo'].push(newEmObj);
    companyObj['companyInfo']['employeeNames'].push(newEmObj['firstName']);

};

addAnna(employeeInfo, companyInfo, newEmployee);

console.log('Proof that Anna was Added for Employee JSON:');

printEmployees(employeeInfo);

console.log('Proof that Anna was Added for Company JSON:');

printCompanyEmployees(companyInfo);


//Problem 4 Problem 4 Problem 4 Problem 4 Problem 4 Problem 4 Problem 4

function calcTotalSalaries(){
    let totalSalary = 0;
    for (let i = 0; i < employeeInfo['employeeInfo'].length; i++){
        let newSalary = employeeInfo['employeeInfo'][i]['salary'];
        totalSalary =+ newSalary;
    };
    console.log(`Total of all salaries is: ${totalSalary}`)
};

calcTotalSalaries();

//Problem 5 Problem 5 Problem 5 Problem 5 Problem 5 Problem 5 Problem 5

function giveRaises(){
    for (let i = 0; i < employeeInfo['employeeInfo'].length; i++){
        if (employeeInfo['employeeInfo'][i]['raiseEligable'] === true){
            employeeInfo['employeeInfo'][i]['salary'] = employeeInfo['employeeInfo'][i]['salary'] * 1.1;
            employeeInfo['employeeInfo'][i]['raiseEligable'] = false;
            console.log(`${employeeInfo['employeeInfo'][i]['firstName']} was given a raise to ${employeeInfo['employeeInfo'][i]['salary']}`)
        };
    };
};

giveRaises();


//Problem 6 Problem 6 Problem 6 Problem 6 Problem 6 Problem 6 Problem 6

function wfhStatusUpdate(){
    for (let i = 0; i < employeeInfo['employeeInfo'].length; i++){
        if (employeeInfo['employeeInfo'][i]['firstName'] === 'Anna' || employeeInfo['employeeInfo'][i]['firstName'] === 'Sam'){
            employeeInfo['employeeInfo'][i]['wfh'] = true;
        }

        else {
            employeeInfo['employeeInfo'][i]['wfh'] = false;
        }

        console.log(`Updated WFH status for ${employeeInfo['employeeInfo'][i]['firstName']} to ${employeeInfo['employeeInfo'][i]['wfh']}`)
    };
};

wfhStatusUpdate();

console.log('%j', employeeInfo)
console.log('%j', companyInfo)