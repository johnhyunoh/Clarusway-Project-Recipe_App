import { Table } from 'reactstrap';

const tableData = [{id:1,name:'david',lname:'smith'}, {id:2,name:'john',lname:'kim'}, {id:3,name:'kevin', lname:'junior'}]

const About=()=>{
    return(
        <div className='container'>
            <div className='row'>
                <div className='column'>
                <Table>
                <thead>
                    <tr>
                        <th>
                        #
                        </th>
                        <th>
                        First Name
                        </th>
                        <th>
                        Last Name
                        </th>
                        <th>
                        Username
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map(i=> {
                            return (
                                <tr>
                                    <th scope="row">
                                        {i.id}
                                    </th>
                                    <td>
                                        
                                        {/* This is for emailing to by click */}
                                        {/* <a href={`mailto:${emailhere}@gmail.com`}>{i.name}</a> */}

                                        {i.name}
                                    </td>
                                    <td>
                                        {i.lname}
                                    </td>
                                    <td>
                                        {i.name + i.lname}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                </Table>
                </div>
            </div>
        </div>
    )
}
export default About;