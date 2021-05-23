import React from 'react'
import {Table} from 'antd'
import 'antd/dist/antd.css'
import "./table.css"

const Tabler = () => {
      
    
    
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
      },
      {
        title: 'Physics Score',
        dataIndex: 'physics',
        sorter: {
          compare: (a, b) => a.physics - b.physics,
          multiple: 3,
        },
      },
      {
        title: 'Maths Score',
        dataIndex: 'math',
        sorter: {
          compare: (a, b) => a.math - b.math,
          multiple: 2,
        },
      },
      {
        title: 'Chemistry Score',
        dataIndex: 'chem',
        sorter: {
          compare: (a, b) => a.chem - b.chem,
          multiple: 1,
        },
      },
    ];

    const data = [
        
      {
        key: '1',
        name: 'Akash',
        physics: 98,
        math: 60,
        chem: 70,
      },
      {
        key: '2',
        name: 'Joshita',
        physics: 98,
        math: 66,
        chem: 89,
      },
      {
        key: '3',
        name: 'Satvik',
        physics: 98,
        math: 90,
        chem: 70,
      },
      {
        key: '4',
        name: 'John',
        physics: 88,
        math: 99,
        chem: 89,
      },
      {
        key: '4',
        name: 'Ruthvik',
        physics: 88,
        math: 99,
        chem: 89,
      },
      
    ];
    
    function onChange(pagination, filters, sorter, extra) {
      console.log('params', pagination, filters, sorter, extra);
    }





    return (
        
            <Table className="table table-responsive tb" columns={columns} dataSource={data}  />
     
    )
}

export default Tabler
