import React from 'react';
import styles from './SkillsTable.css';

const SkillsTable = (props) => {
    return (
        <table className={`${'table table-borderless'} ${styles.SkillsTable}`}>
            <tbody>
                <tr>
                    <th scope="row">Software</th>
                    <td>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: '<i>(Proficient)</i> - Java, JavaScript, HTML/CSS, Git'
                            }}
                        />
                        <p
                            dangerouslySetInnerHTML={{ __html: '<i>(Familiar)</i> - SQL, C' }}
                        />
                    </td>
                </tr>
                <tr>
                    <th scope="row">Frameworks</th>
                    <td>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: '<i>(Proficient)</i> - React, Jasmine, AngularJS '
                            }}
                        />
                        <p
                            dangerouslySetInnerHTML={{
                                __html: '<i>(Familiar)</i> - Jest, Enzyme, Spring'
                            }}
                        />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default SkillsTable;
