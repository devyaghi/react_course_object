import React from "react";
class Car extends React.Component{

    render() {
        return (<h1>Car type is {this.props.car_info.car_type} ,
            color is  {this.props.car_info.color} , production year is {this.props.car_info.prod_year} </h1>)
    }

}

export default Car;