import React, { useState } from "react";
import {
  Container,
  FormContainer,
  Title,
  InputContainer,
  Label,
  Input,
  SubmitButton,
  Form,
} from "../Register/styled";
function Login() {
  const [loginData, setLoginData] = useState({
    email: ",",
    password: "",
  });
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <FormContainer>
        <Title>Hisobga kirish</Title>
        <Form>
          <InputContainer>
            <Label>
              Email*
              <Input
                type="email"
                name="email"
                maxLength="254"
                required
                // value={formData.email}
                onChange={handleChange}
              />
            </Label>
          </InputContainer>

          <InputContainer>
            <Label>
              Password*
              <Input
                type="password"
                name="password"
                maxLength="128"
                minLength="1"
                required
                // value={formData.password}
                onChange={handleChange}
              />
            </Label>
          </InputContainer>
          <SubmitButton type="sumbit">Log in</SubmitButton>
        </Form>
      </FormContainer>
    </Container>
  );
}

export default Login;
