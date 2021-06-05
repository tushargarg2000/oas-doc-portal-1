import React, { Component } from 'react';
import './App.css'
import SwaggerUI from 'swagger-ui';
import Config from './organization_config.json';
import Sidebar from './Sidebar.js';
import Sidebar1 from './Sidebar1';
import App1 from './App1';
import '../node_modules/swagger-ui/dist/swagger-ui.css'
import {RedocStandalone} from 'redoc';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        organizationConfig: null,
        definitionList: null,
        definitionLink: "https://petstore3.swagger.io/api/v3/openapi.json"
      }
      this.updateDefinitionLink = this.updateDefinitionLink.bind(this)
    }

  componentWillMount() {
    this.setState({
      organizationConfig: Config.orgData,
    })
  }

  componentDidUpdate() {
    
    // <RedocStandalone
    //         specUrl= {this.state.definitionLink}
    //         options={{
    //             nativeScrollbars: true,
    //             theme: { colors: { primary: { main: '#dd5522' } } },
    //         }}
    // />


    SwaggerUI({
      domNode: document.getElementById("api-data"),
      url: this.state.definitionLink
    })
  }



  // swaggerhub(inputMethod, inputResource, inputParams) {
    
  //   let url = ""
  //   if (inputParams) {
  //     url = "https://api.swaggerhub.com/apis/" + inputResource + "?" + inputParams
  //   } else {
  //     url = "https://api.swaggerhub.com/apis/" + inputResource
  //   }
    
  //   return fetch(url, {
  //       method: inputMethod
  //   }).then(response => {
  //     if (response.ok) {
  //       return response.json()
  //     } throw new Error('There was an issue requesting the API')
  //   }).then(json => {
  //     return json
  //   })
  // }

  // getOrganizationData(organization) {
    
  //   let inputParams = "page=0&limit=10&sort=NAME&order=ASC"
  //   let inputResource = organization;
  
  //   this.swaggerhub('GET', inputResource, inputParams).then(response => {
  //     this.setState({
  //       definitionList: response.apis
  //     })
  //   })
  // }

  updateDefinitionLink(newLink) {
    console.log("Hurrah we have got insde the update Definition Link");
    console.log(newLink);
    this.setState({
      definitionLink: newLink
      // console.log(definitionLink);
    })
    
  }

  
  render() {
    return (
      <div className="App">
        
        {/* <Sidebar 
          organizationConfig={this.state.organizationConfig}
          definitionList={this.state.definitionList}
          updateDefinitionLink={this.updateDefinitionLink}
          getOrganizationData={this.getOrganizationData}
        /> */}
        <Sidebar1
          updateDefinitionLink = {this.updateDefinitionLink}
        />
        {/* <App1 definition = {this.state.definitionLink} /> */}
        {/* <App1 />   */}
        
        <App1 value= {this.state.definitionLink} />
        <div id="api-data" />
        
      </div>
        
    );
  }
}

export default App;