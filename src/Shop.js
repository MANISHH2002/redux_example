import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import {actionCreators} from './state/index'
function Shop() {
  const dispatch = useDispatch();
  const {withdrawmoney, depositmoney} = bindActionCreators(actionCreators, dispatch)

  return (
    <div className='container'>   
        {/* <button className='btn btn-primary mx-3' onClick={()=>{dispatch(actionCreators.withdrawmoney(100))}}>-</button>
        add money or withdraw amount
        <button className='btn btn-primary mx-3' onClick={()=>{dispatch(actionCreators.depositmoney(100))}}>+</button> */}
        <button className='btn btn-primary mx-3' onClick={()=>{withdrawmoney(100)}}>-</button>
        add money or withdraw amount
        <button className='btn btn-primary mx-3' onClick={()=>{depositmoney(100)}}>+</button>
    </div>
  )
}

export default Shop
