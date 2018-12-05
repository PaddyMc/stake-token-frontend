import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { renderField } from '../RenderFormField/RenderFormField'
//import { validateTransfer } from '../../actions/actions'
import'./TransferForm.css';

let TransferForm = props => {
  const {
    action
  } = props

  return (
    <div className="">
      <Field 
        label="Ethereum Address" 
        className=""
        name="address" 
        component={renderField} 
        type="text" />
      <Field 
        label="Amount to Transfer" 
        className=""
        name="amount"
        component={renderField} 
        type="text" />
      <button
        className="app-button"
        onClick={()=> action()}
      >
        Transfer
      </button>
    </div>
  )
}

TransferForm = reduxForm({
  form: 'transfer',
  //validateTransfer
})(TransferForm)

export default TransferForm