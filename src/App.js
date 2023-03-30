import Login from './components/Auth/Login'
import Estudiante from './components/Auth/MenuEstudiante'
import { useState, useEffect } from 'react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { supabase } from './supabaseClient'

function App() {

  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      console.log("session===>", session)
      console.log("onAuthStateChange")
    })
  }, [])

  return (
    <div>
      {session ? (
        <Estudiante />
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;