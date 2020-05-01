import React from 'react'

export default function List(props) {
   let input = React.useRef(null);
   let [state,setState] = React.useState({
      items: props.items
   })

   let listItems = state.items.map(item => <li>{item}</li>);

   let checkKey = event => {
      if (event.key == "Enter") {
         appendItem();
      }
   }

   let appendItem = () => {
      if (!input.current.value) return;

      state.items.push(input.current.value);
      input.current.value = "";
      
      setState({
         items: state.items
      })
   }

   let clearList = () => {
      setState({
         items: []
      })
   }

   return ( 
      <div className="container">
         <props.type className="list">{listItems}</props.type>
         <input onKeyDown={checkKey} type="text" ref={input} />
         <button onClick={appendItem}>submit</button>
         <button onClick={clearList}>clear</button>
      </div>
   );
}