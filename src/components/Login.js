import { Form } from "react-bootstrap";
import icon1 from "../assets/Noffein.png"

const Login =()=>{
    return(
      <div className='mainlogin'>
        <table>
          <tr>
          <td><img src={icon1} className='icon'></img></td>
          <td>
          <Form className='loginform'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>   
          </Form>
          </td>
          </tr>
        </table>
        </div>
    )
}

export default Login;