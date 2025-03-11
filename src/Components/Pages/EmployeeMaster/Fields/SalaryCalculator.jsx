import  { useState } from 'react';

const SalaryCalculator = () => {
  const [ctc, setCtc] = useState('');

  // Handle CTC input change
  const handleCtcChange = (e) => {
    setCtc(e.target.value);
  };

  // Only calculate if CTC is valid (greater than 0)
  const calculateSalary = () => {
    if (ctc <= 0) {
      alert("Please enter a valid CTC amount");
      return;
    }

    // Calculate components
    const basicSalary = ctc * 0.40; // 40% of CTC
    const hra = basicSalary * 0.40; // 40% of Basic Salary
    const pf = basicSalary * 0.12; // 12% of Basic Salary
    const esic = basicSalary * 0.0075; // 0.75% of Basic Salary
    const specialAllowance = ctc - (basicSalary + hra + pf + esic); // Remaining amount after other deductions
    const conveyance = 1600; // Fixed allowance
    const medical = 1250; // Fixed allowance
    const professionalTax = 200; // Fixed tax, can change based on state
    const bonus = 0; // Bonus as per company policy (if any)
    const gratuity = basicSalary * 0.04; // 4% of Basic Salary (as per standard)
    const otherDeductions = pf + esic + professionalTax; // Total deductions

    const totalDeductions = otherDeductions + professionalTax;

    const netSalary = ctc - totalDeductions; // Net salary after deductions

    return {
      basicSalary,
      hra,
      pf,
      esic,
      specialAllowance,
      conveyance,
      medical,
      professionalTax,
      bonus,
      gratuity,
      totalDeductions,
      netSalary
    };
  };

  const salaryDetails = calculateSalary();

  return (
    <>
      <h1>Salary Breakdown</h1>
      <div style={{height:"30vh"}}>
        <label>
          <strong>Enter CTC:</strong>
          <input
            type="number"
            value={ctc}
            onChange={handleCtcChange}
            placeholder="Enter CTC"
          />
        </label>
      </div>

      {ctc > 0 && salaryDetails ? (
        <div>
          <h3>Salary Breakdown for CTC: ₹{ctc}</h3>
          <div>
            <p><strong>Basic Salary:</strong> ₹{salaryDetails.basicSalary.toFixed(2)}</p>
            <p><strong>HRA:</strong> ₹{salaryDetails.hra.toFixed(2)}</p>
            <p><strong>PF (Employee Contribution):</strong> ₹{salaryDetails.pf.toFixed(2)}</p>
            <p><strong>ESIC:</strong> ₹{salaryDetails.esic.toFixed(2)}</p>
            <p><strong>Special Allowance:</strong> ₹{salaryDetails.specialAllowance.toFixed(2)}</p>
            <p><strong>Conveyance:</strong> ₹{salaryDetails.conveyance}</p>
            <p><strong>Medical:</strong> ₹{salaryDetails.medical}</p>
            <p><strong>Professional Tax:</strong> ₹{salaryDetails.professionalTax}</p>
            <p><strong>Bonus:</strong> ₹{salaryDetails.bonus}</p>
            <p><strong>Gratuity:</strong> ₹{salaryDetails.gratuity.toFixed(2)}</p>
          </div>
          <div>
            <p><strong>Total Deductions:</strong> ₹{salaryDetails.totalDeductions.toFixed(2)}</p>
            <p><strong>Net Salary (after deductions):</strong> ₹{salaryDetails.netSalary.toFixed(2)}</p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SalaryCalculator;
