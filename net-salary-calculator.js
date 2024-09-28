//The program will assign each value to a variable to handle changes to the value easily incase KRA updates the values and rates. 

function getNetPay(basicSalary, benefits) {
    //calculating the grossSalary
    const grossSalary = basicSalary + benefits;

    //calculating NSSF contribution
    function calculateNSSFContribution(grossSalary) {
        const tier1Limit = 7000;
        const tier2Limit = 36000;
        const nssfRate = 0.06; //the same as 6%

        let tier1;
        let tier2;
        let NSSFContr;

        if (grossSalary > 0 && grossSalary <= 7000) {
            tier1 = tier1Limit * nssfRate;
            tier2 = 0;
        }  else if (grossSalary >= 7000 && grossSalary <= 36000) {
            tier1 = tier1Limit * nssfRate;
            tier2 = (grossSalary -tier1Limit) * nssfRate;
        } else if (grossSalary > 36000) {
            tier1 = tier1Limit * nssfRate;
            tier2 = (tier2Limit - tier1Limit) * nssfRate;
    }
    NSSFContr = tier1 + tier2;
    return NSSFContr;
    }
    const totalNSSFContr = calculateNSSFContribution(grossSalary);
    console.log(`Your Total Monthly NSSF contribution is ${totalNSSFContr}`);

    
    //calculating the PAYE ammount payable
    function getPAYE(grossSalary, totalNSSFContr) {
        const taxableIncome = grossSalary - totalNSSFContr;
        let paye; // Initialize the PAYE amount

        // Define tax brackets and rates
        const bracket1Limit = 24000;
        const bracket2Limit = 32333;
        const bracket3Limit = 500000;
        const bracket4Limit = 800000;
    
        const rate1 = 0.10; // 10%
        const rate2 = 0.25; // 25%
        const rate3 = 0.30; // 30%
        const rate4 = 0.325; // 32.5%
        const rate5 = 0.35; // 35%
    
        // Calculate PAYE based on taxable income
        if (taxableIncome <= bracket1Limit) {
            paye = taxableIncome * rate1; // 10% for income up to bracket1Limit
        } else if (taxableIncome <= bracket2Limit) {
            paye = (bracket1Limit * rate1) + ((taxableIncome - bracket1Limit) * rate2); // 10% for the first bracket and 25% for the rest
        } else if (taxableIncome <= bracket3Limit) {
            paye = (bracket1Limit * rate1) + ((bracket2Limit - bracket1Limit) * rate2) + ((taxableIncome - bracket2Limit) * rate3); // 10%, 25%, and 30%
        } else if (taxableIncome <= bracket4Limit) {
            paye = (bracket1Limit * rate1) + ((bracket2Limit - bracket1Limit) * rate2) + ((bracket3Limit - bracket2Limit) * rate3) + ((taxableIncome - bracket3Limit) * rate4); // 10%, 25%, 30%, and 32.5%
        } else {
            paye = (bracket1Limit * rate1) + ((bracket2Limit - bracket1Limit) * rate2) + ((bracket3Limit - bracket2Limit) * rate3) + ((bracket4Limit - bracket3Limit) * rate4) + ((taxableIncome - bracket4Limit) * rate5); // 10%, 25%, 30%, 32.5%, and 35%
        }
    
        return paye; // Return the calculated PAYE
    }
    const calculatedPAYE = getPAYE(grossSalary, totalNSSFContr);
    console.log(`Your Total Monthly Payable PAYE is ${calculatedPAYE}`);

    const payeeRelief = 2400;
    const payeAfterRelief = calculatedPAYE - payeeRelief;
    console.log(`Your Total Monthly Payable PAYE After Relief is ${payeAfterRelief}`);

    function getNHIFContr(grossSalary) {
        if (grossSalary >= 0 && grossSalary <= 5999) {
            return 150;
        } else if (grossSalary >= 6000 && grossSalary <= 7999) {
            return 300;
        } else if (grossSalary >= 8000 && grossSalary <= 11999) {
            return 400;
        } else if (grossSalary >= 12000 && grossSalary <= 14999) {
            return 500;
        } else if (grossSalary >= 15000 && grossSalary <= 19999) {
            return 600;
        } else if (grossSalary >= 20000 && grossSalary <= 24999) {
            return 750;
        } else if (grossSalary >= 25000 && grossSalary <= 29999) {
            return 850;
        } else if (grossSalary >= 30000 && grossSalary <= 34999) {
            return 900;
        } else if (grossSalary >= 35000 && grossSalary <= 39999) {
            return 950;
        } else if (grossSalary >= 40000 && grossSalary <= 44999) {
            return 1000;
        } else if (grossSalary >= 45000 && grossSalary <= 49999) {
            return 1100;
        } else if (grossSalary >= 50000 && grossSalary <= 59999) {
            return 1200;
        } else if (grossSalary >= 60000 && grossSalary <= 69999) {
            return 1300;
        } else if (grossSalary >= 70000 && grossSalary <= 79999) {
            return 1400;
        } else if (grossSalary >= 80000 && grossSalary <= 89999) {
            return 1500;
        } else if (grossSalary >= 90000 && grossSalary <= 99999) {
            return 1600;
        } else if (grossSalary >= 100000) {
            return 1700;
        } 
    }

    const contrubutionNHIF = getNHIFContr(grossSalary);
    console.log(`Your Total Monthly NHIF Contribution is ${contrubutionNHIF}`);

    //calculate the net salary
    const netSalary = grossSalary - (totalNSSFContr + payeAfterRelief + contrubutionNHIF)
    const annualNetSalary = netSalary *12;
    console.log(`Your Total Monthly Net Salary is ${netSalary}`);
    console.log(`Your Total Annual Net Salary is ${annualNetSalary}`);

}
    

getNetPay(60000, 10000);