import React from 'react';
import styles from './ExperienceTable.css';

import {ResumeData} from '../../../../Assets/Data/ResumeData';

const ExperienceTable = (props) => {

    /**
     * will take array and return multiple rows
     */
    const getTableRows = (rowArray) => {
        let count = 0;
        return rowArray.map(row => {
            return<tr dangerouslySetInnerHTML = {{__html: "- " + row}} key = {count++}></tr>
    })

    }

    /**
     * Will grab Resume data and map it into table components
     * instead of hard coding each element
     */
    const getExperience = () => {
        let count = 0;
        return ResumeData.map(data =>{
            return  <tr key = {count++}>
                        <th scope="row">{data.date}</th>
                        <td>
                            <h2>{data.location}</h2>
                            <h3>{data.role}</h3>
                            {getTableRows(data.description)}
                        </td>
                    </tr>

        });
    }
    
    return(
        <table className = {`${"table table-borderless"} ${styles.ExperienceTable}`}>
            <tbody>
                {getExperience()}
            </tbody>
        </table>
    )
}

export default ExperienceTable;