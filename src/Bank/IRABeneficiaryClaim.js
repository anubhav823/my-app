import React from 'react';

function IRABeneficiaryClaim(props) {
    return (
        <div className='form'>
            <ol>
                <li>Deceased IRA owner information</li>
                <p>Name of the deceased IRA owner: {props.deceasedname}</p>
                <p>Social Security Number: {props.socialsecuritynumber}</p>
                <p>Date of birth: {props.deceasedDOB}</p>
                <p>Date of death: {props.deceasedDOD}</p>
                <p>Account number: {props.accountnumber}</p>
                <p>Account number: {props.accountnumber}</p>
                <p>Account number: {props.accountnumber}</p>
                <li>Beneficiary Information</li>
                <p>Name of beneficiary: {props.beneficiaryname}</p>
                <p>Social Security Number/EIN for Trust or Estate: {props.bene_socialsecurity_number}</p>
                <p>Date of birth: {props.bene_DOB}</p>
                <p>Beneficiary relationship to IRA owner: </p>
                <ul>
                    <li>Spouse</li>
                    <li>Non-spouse</li>
                    <li>Non-person</li>
                </ul>
                <p>Name(s) of Trustee or Personal Representative (if applicable):</p>
                <p>Date of trust (if applicable):</p>
                <p>Beneficiary address: {props.address_street}</p>
                <p>City: {props.city}</p>
                <p>State: {props.state}</p>
                <p>ZIP code: {props.zip}</p>
                <p>Phone Number: {props.bene_phone_number}</p>
                <p>Email: {props.email}</p>
                <p>I certify the statements contained in this section are correct and</p>
                <ul>
                    <li>I am a U.S Person (including a U.S resident alien)</li>
                    or
                    <li>I am not a U.S Person (including a nonresident alien)</li>
                </ul>
                <li>What do you want to do with your funds?</li>
                <ul><li><b>Options only available for Spouse</b></li>
                    <ul>
                        <li>Treat the account as my own by opening a new account in my name.</li>
                        <li>Transfer funds in my name to another financial institution.</li>
                        <li>Open a new inherited IRA and defer the RMD until the deceased would have reached the age of 70 1/2. I will notify Principal Bank when
                            distributions are to begin.
                        </li>
                    </ul>
                    <li><b>Options available for all beneficiaries including spouse</b></li>
                    <ul>
                        <li>Lump sum distribution (entire balance)</li>
                        <li>Open a new inherited IRA and distribute the account over the appropriate life expectancy schedule.</li>
                        <li>Open a new inherited IRA under the 5-year rule.</li>
                        <li>Transfer funds as an inherited IRA to another financial institution.</li>
                    </ul>
                </ul>
                <li>How do you want to invest your funds?</li>
                <ul>
                    <li>Money market IRA</li>
                    <li>Qualified CD</li>
                </ul>
                <li>Complete this section if the deceased was 70 1/2 or older</li>
                <b>Choose one:</b>
                <ul>
                    <li>Mail a check for the RMD to the address listed in section B of the form.</li>
                    <li>Seed the RMD via electronic funds transfer (ACH) to the bank account indicated on the attached pre-printed, voided check</li>
                    <li>The RMD has been satisfied</li>
                </ul>
                <li>distribution Options from your new IRA</li>
                Frequency
                <ul>
                    <li>Monthly</li>
                    <li>Quarterly</li>
                    <li>Semi annual</li>
                    <li>Annual</li>
                    Start Date:________________________
                </ul>
                <li>Tell us how much income tax to withhold</li>
                <b>Federal Tax withholding</b>
                <ul>
                    <li>I elect <b>NOT</b> to have federal tax withheld</li>
                    <li>I elect to have 10% Federal Income tax withheld from my distribution.</li>
                </ul>
                <b>State tax withholding</b>
                <ul>
                    <li>I elect <b>NOT</b> to have state income tax witheld (unless required by law)</li>
                    <li>I elect to have either $________________________ or _____% state income tax from my distribution.</li>
                </ul>
                <li>How do you want to receive your funds?</li>
                <ul>
                    <li>Electronically deposited into my bank account (ACH)</li>
                    <p>Routing/ABA number ________________________</p>
                    <p>Account number ________________________</p>
                    <li>Send a check to my home address as listed in section B</li>
                    <ul>
                        <li>Regular mail ($10 fee applies)</li>
                        <li>Overnight delivery ($25 fee applies)</li>
                    </ul>
                    <li>Existing Principal Bank IRA account number</li>
                    <li>Wire funds</li>
                </ul>
                <li>Signature</li>
                <ul>
                    <li>Beneficiary's signature</li>
                    <li>Date</li>
                    <p>I did present to a notary public as proof of my identity a valid state/U.S Government issued photo ID</p>
                    <p><b>Type</b></p>
                    <p><b>Driver's license</b></p>
                    <p><b>Identification Card</b></p>
                    <p><b>Others (please describe)</b></p>
                    <p><b>Issued in the state of ______ (required if Driver's license or ID card is selected)</b></p>
                    <p><b>Number from presented document:_____</b></p>
                    <p><b>Notary public: Information in this section to be completed by a Notary Public.</b></p>
                    <p>Subscribed and sworn to (or affirmed) before me on this ________ day of ________, 20__.</p>
                    <p>by ________________________ (Beneficiary), proved to me on the basis of presentation of satisfactory evidence to be the person
                        who appeared before me.
                    </p>
                    <p><b>Notary signature _____________________________</b></p>
                </ul>
            </ol>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <b>Notary seal ________________________</b>
        </div>
    );
}
export default IRABeneficiaryClaim