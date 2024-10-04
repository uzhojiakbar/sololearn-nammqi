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
import axios from "axios";
function Login() {
  const [loading, setLoading] = useState(0);

  const [loginData, setLoginData] = useState({
    username: ",",
    password: "",
  });
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const onLogin = async (e) => {
    e.preventDefault();
    setLoading(1);

    const requestData = {
      username: loginData.username,
      password: loginData.password,
    };

    try {
      const response = await axios.post(
        "https://solonammqi.pythonanywhere.com/account/login/",
        requestData
      );
      setLoading(0);
      // notify("ok", "Hisobga kirildi.");
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    setLoading(0);
  };

  return (
    <>
      <Container>
        <FormContainer>
          <Title>Hisobga kirish</Title>
          <Form onSubmit={onLogin}>
            <InputContainer>
              <Label>
                Foydaluvchi nomi *
                <Input
                  type="text"
                  name="username"
                  maxLength="254"
                  required
                  // value={formData.email}
                  onChange={handleChange}
                />
              </Label>
            </InputContainer>
            <br />

            <InputContainer>
              <Label>
                Password *
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
      {loading ? (
        <div className="loaderWindow">
          <div className="loader"></div>
        </div>
      ) : (
        <> </>
      )}
    </>
  );
}

export default Login;
