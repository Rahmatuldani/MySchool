import { Card, Container, Form } from "react-bootstrap";
import useState from "../../../../hooks/useState";
// import LoadingComponent from "../../../../components/loading";

function List() {
    const [filter, setFilter] = useState<string>('');

    return (
        <Container className="mt-n10">
            <Card className='mb-4 card-header-actions'>
                <Card.Header>
                    List
                    <Form.Control style={{ maxWidth: '400px' }} placeholder='Search' onChange={(e) => setFilter(e.target.value)} />
                </Card.Header>
                <Card.Body>
                    Body
                    {/* {loading ? (
                        <LoadingComponent />
                    ) : (
                        <DataTable
                            columns={columns}
                            data={filterUsers}
                            pagination
                            sortIcon={<FaSortDown />}
                            responsive
                            striped
                            highlightOnHover
                        />
                    )} */}
                </Card.Body>
            </Card>
        </Container>
    );
}

export default List;