import * as React from "react";
import { Chart } from "react-google-charts";
import { connect } from "react-redux";
import {Progress} from 'reactstrap'

function Charts(props)
{

    console.log(props.tickets,4444)
    const high = props.tickets.filter(ticket => ticket.priority === 'High').length
    const medium = props.tickets.filter(ticket =>ticket.priority === 'Medium').length
    const low = props.tickets.filter(ticket => ticket.priority === 'Low').length
    const pendingTickets = props.tickets.filter(ticket => ticket.isPending)
    const completedTickets = props.tickets.filter(ticket => !ticket.isPending).length
    const percent=Math.round((completedTickets/props.tickets.length)*100)


    const data = []
        const Header = ["Departments", "Tickets", { role: "style" }]
        data.push(Header)
            props.departments.map(dept=>{
                
                    const temp = []
                    temp.push(`${dept.name}`)
                   temp.push(pendingTickets.filter(ticket=>(ticket.department.name? ticket.department.name : findDepartment(ticket.department).name) === dept.name).length)
                    temp.push("blue")
                    data.push(temp)
            })

    const findDepartment = (id) => {
        return this.props.departments.find(dept => dept._id === id)
   }
    return(
        <div className={"my-pretty-chart-container"}>
            <br/><br/>
        <div className="text-center">{percent}%</div>
        <Progress animated value={`${percent}` }/>
        <br/>
        <div className = "row">
            <Chart className = "col-md-8"
                width={'600px'}
                height={'600px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Priority', 'Tickets Per Department'],
                    ['High',high],
                    ['Medium',medium],
                    ['Low',low],
                ]}
                options={{
                    title: 'Ticket Priority',
                    is3D: true,
                }}
                rootProps={{ 'data-testid': '2' }}/>
            <div className= "col-md-4"><br/><br/><br/><br/>
            <Chart 
                chartType="Bar"
                width="100%"
                height="300px"
                data={data}
                options={{
                    chart: {
                        title: 'Tickets By Department',
                    }
                }}
                 />
            </div>
            </div></div>
        )
}

const mapStateToProps = ( state ) =>
{
    return({
        departments : state.departments,
        tickets : state.tickets
    })
}
export default connect(mapStateToProps)(Charts)