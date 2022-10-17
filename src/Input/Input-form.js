import React, { Component } from 'react'
import './styles.css'
export class InputForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:8081/story', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'deceasedname': this.deceasedname.value,
                'dateOfBirth': this.dateOfBirth.value,
                'dateOfDeath': this.dateOfDeath.value,
                'contractNumber': this.contractNumber.value,
                'assignee': this.assignee.value,
                'reporter': this.reporter.value,
                'status': this.status.value
            })
        });
    }

    render() {
        return (
            <div className='new-issue'>
                <form className='deceased-details'>
                    <b><p>Deceased details:</p></b>
                    Name of the deceased: <input ref={(ref) => { this.deceasedname = ref }} type='text' id='deceasedname'></input>
                    Date of birth: <input ref={(ref) => { this.dateOfBirth = ref }} type='text' id='dateOfBirth'></input>
                    Date of death: <input ref={(ref) => { this.dateOfDeath = ref }} type='' if='dateOfDeath'></input>
                    Contract number: <input ref={(ref) => { this.contractNumber = ref }} type='text' id='contractNumber'></input>
                    Social Security Number: <input ref={(ref) => { this.socialsecuritynumber = ref }} type='text' id='deceasedSocialSecurityNumber'></input>
                    Account Number: <input ref={(ref) => { this.deceasedAccountNumberFirst = ref }} type='text' id='deceasedAccountNumberFirst'></input>
                    Account Number: <input ref={(ref) => { this.deceasedAccountNumberSecond = ref }} type='text' id='deceasedAccountNumberSecond'></input>
                    Account Number: <input ref={(ref) => { this.deceasedAccountNumberThird = ref }} type='text' id='deceasedAccountNumberThird'></input>
                </form>
                <form className='beneficiary-details'>
                    <b><p>Beneficiary details</p></b>
                    Name of beneficiary: <input ref={(ref) => { this.beneficiaryName = ref }} type='text' id='beneficiaryName'></input>
                    Beneficiary's Social Security Number or Tax ID: <input ref={(ref) => { this.beneficiarySSN = ref }} type='text' id='beneficiarySSN'></input>
                    Date of Birth <input ref={(ref) => { this.beneDateOfBirth = ref }} type='text' id='beneDateOfBirth'></input>
                    Address-street: <input ref={(ref) => { this.addressStreet = ref }} type='text' id='addressStreet'></input>
                    City:<input ref={(ref) => { this.beneficiaryCity = ref }} type='text' id='beneficiaryCity'></input>
                    State:<input ref={(ref) => { this.beneficiaryState = ref }} type='text' id='beneficiaryState'></input>
                    ZIP:<input ref={(ref) => { this.beneficiaryZIP = ref }} type='text' id='beneficiaryZIP'></input>
                    Phone number:<input ref={(ref) => { this.beneficiaryPhone = ref }} type='text' id='beneficiaryPhone'></input>
                    Your relationship to the deceased:<input ref={(ref) => { this.beneficiaryRelationship = ref }} type='text' id='beneficiaryRelationship'></input>
                    Name of Trustee(s) or Personal Representative (if applicable)<input ref={(ref) => { this.beneficiaryTrusteeName = ref }} type='text' id='beneficiaryTrusteeName'></input>
                    Date of trust (if applicable)<input ref={(ref) => { this.trustDate = ref }} type='text' id='trustDate'></input>
                    Email address:<input ref={(ref) => { this.beneficiaryEmail = ref }} type='text' id='beneficiaryEmail'></input>
                    <b><p>Your citizenship status:</p></b>
                    <ul>
                        <li><input type="radio" value="US-Citizen" name="citizenship" /> US-Citizen</li>
                        <li><input type="radio" value="Non-US Citizen/Non-resident alien" name="citizenship" /> Non-US Citizen/Non-resident alien</li>
                        <li><input type="radio" value="Resident alien" name="citizenship" /> Resident alien</li>
                    </ul>
                    <b><p>Notice of withholding on annuity contracts (single sum payment only)</p></b>
                    <ul>
                        <li><input type="radio" value="No Withholding" name="withholding-annuity-single-sum-payment" />I elect not to have federal or applicable state tax withheld from any taxable distribution(s).</li>
                        <li><input type="radio" value="10% withholding" name="withholding-annuity-single-sum-payment" />I elect to have 10% federal and applicable state tax withheld from any taxable distribution(s).</li>
                        <li><input type="radio" value="" name="withholding-annuity-single-sum-payment" />I elect to have federal and applicable state tax withheld from any taxable distribution(s).</li>
                        <li><input type="radio" value="US-Citizen" name="withholding-annuity-single-sum-payment" />I elect to have federal and applicable state tax withheld from the taxable portion of any payment(s).</li>
                    </ul>
                </form>
                <form className='bank-spouse-options'>
                    <b><p>Options available only for spouse</p></b>
                    <ul>
                        <li><input type="radio" value="own-account" name="spouse-options" />Treat the account as my own by opening a new account in my name</li>
                        <li><input type="radio" value="transfer-to-another-institution" name="spouse-options" />Transfer the funds in my name to another financial institution</li>
                        <li><input type="radio" value="open-new-inherited-IRA" name="spouse-options" />Open a new inherited IRA and defer the RMD until the deceased would have reached the age of 70 1/2. I will notify Principal Bank when
                            distributions are to begin.</li>
                    </ul>
                </form>
                <form className='bank-beneficiaries-options'>
                    <b><p>Options available for all beneficiaries including spouse</p></b>
                    <ul>
                        <li><input type="radio" value="lump-sum" name="beneficiary-options" />Lump sum distribution (entire balance)</li>
                        <li><input type="radio" value="new-inherited-IRA" name="beneficiary-options" />Open a new inherited IRA and distribute the account over the appropriate life expectancy schedule.</li>
                        <li><input type="radio" value="new-inherited-IRA-five-year" name="beneficiary-options" />Open a new inherited IRA under the 5-year rule.</li>
                        <li><input type="radio" value="transfer-to-another-institution" name="beneficiary-options" />Transfer funds as an inherited IRA to another financial institution.</li>
                    </ul>
                </form>
                <form className='bank-deceased-older-than-seventy-years-five-months'>
                    <b>Choose one:</b>
                    <ul>
                        <li><input type="radio" value="mail-a-check-RMD" name="deceased-older-than-seventy" />Mail a check for the RMD to the address listed in section B of the form.</li>
                        <li><input type="radio" value="send-RMD-via-ACH" name="deceased-older-than-seventy" />Seed the RMD via electronic funds transfer (ACH) to the bank account indicated on the attached pre-printed, voided check</li>
                        <li><input type="radio" value="satisfied-RMD" name="deceased-older-than-seventy" />The RMD has been satisfied</li>
                    </ul>
                    <b>Distribution options from your new IRA</b>
                    <ul>
                        <li><input type="radio" value="monthly" name="frequency-distribution" />Monthly</li>
                        <li><input type="radio" value="quarterly" name="frequency-distribution" />Quarterly</li>
                        <li><input type="radio" value="semi-annual" name="frequency-distribution" />Semi annual</li>
                        <li><input type="radio" value="annual" name="frequency-distribution" />Annual</li>
                        Start Date:<input type="text" id="distribution-start" name="state-tax" />
                    </ul>
                </form>
                <form className='income-tax-withholding'>
                    <li>Tell us how much income tax to withhold</li>
                    <b>Federal Tax withholding</b>
                    <ul>
                        <li><input type="radio" value="no-income-tax-withholding" name="federal-tax" />I elect <b>NOT</b> to have federal tax withheld</li>
                        <li><input type="radio" value="ten-percent-income-tax-withholding" name="federal-tax" />I elect to have 10% Federal Income tax withheld from my distribution.</li>
                    </ul>
                    <b>State tax withholding</b>
                    <ul>
                        <li><input type="radio" value="no-income-tax-withholding" name="state-tax" />I elect <b>NOT</b> to have state income tax witheld (unless required by law)</li>
                        <li>I elect to have either $<input type="text" id="dollar-state-income-tax-withholding" name="state-tax" /> or <input type="text" id="percent-state-income-tax-withholding" name="state-tax" />% state income tax from my distribution.</li>
                    </ul>
                </form>
                <form className='fund-receipt-options'>
                    <li>How do you want to receive your funds?</li>
                    <ul>
                        <li><input type="radio" value="ACH" name="funds-receipt" />Electronically deposited into my bank account (ACH)</li>
                        <p>Routing/ABA number <input type="text" placeholder="routing-number-or-ABA" name="routing-number" /></p>
                        <p>Account number <input type="text" placeholder="account-number" name="account-number" /></p>
                        <li><input type="radio" value="send-check-to-home-address" name="funds-receipt" />Send a check to my home address as listed in section B</li>
                        <ul>
                            <li><input type="radio" value="regular-mail" name="mode-of-delivery" />Regular mail ($10 fee applies)</li>
                            <li><input type="radio" value="overnight-mail" name="mode-of-delivery" />Overnight delivery ($25 fee applies)</li>
                        </ul>
                        <li><input type="radio" value="principal-bank-IRA" name="funds-receipt" />Existing Principal Bank IRA account number</li>
                        <li><input type="radio" value="wire-funds" name="funds-receipt" />Wire funds</li>
                    </ul>
                </form>
                <form className='settlement-options'>
                    <b><p>Settlement Options</p></b>
                    <ul>
                        <li><input type="radio" value="Single Payment" name="settlement options" /> Single Payment</li>
                        <ul>
                            <li><input type="radio" value="single-payment-check" name="settlement-options-single-payment" />I elect to have a a check mailed to my address on the previous page</li>
                            <li><input type="radio" value="Single-payment-financial-professional" name="settlement-options-single-payment" />I elect to have the financial professional deliver the check to me.</li>
                            <li><input type="radio" value="Single-payment-financial-professional" name="settlement-options-single-payment" />I elect a wire to my bank.</li>
                            <ul>
                                <li><input type="radio" value="single-payment-wire-checking" name="single-payment-wire" />Checking</li>
                                <li><input type="radio" value="single-payment-wire-savings" name="single-payment-wire" />Savings</li>
                                <li><input type="radio" value="single-payment-wire-trust" name="single-payment-wire" />Trust account</li>
                            </ul>
                        </ul>
                        <li><input type="radio" value="Spousal continuation" name="settlement options" /> Spousal Continuation</li>
                        <ul>
                            <li><input type="radio" value="spousal-continuation-current-contract" name="settlement-options-spousal" />Spousal continuation of current contract</li>
                            <li><input type="radio" value="spousal-continuation-new-contract" name="settlement-options-spousal" />Spousal continuation and transfer to new contract</li>
                        </ul>
                        <li><input type="radio" value="income-payments" name="settlement options" /> Income payments</li>
                        <li><input type="radio" value="beneficiary-IRA-stretch-annuity" name="settlement options" /> Beneficiary IRA/Stretch Annuity</li>
                        <ul>
                            <li><input type="radio" value="internal-beneficiary-stretch-annuity-non-qualified" name="benenficiary-IRA-stretch-annuity" />Internal beneficiary stretch annuity (non-qualified contracts)</li>
                            <li><input type="radio" value="internal-beneficiary-IRA-qualified" name="benenficiary-IRA-stretch-annuity" />Internal beneficiary IRA (qualified contracts)</li>
                            <li><input type="radio" value="beneficiary-stretch-annuity-non-qualified-transferring-to-external" name="benenficiary-IRA-stretch-annuity" />Beneficiary stretch annuity (non-qualified contracts) transferring tp external company</li>
                            <li><input type="radio" value="beneficiary-stretch-IRA-transferring-to-external" name="benenficiary-IRA-stretch-annuity" />Beneficiary IRA transferring to external company</li>
                        </ul>
                        <li><input type="radio" value="mutual-funds" name="settlement options" />Mutual Funds</li>
                    </ul>
                </form>
                <p><b>Signatures</b></p>

            </div >
        )
    }
}