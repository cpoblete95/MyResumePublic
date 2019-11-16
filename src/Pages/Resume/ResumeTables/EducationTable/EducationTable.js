import React from 'react';
import styles from './EducationTable.css';

const EducationTable = (props) => {
    return (
        <table className={`${'table table-borderless'} ${styles.EducationTable}`}>
            <tbody>
                <tr>
                    <th scope="row">
                        {' '}
            Rutgers University, New Brunswick, New Jersey – B.S Computer
            Science, May 2017
                    </th>
                </tr>
                {/* <tr>
                    <th scope="row">Frameworks</th>
                    <td>
                        <p dangerouslySetInnerHTML = {{__html: "<i>(Proficient)</i> - React, Jasmine, AngularJS "}} ></p>
                        <p dangerouslySetInnerHTML = {{__html: "<i>(Familiar)</i> - Jest, Enzyme, Spring"}} ></p>
                    </td>
                </tr> */}
            </tbody>
        </table>
    );
};

export default EducationTable;
