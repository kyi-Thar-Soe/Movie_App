import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './LoginPage.css'
import { Card,CardBody,Form, FormGroup,Button} from 'reactstrap'
import { useNavigate } from 'react-router';
import { ApiCall } from '../../ApiService/ApiCall'
import { setToken } from '../../Storage/Storage'

export default function LoginPage() {
    const [isLogin,setIsLogin] = useState(true);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onsubmit =async (data) => {
        if (data){
            const url = isLogin? 'http://localhost:4000/login' : 'http://localhost:4000/register';
            const tempData = await ApiCall(url, 'post', data)
            setToken(tempData?.data.accessToken);
            navigate('/home');
          }
    };
    return (
        <div className=' container-fluid login-div'>
        <div className="row login">
            <Card className='login-card'>
            <CardBody className='login-body'>
              <h3 className="mb-4 mt-3">{isLogin? "Login" : "Sign Up"}</h3>

              <Form onSubmit={handleSubmit(onsubmit)}>
                <FormGroup>
                <label>Email</label><br/>
                <input type="email" className="form-control textfield" {...register('email',{ required: true })}/><br/>
                {errors.email && (
                <span className="text-danger">Email is required</span>
                )}
                </FormGroup>
                <FormGroup className='form-group'>
                <label>Password</label><br/>
                <input type="password" className="form-control textfield"  {...register('password',{ required: true })}/>
                {errors.password && (
                <span className="text-danger">Password is required</span>
                )}
                </FormGroup>
                <Button type="submit" className="btn w-100 mb-3 mt-4" color="primary">
                {isLogin ? "Login" : "Sign Up"}
                </Button>
                {isLogin ? <p className="text-primary  mt-2" onClick={()=>setIsLogin(false)}>Not register yet?</p> :
                <p className="text-primary  mt-2" onClick={()=>setIsLogin(true)}>Login</p> }
            </Form>

             </CardBody>
        </Card>
        </div>
        </div>
    )
}