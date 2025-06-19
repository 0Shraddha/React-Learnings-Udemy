import React from 'react'
import {calculateInvestmentResults, formatter} from '../util/investment'

export default function Results({userInput}){
  const results = calculateInvestmentResults(userInput);
  const initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;


    console.log({results});
    return(
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Yr) </th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
               {results.map((item, index) => {
                const totalInterest = item.valueEndOfYear - item.annualInvestment * item.year - initialInvestment ;
                const totalAmountInvested = item.valueEndOfYear - totalInterest ;

                  return(
                      <tr key={index}>
                        <td>{item.year}</td>
                        <td>{formatter.format(item.interest)}</td>
                        <td>{formatter.format(item.valueEndOfYear)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>

                    </tr>
                  )
                })}
            </tbody>
        </table>
    )

}