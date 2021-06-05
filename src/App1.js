import React,{Component} from 'react';
import { RedocStandalone } from 'redoc';

// const App1 = (props) => {

//     console.log('we have props equals to somethings');
    


//     //console.log({this.props.value});    

    
//     return (

            // <RedocStandalone
            // specUrl= {this.props.value}
            // options={{
            //     nativeScrollbars: false,
            //     theme: { colors: { primary: { main: '#dd5522' } } },
            // }}
            // />
//     );
// }

export default class App1 extends Component{
    constructor(props){
        super(props);
    }
    render() {

        return (
        
            <RedocStandalone specUrl= {this.props.value} 
            options={{
                nativeScrollbars: true,
                theme: { colors: { primary: { main: '#dd5522' } } },
                // scroll-behavior: smooth
            }}
            
            />


            // <RedocStandalone
            //     specUrl= 'http://petstore.swagger.io/v2/swagger.json'
            //     options={{
            //         nativeScrollbars: true,
            //         theme: { colors: { primary: { main: '#dd5522' } } },
            //         scrollYOffset : 30
            //       }}
            // />
        
        // <div className = "App1">
        //     Child value 1 is <span>{this.props.value}</span>
        //     <redoc spec-url='http://petstore.swagger.io/v2/swagger.json'></redoc>  
        // </div>
        );
    }
}

// export default App1;