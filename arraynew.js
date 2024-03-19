// [number,district,+vecases,deathrate,curredrate,firstdosevaccine,seconddosevaccine]
covid_data = [
    [1,'Ernakulam',34000,2000,23000,20000,2000],
    [2,'Idukki',14000,3000,25000,30000,1000],
    [3,'Thrissur',24000,4000,33000,24000,2500],
    [4,'Pathanamthitta',20000,2000,45000,22000,1500],
    [5,'Kozhikode',44000,5000,12000,21000,500],
    [6,'Palakkad',12000,1000,20000,23000,3400],
    [7,'Kottayam',27000,1500,27000,14000,1000],
    [8,'Kollam',14000,2500,25000,18000,2700]
    ];
    
    

    const districtWithHighestCases = covid_data.reduce((maxCaseDistrict, currentDistrict) =>currentDistrict[2] > maxCaseDistrict[2] ? currentDistrict : maxCaseDistrict, covid_data[0]);
    console.log("District with highest positive cases:", districtWithHighestCases[1]);

    const districtWithHighestFirstDose=covid_data.reduce((maxFirstDoseDistrict,currentDistrict)=>currentDistrict[5]>maxCaseDistrict[5]?currentDistrict:maxFirstDoseDistrict,covid_data[0]);
    console.log("District with highest first dose:",districtWithHighestFirstDose[1]);

    const districtWithLowestDeadthRate=covid_data.reduce((minDeadthRateDistrict,currentDistrict)=>currentDistrict[3]>minDeadthRateDistrict[3]?currentDistrict:minDeadthRateDistrict,covid_data[0]);
    console.log("District with lowest deadth rate:",districtWithLowestDeadthRate[1]);

    const sortedByPositiveCases=covid_data.slice().sort((a,b)=>b[2]-a[2]);
    console.log("Data sorted by positive cases:",sortedByPositiveCases);

    const districtWithMoreThan15000cases=covid_data.some(district=>district[2]>15000);
    console.log("District with more than 15000 cases:",districtWithMoreThan15000cases);
     
    const sortDataByFirstDose=covid_data.slice().sort((a,b)=>b[5]-a[5]);   
    console.log("Data sorted by first dose vaccine:",sortDataByFirstDose);

    const thrissurDetails=covid_data.find(district=>district[1]==='Thrissur');
    console.log("Details of Thrissur:",thrissurDetails);


    



