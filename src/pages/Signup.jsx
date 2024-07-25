import React, { useState } from 'react'
import Helmet from '../components/Helmet'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/login.css'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'
import { auth } from '../firebase.config'
import { toast } from 'react-toastify'
import {storage} from '../firebase.config';
import { setDoc, doc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();
  const signup = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {


      const useCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = await useCredential.user;

      const storageRef = ref(storage, `images/${username}`)
      const uploadTask = uploadBytesResumable(storageRef, file);
      

      uploadTask.on(
        (error)=>{
        toast.error(error.message)
      },
      ()=>{
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            await updateProfile(user,{
            displayName: username,
            photoURL: downloadURL,
          });
          await setDoc(doc(db,"users", user.uid),{
            uid: user.uid,
            displayName:username,
            email,
            photoURL: downloadURL,
          });
        });
      }
      );
      console.log(user);

      setLoading(false)
      toast.success('Account created')
      navigate('/login')

    } catch (error) {
      setLoading(false)
      toast.error('something went wrong');
    }
  }
  return (
    <Helmet title='signup'>
      <section>
        <Container>
          <Row>{
              loading? (<Col lg='12' className='textx-center'><h5 className='fw-bold'>Loading...</h5></Col>
              ):(
            
            <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold mb-4'>Signup</h3>

              <Form className='auth__form' onSubmit={signup}>

                <FormGroup className='form__group'>
                  <input type="username" placeholder='Enter your username'
                    value={username} onChange={e => setUsername(e.target.value)} />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type="email" placeholder='Enter your email'
                    value={email} onChange={e => setEmail(e.target.value)} />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type="password" placeholder='Enter your password'
                    value={password} onChange={e => setPassword(e.target.value)} />
                </FormGroup>
{/* 
                <FormGroup className='form__group'>
                  <input type="file"
                    onChange={e => setFile(e.target.files[0])} />
                </FormGroup> */}


                <button type='submit' className='buy__btn auth__btn login__btn'>Create an Account</button>
                <p>Already have an account? <Link to='/login'>Login to Account</Link></p>


              </Form>

            </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Signup
