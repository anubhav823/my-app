import React from 'react';
import Header from './Header';
import InstructionsA from './Instructions/InstructionsA';
import InstructionsB from './Instructions/InstructionsB';
import InstructionsHeader from './Instructions/InstructionsHeader';

function Form() {
    return (
        <div className="Form">
            <Header />
            <InstructionsHeader />
            <ul>
                <li>
                    <InstructionsA />
                </li>
                <li>
                    <InstructionsB />
                </li>
            </ul>
        </div>
    );
}
export default Form;