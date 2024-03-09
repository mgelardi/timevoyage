import axios from 'axios';

const Page = ({ initialData }) => {
    // Your component code here
    return (
        <div>
            <h1>Data from MySQL Database</h1>
            <ul>
                {initialData.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export async function getServerSideProps(context) {
    // Make GET request to Express server endpoint
    const response = await axios.get('https://timevoyagedb.crm0qiaemqmq.eu-west-1.rds.amazonaws.com/api/data');

    // Extract data from response
    const data = response.data;

    // Return data as props
    return {
        props: {
            initialData: data
        }
    };
}

export default Page;
