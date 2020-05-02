import React from 'react'

export default function List(props) {
   let input = React.useRef('');
   let [state,setState] = React.useState({
      items: props.items
   });

   let listItems = state.items.map(item => <li>{item}</li>);

   let checkKey = event => {
      if (event.key === "Enter") {
         appendItem(input.current.value);
      }
   }
   
   let appendItem = value => {
      input.current.value = "";
      
      if (value <= 0 || value > state.items.length) return;

      if (!isNaN(value)) {
         state.items.splice(value-1,1);

         setState({
            items: state.items
         });

         return;
      }

      if (value === "*") {
         clearList();
         return;
      }

      state.items.push(value);
      
      setState({
         items: state.items
      });
   }

   let clearList = () => {
      setState({
         items: []
      });
   }

   return ( 
      <div className="container">
         <props.type className="list">{listItems}</props.type>
         <input onKeyDown={checkKey} type="text" ref={input} />
         <button onClick={()=> appendItem(input.current.value)}>submit</button>
         <button onClick={clearList}>clear</button>
      </div>
   );
}