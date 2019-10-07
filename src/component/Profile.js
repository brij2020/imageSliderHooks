import React, { Component } from 'react'

export default class Profile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            user:{
                  "gender": "",
                  "name": {
                    "title": "Ms",
                    "first": "",
                    "last": ""
                  },
                  "location": {
                    "street": {
                      "number": 5320,
                      "name": "Strand Road"
                    },
                    "city": "Athenry",
                    "state": "Cavan",
                    "country": "Ireland",
                    "postcode": 27896,
                    "coordinates": {
                      "latitude": "21.0084",
                      "longitude": "7.2472"
                    }
                  },
    
                  "dob": {
                    "date": "1969-05-19T02:59:24.521Z",
                    "age": 50
                  },
                  "registered": {
                    "date": "2009-12-18T00:31:50.144Z",
                    "age": 10
                  },
                  "phone": "071-449-7617",
                  "cell": "081-558-4877",
                  "picture": {
                    "large": "https://randomuser.me/api/portraits/women/16.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/16.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/16.jpg"
                  }
                }
              
        }

        
        
    }

    UNSAFE_componentWillMount() {

    }


    UNSAFE_componentWillReceiveProps(nextPorps){
        let user = nextPorps.data.results[0]
        this.setState({

            user: { ...this.state.user,
            "gender": user.gender,
            "name":user.name,
            "dob":user.dob,
            "phone": user.phone,
            "picture": user.picture
          }
        })
    }

    componentDidMount() {

    }
    componentWillUnmount() {

    }


    render() {
        const {user } = this.state

        console.log("user",user)
        return (
            <div className="card">
            <img src={user.picture.large} alt="John" style={{"width":"100%"}} />
            <h1>{`${user.name.first}  ${user.name.last}`}</h1>
            <address>
                {
                    `Address:${user.location.street.number}-${user.location.street.name}
                    ,${user.location.city}
                    ,${user.location.state}
                    ,${user.location.country}
                    `
                }

            </address>
            <p>Harvard University</p>
            <a href="#"><i className="fa fa-dribbble"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-facebook"></i></a>
            <p><button>Contact</button></p>
          </div>
        )
    }
}
