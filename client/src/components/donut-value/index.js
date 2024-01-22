import { useEffect } from 'react'
import bb, { donut } from "billboard.js";
import 'billboard.js/dist/billboard.css'

const DonutValue = ({ key, value }) => {
    const redefinedKey = key

    useEffect(() => {
        const donutChartConfig = {
            data: {
              columns: [
                [`"${redefinedKey}"`, value],
              ],
              type: donut(),
            },
        
            donut: {
              title: `${redefinedKey}`
            },
        
            bindto: `#${key}`
        }
        
        bb.generate(donutChartConfig)
    },[key, redefinedKey, value])


    return (
        <div>
            <div id={`${key}`}></div>
        </div>
    )
}

export default DonutValue