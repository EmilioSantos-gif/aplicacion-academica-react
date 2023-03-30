import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import './Login.css';
import { supabase } from '../../supabaseClient'

function Login(props) {

    return (
        <div className='login-container'>
            <Auth
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
            />
        </div>
    );
}

export default Login;
