import {INPUT_CHANGE, ADD_ITEM, DEL_ITEM, GET_LIST} from './actionTypes'
import {getList} from '../http/api'

export const inputChangeAction = (value)=> ({
  type: INPUT_CHANGE,
  value
})

export const addItemAction = ()=> ({
  type: ADD_ITEM
})

export const delItemAction = (index)=> ({
  type: DEL_ITEM,
  index
})

export const getListAction = (list)=> ({
  type: GET_LIST,
  list
})

// 利用redux-thunk中间件，请求后端接口异步获取数据
export const getToDoList = ()=> {
  return async (dispatch)=> {
    const res = await getList()
    const {data} = res
    const action = getListAction(data.list)
    dispatch(action)
  }
}