/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import Alert from "../../../../utils/alert";
import { Dispatch } from "redux";
import { TeacherType } from "../../../../store/teacher/types";
import { selectTeachers, selectTeachersIsLoading } from "../../../../store/teacher/selector";
import { TeacherFields } from "../../../../store/shared/type";
import { CreateTeacherFunction } from "../../../../store/teacher/action";

function TeacherAdd() {
    const teachers: TeacherType[] = useSelector(selectTeachers);
    let data: TeacherType | undefined = undefined;
    const { id } = useParams();
    if (id) {
        data = teachers.find(teacher => teacher._id === id);
    }
    const loading: boolean = useSelector(selectTeachersIsLoading);
    const navigate: NavigateFunction = useNavigate();
    const dispatch: Dispatch = useDispatch();
    const { handleSubmit, control, formState: { errors } } = useForm<TeacherType>();

    const FormSubmit: SubmitHandler<TeacherType> = (data) => { 
        CreateTeacherFunction(dispatch, data)
            .then(result => {
                Alert({
                    title: 'Success',
                    text: result,
                    icon: 'success'
                }).then(result => {
                    if (result.isConfirmed) {
                        navigate('/Administrator/teachers');
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

    function fieldDatalist() {
        const list: any[] = [];
        TeacherFields.forEach((field) => list.push(
            <option key={field} value={field}/>
        ));
        return <datalist id='fieldList'>{list}</datalist>;
    }

    return (
        <Container className='mt-n10'>
            <Card className='mb-4'>
                <Card.Header>Add</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit(FormSubmit)}>
                        <Row className='mb-3'>
                            <Controller
                                control={control}
                                name='nip'
                                defaultValue={data?.nip ?? ''}
                                rules={{
                                    required: 'NIP is required',
                                    pattern: { value: /^\d+$/, message: 'NIP must be a number' }
                                }}
                                
                                render={({ field }) => (
                                    <Form.Group as={Col} className='mb-2' controlId='inputNip'>
                                        <Form.Label className='small mb-1'>NIP</Form.Label>
                                        <Form.Control placeholder='Enter NIP' {...field} />
                                        {errors.nip && <span className='small text-danger'>{errors.nip.message}</span>}
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
                                name='field'
                                rules={{
                                    required: 'Field is required',
                                }}
                                defaultValue={data?.field ?? ''}
                                render={({ field }) => (
                                    <Form.Group as={Col} className='mb-2' controlId='inputField'>
                                        <Form.Label className='small mb-1'>Field</Form.Label>
                                        <Form.Control list='fieldList' placeholder='Enter field' {...field} />
                                        {fieldDatalist()}
                                        {errors.field && <span className='small text-danger'>{errors.field.message}</span>}
                                    </Form.Group>
                                )}
                            />
                        </Row>
                        <Row className='mb-3'>
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

export default TeacherAdd;