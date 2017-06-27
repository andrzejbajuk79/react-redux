/**
 * Created by abajuk on 27.06.2017.
 */
import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
    constructor(){
        super();
        this.state = {
            newPerson :{}
        }
    }
    

    handleSubmit(e){
        if((this.refs.name.value === '') ||
            (this.refs.secondName.value === '')) {

            alert('Uzupelnic pola');
        } else {
            this.setState({ newPerson : {
                id :uuid.v4(),
                first: this.refs.name.value,
                last : this.refs.secondName.value,
                job: this.refs.job.value

            }}, function(){
            console.log(this.state);
            this.refs.first.value = '';
            this.refs.last.value = '';
            this.props.addPerson(this.state.newPerson);

            });
        }
        e.preventDefault();
    }

 render() {
     let jobOptions = this.props.job.map(job => {return <option key={job} value={job}>{job}</option>});
    return (
      <div>
          <form onSubmit = { this.handleSubmit.bind(this)}>
              <div>
                  <label>Imie</label><br/>
                  <input type="text" ref='first' />
               </div>
              <div>
                  <label>Nazwisko</label><br/>
                  <input type="text" ref='last' />
               </div>
              <div>
                  <label>Stanowisko</label><br/>
                  <input type="text" ref='job' />
              </div>
              <br/>
              <input type="submit" value="DODAJ"/>
          </form>
      </div>
    );
  }
}

export default AddProject;