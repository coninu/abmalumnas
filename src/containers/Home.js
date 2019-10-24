import React from 'react'
import Header from '../components/Header/Header'

class Home extends React.Component {
    state = {
        students: [
            {firstName: 'Marixa', lastName: 'Balli', age:'40', comission: 'sexta', email:'cachaca@gmail.com'},
            {firstName: 'Rodrigo', lastName: 'El Potro', age:'40', comission: 'sexta', email:'soycordobes@gmail.com'},
        ]
    }

    render(){
        return(
            <React.Fragment>
                <Header> </Header>
                <h3> Holi</h3>
                {this.state.students.map((e,i) => <p key={i}> {`${e.firstName} ${e.lastName}`} </p>)}
            </React.Fragment>
        )
    }
}

export default Home