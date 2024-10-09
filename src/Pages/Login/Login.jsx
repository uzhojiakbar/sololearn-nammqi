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
import { useNavigate } from "react-router-dom";
import { useGetProfile, useSignIn } from "../../Hooks/RegisterHook";
import toast from "react-hot-toast";

function Login() {
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const getProfile = (username) => {
    useGetProfile(username);
  };

  const notify = (type = "ok", text) => {
    if (type === "ok") {
      toast.success(text || "Tayyor");
    } else if (type === "err") {
      toast.error(text || "Xato");
    } else if (type === "wait") {
      return toast.loading(text || "Kuting...");
    }
  };

  const nav = useNavigate();

  const { mutate, isLoading } = useSignIn(
    () => {
      nav("/profile/"); // Muvaffaqiyatli bo'lganda navigatsiya qilish
    },
    (error) => {
      if (
        error?.response?.data?.non_field_errors[0] ===
        "Invalid credentials or unverified account."
      ) {
        toast.error("Hisob topilmadi.");
      } else {
        toast.error(error.response?.data?.detail || "Qandaydur xatolik."); // Xatoni ko'rsatish
      }
    }
  );

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const onLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const requestData = {
      username: loginData.username || "",
      password: loginData.password || "",
    };

    try {
      await mutate(requestData); // Just call login
    } catch (error) {
      setLoading(0);
      console.error("Login error: ", error);
    }
  };

  return (
    <>
      <Container>
        <FormContainer>
          <Title>Sign in</Title>
          <Form onSubmit={onLogin}>
            <InputContainer>
              <Label>
                Foydaluvchi nomini kiriting*
                <Input
                  type="text"
                  name="username"
                  maxLength="254"
                  required
                  value={loginData.username}
                  onChange={handleChange}
                />
              </Label>
            </InputContainer>
            <br />
            <InputContainer>
              <Label>
                Password*
                <Input
                  type="password"
                  name="password"
                  maxLength="128"
                  minLength="1"
                  required
                  value={loginData.password}
                  onChange={handleChange}
                />
              </Label>
            </InputContainer>
            <SubmitButton type="submit" disabled={isLoading}>
              {isLoading ? "Yuklanmoqda..." : "Log in"}
            </SubmitButton>
          </Form>
        </FormContainer>
      </Container>
      {isLoading && (
        <div className="loaderWindow">
          <div className="loader"></div>
        </div>
      )}
    </>
  );
}

export default Login;
