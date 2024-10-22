import {calculateInvestmentResults, formatter} from '../util/investment.js';

export function Results({ data }){
    const investmentData = calculateInvestmentResults(data) ;
    const initialInvestment = investmentData[0].valueEndOfYear - investmentData[0].interest - investmentData[0].annualInvestment ;
    // console.log(investmentData) ;
    return( 
    <table id='result'>
        <thead>
            <tr>
                <th>Year</th>
                <th>Invested Value</th>
                <th>Intrest (Year)</th>
                <th>Total Intrest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {investmentData.map((element) => {

                const totalIntrest = element.valueEndOfYear - element.annualInvestment * element.year - initialInvestment;
                const totalAmountInvestment = element.valueEndOfYear - totalIntrest ;

                return (
                    <tr key={element.year}>
                        <td>{element.year}</td>
                        <td>{formatter.format(element.valueEndOfYear)}</td>
                        <td>{formatter.format(element.interest)}</td>
                        <td>{formatter.format(totalIntrest)}</td>
                        <td>{formatter.format(totalAmountInvestment)}</td>
                    </tr>);
                }
            )}
        </tbody>
    </table>
    )
}