import React, {useReducer, createContext} from 'react'; // react hooks写法的父子组件传值，使用createContext创建上下文
import Count from '../../components/Count'
import '../../assets/css/reactPage.css';

export const CountCtx = createContext(); // 关键代码创建上下文

const reducer = (state, action)=> {
  let newState = JSON.parse(JSON.stringify(state))
  switch(action.type) {
    case 'add':
      newState.count++;
      break;
    case 'sub':
      newState.count--;
      break;
    default:
  }
  return newState;
}
function VuePage() {
  let [state, dispatch] = useReducer(reducer, {count: 1}); // useReducer(reducer, '初始值') 模拟redux
  return (
    <div className="conent-wrapper">
      <h3>vue page demo</h3>
      {/* 关键代码提供值给子组件 */}
      <CountCtx.Provider value={{count: state.count, dispatch}}>
        <Count />
      </CountCtx.Provider>
    </div>
  )
}

export default VuePage