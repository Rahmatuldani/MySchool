import { Button, Card, Container, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectTeachersIsLoading, selectTeachers } from "../../../../store/teacher/selector";
import LoadingComponent from "../../../../components/loading";
import DataTable, { TableColumn } from "react-data-table-component";
import useState from "../../../../hooks/useState";
import { TeacherType } from "../../../../store/teacher/types";
import { FaClipboardList, FaSortDown } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";

function TeacherList() {
    const teachers: TeacherType[] = useSelector(selectTeachers);
    const loading: boolean = useSelector(selectTeachersIsLoading);
    const [filter, setFilter] = useState<string>('');

    function handleDelete(data: TeacherType) {
        console.log(data);
        
    }

    const columns: TableColumn<TeacherType>[] = [
        {
            name: 'NIP',
            selector: row => row.nip,
            sortable: true
        }, {
            name: 'Name',
            selector: row => row.name,
            sortable: true
        }, {
            name: 'Field',
            selector: row => row.field
        }, {
            name: 'Action',
            cell: (row) => (
                <div className="d-flex gap-1">
                    <>
                        <OverlayTrigger
                            placement='top'
                            overlay={
                                <Tooltip id='detailTooltip'>Details</Tooltip>
                            }
                        >
                            <Button variant='icon' className='btn-transparent-dark btn-datatable'>
                                <FaClipboardList />
                            </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement='top'
                            overlay={
                                <Tooltip id='editTooltip'>Edit</Tooltip>
                            }
                        >
                            <Button variant='icon' className='btn-transparent-dark btn-datatable'>
                                <FaEdit />
                            </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement='top'
                            overlay={
                                <Tooltip id='deleteTooltip'>Delete</Tooltip>
                            }
                        >
                            <Button variant='icon' className='btn-transparent-dark btn-datatable' onClick={() => handleDelete(row)}>
                                <FiTrash2 />
                            </Button>
                        </OverlayTrigger>
                    </>
                </div>
            )
        }
    ];

    const filterTeachers: TeacherType[] = teachers.filter((teacher) => 
        teacher.nip.toString().includes(filter) || 
        teacher.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <Container className="mt-n10">
            <Card className='mb-4 card-header-actions'>
                <Card.Header>
                    List
                    <Form.Control style={{ maxWidth: '400px' }} placeholder='Search' onChange={(e) => setFilter(e.target.value)} />
                </Card.Header>
                <Card.Body>
                    {loading ? (
                        <LoadingComponent/>
                    ) : (
                        <DataTable
                            columns={columns}
                            data={filterTeachers}
                            pagination
                            sortIcon={<FaSortDown/>}
                            responsive
                            striped
                            highlightOnHover
                        />
                    )}
                </Card.Body>
            </Card>
        </Container>
    );
}

export default TeacherList;