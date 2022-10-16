import React from 'react';

function InstructionsA() {
    return (
        <div className='instructions-a'>
            <p className='instructions-heading'>A. REQUIRED annuity death claim items (you should always provide these):</p>
            <ol>
                <li>
                    <p className='instruction-body'>Each beneficiary must complete a separate Beneficiary's Statement (page 2 of this packet).</p>
                </li>
                <li>
                    <p className='instruction-body'>Each beneficiary must complete a Settlement Election Statement (page 3 of this packet). [Note:Certain settlement
                        options may result in immediate taxable income. Please discuss with your tax advisor before choosing a settlement option.]</p>
                </li>
                <li>
                    <p className='instruction-body'>Each beneficiary must complete the Signature section (page 7 of this packet).</p>
                </li>
                <li>
                    <p className='instruction-body'>Send us one copy of the death certificate. The copy does not need to be certified.</p>
                </li>
            </ol>
        </div>

    );
}

export default InstructionsA;