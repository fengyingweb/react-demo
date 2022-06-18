import {INPUT_CHANGE, ADD_ITEM, DEL_ITEM, GET_LIST} from './actionTypes'
const defaultState = {
  inputVal: 'jspang',
  placeholder: '请输入...',
  list: []
}

// reducer必须是个纯函数，不能直接修改state, 只能返回state.
export default (state = defaultState, action)=> {
  console.log('action:', action)
  let newState = JSON.parse(JSON.stringify(state))
  if (action.type === INPUT_CHANGE) {
    newState.inputVal = action.value
  }

  if (action.type === ADD_ITEM) {
    newState.list.push(newState.inputVal.trim())
    newState.inputVal = ''
  }

  if (action.type === DEL_ITEM) {
    newState.list.splice(action.index, 1)
  }

  if (action.type === GET_LIST) {
    newState.list = action.list
  }
  return newState;
}