import React from 'react';

function InstructionsB() {
    return (
        <div className='instructions-b'>
            <p className='instructions-heading'>B. Beneficiary designations (designations below require additional paperwork in addtion to items in Section A)</p>
            <ol>

                <li><p className='instruction-body'>Estate - if the beneficiary is an estate, a Letter of Appointment is needed to process your claim. The letter
                    does not need to be certified.</p>
                </li>
                <li><p className='instruction-body'>Surviving Children- if the beneficiary is not specifically named and is listed as "surviving children" or
                    "children", you must complete the Notarized Surviving Children Affidavit (DD9069). This needs to be signed by an individual that is not one of the surviving
                    children (i.e. Attorney, Executor of the Estate or family member) and this must be notarized.
                </p>
                </li>
                <li>
                    <p className='instruction-body'>Minor Children- if the beneficiary is a minor child, contact our customer service center for instructions on how to file
                        the death claim. We will need to know if a court has appointed or will appoint a conservator or guardian of the estate for the minor.
                    </p>
                </li>
                <li>
                    <p className='instruction-body'>Trust - if the beneficiary is a trust, provided a completed Trust Certification and Indemnification form (RF971) or a copy
                        of the trust document. NOTE: The deceased's social security number cannot be used to pay out death benefits to a trust.</p>
                    <ul>
                        <li><p>An irrevocable Trust should use its own Tax Indemnification number.</p></li>
                        <li><p>A Revocable Trust can use the Tax Identification number of the grantor while the grantor is alive. Upon the grantor's death, the trust 
                            becomes irrevocable and its own Tax Indemnification number is required.</p></li>
                    </ul>
                </li>
            </ol>

        </div>

    );
}

export default InstructionsB;