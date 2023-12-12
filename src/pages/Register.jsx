import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Logo, FormRow } from '../components';

const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <FormRow type='text' name='name' defaultValue='john'/>
        <FormRow type='text' name='name' defaultValue='john'/>
        <FormRow type='text' name='name' defaultValue='john'/>
        <FormRow type='text' name='name' defaultValue='john'/>
        <FormRow type='text' name='name' defaultValue='john'/>

        <h4>Register</h4>
        
        <button className='btn btn-block'>Submit</button>
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
