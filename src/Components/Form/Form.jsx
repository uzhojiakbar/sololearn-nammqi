import React from 'react'
import { Container, FormCont, FormContainer, H1, Title, Input, Span, Btn, Subtext, A, Hrbox, Hr1, Subtext2, SubCard, Subcard1, Img } from './style'
import Google from '../../assets/google.png'

function Form() {
    return (
        <Container>
            <H1>Join our community of learners</H1>
            <FormContainer>
                <FormCont>
                    <Title>sign in</Title>
                    <label>
                        <Span>Name</Span>
                        <Input type="text" /><br />
                    </label>
                    <label >
                        <Span>email</Span><br />
                        <Input type="email" /><br />
                    </label>
                    <label >
                        <Span>password</Span><br />
                        <Input type="password" /><br />
                    </label>
                    <Btn>sign up</Btn>
                    <Subtext>This site is protected by reCAPTCHA and the Google <A>Privacy Policy</A> and <A>Terms of Service</A> apply.</Subtext>
                    <Hrbox>
                        <Hr1></Hr1>
                        <p style={{ color: '#747474' }}>or</p>
                        <Hr1></Hr1>
                    </Hrbox>
                    <SubCard>
                        <Subcard1>
                            <Img src={Google} alt="" />
                            <p>goole icon</p>
                        </Subcard1>
                        <Subcard1>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                                <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
                            </svg>
                            <p>apple</p>
                        </Subcard1>
                    </SubCard>
                    <Subtext2>Already have an account? <A>Log in</A></Subtext2>
                    <Subtext2>By signing up you agree to our <A>Terms of Use</A></Subtext2>
                </FormCont>
            </FormContainer>
        </Container>
    )
}

export default Form