import React from 'react';
// import '../../src/App.css'
function BeneficiaryStatement(props) {
    return (
        <div className='beneficiary-statement'>
            <div className='intro-box'>
                <strong>Information about the deceased</strong>
            </div>
            <div className='form'>
                Name of the deceased: {props.deceasedName}
                Date of death: {props.dateofdeath}
                Contract number(s): {props.contract}
            </div>
            <div className='intro-box'>
                <strong>Beneficiary form</strong>
            </div>
            <div className='form'>
                Name: {props.beneficiarystatement}
                Date of birth: {props.dateofbirth}
                Beneficiary's social security number or Tax ID: {props.ssn}
                Address-street: {props.address_street}
                City: {props.city}
                State: {props.state}
                ZIP: {props.zip}
                Phone number: {props.phone_number}
                Your relationship to the deceased: {props.relationship}
                Email address: {props.email}
            </div>
            <div className='container'>
                <ul>
                    <li>US-Citizen</li>
                    <li>Non-US Citizen/Non-resident alien</li>
                    <li>Resident alien</li>
                </ul>
            </div>
            <div className='intro-box'>
                <strong>Notice of withholding on annuity contracts (single sum payment only)</strong>
            </div>
            <div className='form'>
                <ul>
                    <li>I elect <i><b>not to have</b></i> federal or applicable state tax withheld from any taxable distribution(s).</li>
                    <li>I elect <i><b>to have</b></i> 10% federal and applicable state tax withheld from any taxable distribution(s).</li>
                    <li>I elect <i><b>to have</b></i> {props.federal_tax} federal and {props.federal_tax} applicable state tax withheld from any taxable distribution(s).</li>
                    <li>I elect <i><b>to have</b></i> {props.federal_tax} federal and {props.federal_tax} applicable state tax withheld from the taxable portion of any payment(s).</li>
                </ul>
            </div>
            <div className='intro-box'>
                <strong>Settlement options</strong>
            </div>
            <div className='form'>
                <ul>
                    <li>Single Payment Option</li>
                    <ul>
                        <li>I elect to have a check mailed to my address on the previous page.</li>
                        <li>I elect to have the financial professional deliver the check to me.</li>
                        <li>I elect a wire to my bank.</li>
                        <ul>
                            <li>Checking</li>
                            <li>Savings</li>
                            <li>Trust</li>
                        </ul>
                    </ul>
                    Name of the financial institution: {props.financial_institution}
                    Phone: {props.financial_institution_phone}
                    Account holder's name: {props.account_holder}
                    Transit and Routing number: {props.transit_routing_number}
                    Account number: {props.account_number}
                    Joint account holder's name: {props.joint_account_holder_name}
                    <li>Spousal Confirmation</li>
                    <ul>
                        <li>Spousal Continuation of current contract</li>
                        <li>Spouse Continuation and transfer to new contract</li>
                    </ul>
                    <li>Income payments</li>
                    Joint Life:
                    Name: {props.join_life_name}
                    Social Security: {props.joint_life_ssn}
                    Date of birth: {props.joint_dob}
                    Address: {props.joint_dob}
                    <li>Beneficiary IRA/Stretch annuity
                    </li>
                    <ul>
                        <li>Internal Beneficiary stretch annuity (non qualified contracts)</li>
                        <li>Internal Beneficiary IRA (qualified contracts)</li>
                        <li>Beneficiary stretch annuity (non qualified contracts) transferring to external company</li>
                        <li>Beneficiary IRA transferring to external company</li>
                    </ul>
                    <li>Mutual funds</li>
                </ul>

                <div className='intro-box'>
                    <strong>Release of assignment (required for assigned contracts only</strong>
                </div>
                <div className='form'>
                    To: Principal Life Insurance Company (hereinafter referred to as "Company"):
                    <p>The undersigned holds an assignment {props.assignmentDate} on Contract number: {props.contract}</p>
                    <p>The undersigned acknowledges that all conditions and terms of said assignment have been fully satisfied and performed and does hereby, cancel,
                        release and discharge any and all interest of said assignment.
                    </p>
                    <p>Dated at (City/State): {props.releasedCity_State}</p>
                    <p>Date: {props.releaseDate}</p>

                </div>
                <p>Signature of assignee:</p>
                <p>Witness:</p>
                <p>Print name and title</p>
                <p>Print name</p>
            </div>
            <div className='intro-box'>
                <strong>Spouse's acknowledgement to transfer to new contract (complete only for internal annuity transfers by spouse)
                </strong>
            </div>
            <div className='form'>
                <p>I understand that I am allowed to become the owner and annuitant under contract {props.contract} due to the death of my husband/wife {props.deceasedName}.</p>
                <p>If I choose to keep this contract, my surrender charges would apply at the time of subsequent partial withdrawals or full surrender of values. For Principal
                    Select Series Annuity, Principal Preferred Services Annuity, Principal Premier Annuity and Principal Growth Annuity, if your make partial withdrawals or fully
                    surrender the continued contract during the guaranteed period in effect at the time of death, no surrender charges will apply.Surrender charges will apply if
                    you elect to renew the contract into a subsequent guaranteed period. I have chosed to transfer my values to my annuity contract {props.contract}</p>

                <p>Signature of spouse</p>
                <p>Date</p>
                <p>Print name</p>
                <p>Email address</p>
            </div>

            <div className='intro-box'>
                <strong>Beneficiary's acknowledgement to stretch an annuity contract (required only if option D is marked on page 3)
                </strong>
            </div>
            <div className='form'>
                <p>I understand that I am allowed to receive the death benefit under contract(s) {props.contract} due to the death of the deceased listed in Section 1.</p>
                <p>I understand no surrender charges will apply if I choose to receive the death benefit. However, I choose to transfer the death benefit to a new
                    annuity contract with Principal _____________________________
                </p>
                <p>I understand surrender charges will apply to any partial withdrawal or full surrender of values as described in the provisions of the new contract.
                    My financial professional, _____________________________ has explained the ramifications of this transfer to my satisfaction.
                </p>
                <p>Signature of beneficiary</p>
                <p>Date</p>
            </div>
            <div className='intro-box'>
                <strong>Signatures
                </strong>
            </div>
            <div className='form'>
                <p>Nonresident alien signature only</p>
                <p>Date</p>
                <p>Beneficiary's signature</p>
                <p>Date</p>
                <p>Financial professional signature (only required if the financial professional is delivering the payment)
                </p>
                <p>Agency</p>
                <p>Financial professional's address</p>
                <p>Financial professional's phone number</p>
            </div>
        </div>

    );
}

export default BeneficiaryStatement;