import { Button, Card, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { LoginType } from "../store/auth/types";
import { LoginFunction } from "../store/auth/action";
import { UserType } from "../store/user/types";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "../store/user/selector";
import { Dispatch } from "redux";
import Alert from "../utils/alert";
import { Navigate, NavigateFunction, useNavigate } from "react-router-dom";
import { selectAuth, selectAuthIsLoading } from "../store/auth/selector";

function Login() {
    document.body.className = 'bg-primary';
    const user: UserType | null = useSelector(selectAuth);
    const users: UserType[] = useSelector(selectUsers);
    const navigate: NavigateFunction = useNavigate();
    const loading: boolean = useSelector(selectAuthIsLoading);
    const { handleSubmit, control, formState: { errors } } = useForm<LoginType>();
    const dispatch: Dispatch = useDispatch();

    const FormSubmit: SubmitHandler<LoginType> = function(data) {
        LoginFunction(dispatch, users, data)
            .then(() => {
                navigate('/');
            })
            .catch((error: string) => {
                Alert({
                    title: 'Error',
                    text: error,
                    icon: 'error'
                });
            });
    };

    if (user) {
        return <Navigate to='/' replace/>;
    }

    return (
        <div id='layoutAuthentication'>
            <div id='layoutAuthentication_content'>
                <main>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col lg={5}>
                                {/* <!-- Basic login form--> */}
                                <Card border='0' className='shadow-lg rounded-lg mt-5'>
                                    <Card.Header className='justify-content-center'>
                                        <h3 className='font-weight-light my-4'>Login</h3>
                                    </Card.Header>
                                    <Card.Body>
                                        {/* <!-- Login form--> */}
                                        <Form onSubmit={handleSubmit(FormSubmit)}>
                                            {/* <!-- Form Group (email address)--> */}
                                            <Controller
                                                control={control}
                                                name='_id'
                                                rules={{
                                                    required: 'NIP/NISN is required',
                                                }}
                                                defaultValue=''
                                                render={({ field }) => (
                                                    <Form.Group className='mb-2' id="inputId">
                                                        <Form.Label className='small mb-1'>NIP/NISN</Form.Label>
                                                        <Form.Control placeholder='Enter NIP/NISN' {...field} />
                                                        {errors._id && <span className='small text-danger'>{errors._id.message}</span>}
                                                    </Form.Group>
                                                )}
                                            />
                                            {/* <!-- Form Group (password)--> */}
                                            <Controller
                                                control={control}
                                                name='password'
                                                rules={{
                                                    required: 'Password is required',
                                                    minLength: { value: 6, message: 'Password length min 6 character' }
                                                }}
                                                defaultValue=''
                                                render={({ field }) => (
                                                    <Form.Group className='mb-2'>
                                                        <Form.Label className='small mb-1'>Password</Form.Label>
                                                        <Form.Control type='password' placeholder='Enter password' {...field} />
                                                        {errors.password && <span className='small text-danger'>{errors.password.message}</span>}
                                                    </Form.Group>
                                                )}
                                            />
                                            {/* <!-- Form Group (login box)--> */}
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
                            </Col>
                        </Row>
                    </Container>
                </main>
            </div>
            <div id='layoutAuthentication_footer'>
                <footer className='footer mt-auto footer-dark'>
                    <Container fluid>
                        <Row>
                            <Col md={6} className='small'>
                                Copyright &#xA9; Hospital App 2024
                            </Col>
                            <Col md={6} className='text-md-right small'>
                                <a href='#!'>Privacy Policy</a>
                                &#xB7;
                                <a href='#!'>Terms &amp; Conditions</a>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </div>
        </div>
    );
}

export default Login;