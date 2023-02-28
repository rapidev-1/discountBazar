import { Table } from 'antd';
const columns = [
    {
        title: 'Properties',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <h3>{text}</h3>,
    },

    {
        title: 'Product 1',
        dataIndex: 'm1',
        key: 'product1',
    },
    {
        title: 'Product 2',
        dataIndex: 'm2',
        key: 'product2',
        // render: (_, { tags }) => (
        //     <>
        //         {tags.map((tag) => {
        //             let color = tag.length > 5 ? 'geekblue' : 'green';
        //             if (tag === 'loser') {
        //                 color = 'volcano';
        //             }
        //             return (
        //                 <Tag color={color} key={tag}>
        //                     {tag.toUpperCase()}
        //                 </Tag>
        //             );
        //         })}
        //     </>
        // ),
    }
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        m1: 'false',
        m2: 'true',
    },
    {
        key: '2',
        name: 'Jim Green',
        m1: 'true',
        m2: 'false',
    },
    {
        key: '3',
        name: 'Joe Black',
        m1: 'false',
        m2: 'true',
    },
    {
        key: '1',
        name: 'John Brown',
        m1: 'true',
        m2: 'false',
    },
    {
        key: '2',
        name: 'Jim Green',
        m1: 'false',
        m2: 'true',
    },
    {
        key: '3',
        name: 'Joe Black',
        m1: 'true',
        m2: 'false',
    },
];
const CompareItems = () => <Table columns={columns} dataSource={data} pagination={false} />;
export default CompareItems;