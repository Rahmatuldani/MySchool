import { Button, Card, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { UserType } from "../../../../store/user/types";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers, selectUsersIsLoading } from "../../../../store/user/selector";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { CreateUsersFunction } from "../../../../store/user/action";
import Alert from "../../../../utils/alert";
import { Dispatch } from "redux";

function UserForm() {
    const users: UserType[] = useSelector(selectUsers);
    let data: UserType | undefined = undefined;
    const { id } = useParams();
    if (id) {
        data = users.find(user => user._id === id);
    }
    const loading: boolean = useSelector(selectUsersIsLoading);
    const navigate: NavigateFunction = useNavigate();
    const dispatch: Dispatch = useDispatch();
    const { handleSubmit, control, formState: { errors } } = useForm<UserType>();

    const FormSubmit: SubmitHandler<UserType> = (data) => {
        CreateUsersFunction(dispatch, data)
            .then(result => {
                Alert({
                    title: 'Success',
                    text: result,
                    icon: 'success'
                }).then(result => {
                    if (result.isConfirmed) {
                        navigate('/Administrator/users');
                    }
                });
            })
            .catch(err => {
                Alert({
                    title: 'Error',
                    text: err,
                    icon: 'error'
                });
            });
    };

    return (
        <Container className='mt-n10'>
            <Card className='mb-4'>
                <Card.Header>Add</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit(FormSubmit)}>
                        <Row className='mb-3'>
                            <Controller
                                control={control}
                                name='username'
                                defaultValue={data?.username ?? ''}
                                rules={{
                                    required: 'Username is required',
                                    pattern: { value: /^\d+$/, message: 'Username must be a number' }
                                }}
                                
                                render={({ field }) => (
                                    <Form.Group as={Col} className='mb-2' controlId='inputUsername'>
                                        <Form.Label className='small mb-1'>Username</Form.Label>
                                        <Form.Control placeholder='Enter username' {...field} />
                                        {errors.username && <span className='small text-danger'>{errors.username.message}</span>}
                                    </Form.Group>
                                )}
                            />
                            <Controller
                                control={control}
                                name='name'
                                rules={{
                                    required: 'Name is required',
                                }}
                                defaultValue={data?.name ?? ''}
                                render={({ field }) => (
                                    <Form.Group as={Col} className='mb-2' controlId='inputName'>
                                        <Form.Label className='small mb-1'>Name</Form.Label>
                                        <Form.Control placeholder='Enter name' {...field} />
                                        {errors.name && <span className='small text-danger'>{errors.name.message}</span>}
                                    </Form.Group>
                                )}
                            />
                        </Row>
                        <Row className='mb-3'>
                            <Controller
                                control={control}
                                name='gender'
                                defaultValue={data?.gender ?? 'Male'}
                                render={({ field: { value, onChange } }) => (
                                    <Form.Group as={Col} className='mb-2' controlId='inputGender'>
                                        <Row>
                                            <Form.Label column sm={2} className='small mb-1'>Gender</Form.Label>
                                            <Col sm={10}>
                                                <Form.Check
                                                    label='Male'
                                                    name='gender'
                                                    type='radio'
                                                    id='inline-radio-1'
                                                    checked={value === 'Male'}
                                                    onChange={() => onChange('Male')}
                                                />
                                                <Form.Check
                                                    label='Female'
                                                    name='gender'
                                                    type='radio'
                                                    id='inline-radio-2'
                                                    checked={value === 'Female'}
                                                    onChange={() => onChange('Female')}
                                                />
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                )}
                            />
                            <Controller
                                control={control}
                                name='address'
                                rules={{
                                    required: 'Address is required',
                                }}
                                defaultValue={data?.address ?? ''}
                                render={({ field }) => (
                                    <Form.Group as={Col} className='mb-2' controlId='inputAddress'>
                                        <Form.Label className='small mb-1'>Address</Form.Label>
                                        <Form.Control placeholder='Enter address' {...field} />
                                        {errors.address && <span className='small text-danger'>{errors.address.message}</span>}
                                    </Form.Group>
                                )}
                            />
                        </Row>
                        <Row className='mb-3'>
                            <Controller
                                control={control}
                                name='role'
                                rules={{
                                    required: 'Role is required'
                                }}
                                defaultValue={data?.role ?? ''}
                                render={({ field }) => (
                                    <Form.Group as={Col} className='mb-2' controlId='inputRole'>
                                        <Form.Label className='small mb-1'>Role</Form.Label>
                                        <Form.Select aria-label='select-role' {...field}>
                                            <option value='' disabled> -- Select Role -- </option>
                                            <option value='Administrator'>Administrator</option>
                                            <option value='Staff'>Staff</option>
                                            <option value='Teacher'>Teacher</option>
                                            <option value='Student'>Student</option>
                                        </Form.Select>
                                        {errors.role && <span className='small text-danger'>{errors.role.message}</span>}
                                    </Form.Group>
                                )}
                            />
                            <Controller
                                control={control}
                                name='phone'
                                rules={{
                                    required: 'Phone is required',
                                }}
                                defaultValue={data?.phone ?? ''}
                                render={({ field }) => (
                                    <Form.Group as={Col} sm={6} className='mb-2' controlId='inputPhone'>
                                        <Form.Label className='small mb-1'>Phone</Form.Label>
                                        <Form.Control placeholder='Enter phone number' {...field} />
                                        {errors.phone && <span className='small text-danger'>{errors.phone.message}</span>}
                                    </Form.Group>
                                )}
                            />
                        </Row>
                        <Form.Group className='d-flex align-items-center justify-content-end mt-4 mb-0'>
                            <Button type='submit' variant='primary' disabled={loading}>
                                {loading ? (
                                    <Spinner animation='border' size='sm' />
                                ) : 'Submit'}
                            </Button>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default UserForm;