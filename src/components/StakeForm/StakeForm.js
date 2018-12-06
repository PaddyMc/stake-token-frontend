import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { renderField } from '../RenderFormField/RenderFormField'
import { validateStake as validate } from '../../actions/actions'
import'./StakeForm.css';

let StakeForm = props => {
  const {
    action
  } = props

  return (
    <div className="">
      <Field 
        label="Amount to Stake" 
        className=""
        name="stake" 
        component={renderField} 
        type="text" />
      <button
        className="app-button"
        onClick={()=> action()}
      >
        Stake Ether
      </button>
    </div>
  )
}

StakeForm = reduxForm({
  form: 'stake',
  validate
})(StakeForm)

export default StakeForm