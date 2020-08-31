// let visibility = false;
// const toggleVisibility = ()=>{
//     visibility = !visibility;
//     renderApp();
// }
// var appRoot = document.getElementById('app');
// const renderApp = ()=> {
//     var button = ''
//   const template = (
//   <div>
//       <h1>Visiblility Toggle</h1>
//       <button onClick={toggleVisibility}>{ visibility ? 'hide Details' : 'Show details'}</button>
//       {visibility ? <p> details</p> : ''}
        
//   </div>

//   )
//   ReactDOM.render(template, appRoot);
// }
// renderApp();

class VisibleToggle extends React.Component {
   constructor(props) {
        super(props);
      this.state= {
          visibility :false
      }
       this.toggleVisibility = this.toggleVisibility.bind(this);
   }

    toggleVisibility () {
    this.setState((prevState)=>{
        return  {
            'visibility':!prevState.visibility
        };
     });
    }
    render() {
        return(
            <div>
         <h1>Visiblility Toggle</h1>
      <button onClick={this.toggleVisibility}>{ this.state.visibility ? 'hide Details' : 'Show details'}</button>
      {this.state.visibility ? <p> details</p> : ''}
        </div> 

        )
    }

}
ReactDOM.render(<VisibleToggle/>, document.getElementById('app'));