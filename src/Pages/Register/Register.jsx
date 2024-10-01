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

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    course: "",
    groupName: "",
  });

  const [loading, setLoading] = useState(1);

  const [GroupsAtt, setGroupsAtt] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/account/groupsatt/?format=json");
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
    e.preventDefault();
    const requestData = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      first_name: formData.firstName,
      last_name: formData.lastName,
      course: formData.course,
      group_name: null,
    };

    try {
      const response = await axios.post("/api/account/register/", requestData);
      // Muvaffaqiyatli bo'lsa, foydalanuvchini boshqa sahifaga yo'naltirish yoki formani tozalash
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Container>
        <FormContainer>
          <Title>Sign Up</Title>
          <Form onSubmit={handleSubmit}>
            <InputContainer>
              <Label>
                Username*
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
                Email*
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
                Password*
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
                First Name
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
                Last Name
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
                Course
                <Select
                  name="course"
                  required
                  value={formData.course}
                  onChange={handleChange}
                >
                  <option value="">Kursni tanlang</option>
                  <option value="1">1-kurs</option>
                  <option value="2">2-kurs</option>
                  <option value="3">3-kurs</option>
                  <option value="4">4-kurs</option>
                </Select>
              </Label>
            </InputContainer>
            <InputContainer>
              <Label>
                Group Name
                <Select
                  name="groupName"
                  required
                  value={formData.groupName}
                  onChange={handleChange}
                >
                  <option value="">Kursni tanlang</option>

                  {!loading
                    ? GroupsAtt.map((v) => {
                        return (
                          <option key={v.id} value={v?.name}>
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
