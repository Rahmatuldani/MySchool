import DataTable, { TableColumn } from "react-data-table-component";
import { UserType } from "../../../../store/user/types";
import { Button, Card, Container, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers, selectUsersIsLoading } from "../../../../store/user/selector";
import useState from "../../../../hooks/useState";
import LoadingComponent from "../../../../components/loading";
import { FaClipboardList, FaSortDown } from "react-icons/fa6";
import Alert from "../../../../utils/alert";
import { FaEdit } from "react-icons/fa";
import { NavigateFunction, useNavigate } from "react-router-dom";
import DetailUser from "../detail";
import { DeleteUsersFunction } from "../../../../store/user/action";
import { Dispatch } from "redux";
import { selectAuth } from "../../../../store/auth/selector";

function ListUsers() {
    const auth: UserType | null = useSelector(selectAuth);
    const users: UserType[] = useSelector(selectUsers);
    const loading: boolean = useSelector(selectUsersIsLoading);
    const navigate: NavigateFunction = useNavigate();
    const dispatch: Dispatch = useDispatch();
    const [filter, setFilter] = useState<string>('');
    const [showDetail, setShowDetail] = useState<boolean>(false);

    function handleDelete(user: UserType) {
        Alert({ 
            title: 'Delete user', 
            text: `Are you sure to delete <br/> <strong>${user.name}?</strong>`, 
            icon: 'warning', 
            cancelButton: true, 
            confirmText: 'Delete' 
        })
            .then((result) => {
                if (result.isConfirmed) {
                    DeleteUsersFunction(dispatch, user._id)
                        .then(result => {
                            Alert({
                                title: 'Success',
                                icon: 'success',
                                text: result
                            });
                        })
                        .catch(err => {
                            Alert({
                                title: 'Error',
                                icon: 'error',
                                text: err
                            });
                        });
                }
            });
    }

    function handleCloseDetail() {
        setShowDetail(false);
    }

    const columns: TableColumn<UserType>[] = [
        {
            name: 'Username',
            selector: row => row.username,
            sortable: true
        }, {
            name: 'Name',
            selector: row => row.name,
            sortable: true
        }, {
            name: 'Role',
            selector: row => row.role
        }, {
            name: 'Action',
            cell: (row) => (
                <div className="d-flex gap-1">
                    {auth?._id === row._id ? '' : (
                        <>
                            <OverlayTrigger
                                placement='top'
                                overlay={
                                    <Tooltip id='detailTooltip'>Details</Tooltip>
                                }
                            >
                                <Button variant='icon' className='btn-transparent-dark btn-datatable' onClick={() => setShowDetail(true)}>
                                    <FaClipboardList />
                                </Button>
                            </OverlayTrigger>
                            <DetailUser open={showDetail} handleClose={handleCloseDetail} data={row}/>
                            <OverlayTrigger
                                placement='top'
                                overlay={
                                    <Tooltip id='editTooltip'>Edit</Tooltip>
                                }
                            >
                                <Button variant='icon' className='btn-transparent-dark btn-datatable' onClick={() => navigate(`/Administrator/users/edit/${row._id}`)}>
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
                    )}
                </div>
            )
        }
    ];

    const filterUsers: UserType[] = users.filter((user) => 
        user.username.includes(filter) || 
        user.name.toLowerCase().includes(filter.toLowerCase())
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
                            data={filterUsers}
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

export default ListUsers;