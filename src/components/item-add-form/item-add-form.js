import React from "react";
import './item-add-form.css'
class ItemAddForm extends React.Component{

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    };
    onSubmit = (e) => {
        e.preventDefault()
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ' '
        })
    };

   render() {
       return(
           <form className={'item-add-form d-flex'}
                 onSubmit={this.onSubmit}
           >
               <input className={'form-control'}
                      onChange={this.onLabelChange}
                      placeholder={'What needs to be done'}
                      value={this.state.label}
                      type="text"/>
               <button
                       className={'btn btn-outline-secondary'}>Add Item
               </button>
           </form>
       )
   }

}
export default ItemAddForm