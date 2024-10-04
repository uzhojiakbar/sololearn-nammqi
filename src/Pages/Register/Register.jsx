import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  FormContainer,
  Title,
  Form,
  Label,
  Input,
  Select,
  SubmitButton,
  InputContainer,
} from "./styled";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    course: "",
    groupName: "",
    repass: "",
  });

  const notify = (type = "ok", text) => {
    if (type === "ok") {
      toast.success(text || "Tayyor");
    } else if (type === "err") {
      toast.error(text || "Xato");
    } else if (type === "wait") {
      toast.loading(text || "Kuting...");
    }
  };

  const [loading, setLoading] = useState(1);

  const [GroupsAtt, setGroupsAtt] = useState([]);

  const nav = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://solonammqi.pythonanywhere.com/account/groupsatt/?format=json"
      );
      setGroupsAtt([]); // Kelgan ma'lumotni state ga yuklash
      setGroupsAtt([...response.data]); // Kelgan ma'lumotni state ga yuklash
    } catch (error) {
      console.error("Error fetching the data", error);
    }
  };
  useEffect(() => {
    setLoading(1);
    fetchData();
    setLoading(0);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    setLoading(1);
    e.preventDefault();
    const requestData = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      first_name: formData.firstName,
      last_name: formData.lastName,
      course: formData.course,
      group_name: formData.groupName || null,
    };

    if (formData.password !== formData.repass) {
      notify("err", "Parollar mos emas");
      setLoading(0);
      return;
    }

    try {
      const response = await axios.post(
        "https://solonammqi.pythonanywhere.com/account/register/",
        requestData
      );
      setLoading(0);
      notify("ok", "Ro`yxatdan o`tdingiz");
      nav("/account/sign-in");
    } catch (error) {
      setLoading(0);
      if (error.response && error.response.data) {
        const errorData = error.response.data;

        if (errorData.username) {
          notify("err", `Username xatolik: ${errorData.username[0]}`);
        } else if (errorData.email) {
          notify("err", `Email xatolik: ${errorData.email[0]}`);
        } else if (errorData.password) {
          notify("err", `Password xatolik: ${errorData.password[0]}`);
        } else {
          notify(
            "err",
            "Qandaydur xatolik. Iltimos keyinroq qayta urinib ko'ring."
          );
        }
      } else {
        notify(
          "err",
          "Qandaydur xatolik. Iltimos keyinroq qayta urinib ko'ring."
        );
      }
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Container>
        <FormContainer>
          <Title>Ro'yxatdan o'tish</Title>
          <Form onSubmit={handleSubmit}>
            <InputContainer>
              <Label>
                Ismingizni kiriting
                <Input
                  type="text"
                  name="firstName"
                  maxLength="150"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Label>
            </InputContainer>
            <InputContainer>
              <Label>
                Familyaninigizni kiriting
                <Input
                  type="text"
                  name="lastName"
                  maxLength="150"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Label>
            </InputContainer>
            <InputContainer>
              <Label>
                Foydaluvchi nomi *
                <Input
                  type="text"
                  name="username"
                  pattern="^[\w.@+-]+$"
                  maxLength="150"
                  minLength="1"
                  required
                  value={formData.username}
                  onChange={handleChange}
                />
              </Label>
            </InputContainer>

            <InputContainer>
              <Label>
                E-mail *
                <Input
                  type="email"
                  name="email"
                  maxLength="254"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </Label>
            </InputContainer>
            <InputContainer>
              <Label>
                Parol kiriting *
                <Input
                  type="password"
                  name="password"
                  maxLength="128"
                  minLength="1"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
              </Label>
            </InputContainer>
            <InputContainer>
              <Label>
                Parolni takroran kiriting*
                <Input
                  type="password"
                  name="repass"
                  maxLength="128"
                  minLength="1"
                  required
                  value={formData.repass}
                  onChange={handleChange}
                />
              </Label>
            </InputContainer>

            <InputContainer>
              <Label>
                <Select
                  name="course"
                  required
                  value={formData.course}
                  onChange={handleChange}
                >
                  <option value="null">Kursni tanlang</option>
                  <option value="1">1-kurs</option>
                  <option value="2">2-kurs</option>
                  <option value="3">3-kurs</option>
                  <option value="4">4-kurs</option>
                </Select>
              </Label>
            </InputContainer>
            <InputContainer>
              <Label>
                <Select
                  name="groupName"
                  required
                  value={formData.groupName}
                  onChange={handleChange}
                >
                  <option value="null">Guruhni tanlang</option>
                  {!loading
                    ? GroupsAtt.map((v) => {
                        return (
                          <option key={v.id} value={+v?.id || null}>
                            {v?.name}
                          </option>
                        );
                      })
                    : ""}
                </Select>
              </Label>
            </InputContainer>

            <SubmitButton type="submit">Sign up</SubmitButton>
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
};

export default Register;
