import { useState } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Card,
  CardHeader,
  CardSubtitle,
  CardBody,
  Form,
  Button,
} from "reactstrap";

import FormInput from "./components/FormInput";
import FormModal from "./components/FormModal";



function App() {

  //imput data state
  const [values, setValues] = useState({
    name: "",
    last_name: "",
    pesel: "",
    address: "",
    phone: "",
    email: "",
    photo: "",
    consent: "false",
  });

  //form content variable
  const formFields = [
    {
      name: "name",
      label: "Imię:",
      type: "text",
      placeholder: "Twoje imię",
      pattern: "[A-Za-z]{3,16}",
      required: true,
      errorMsg: "Imię powinno się składać ze 3-16 liter",
    },
    {
      name: "last_name",
      label: "Nazwisko:",
      type: "text",
      placeholder: "Twoje Nazwisko",
      pattern: "[A-Za-z]{3,16}",
      required: true,
      errorMsg: "Nazwisko powinno się składać ze 3-16 liter",
    },
    {
      name: "pesel",
      label: "PESEL:",
      type: "text",
      placeholder: "121212123",
      pattern: "[0-9]{11}",
      required: true,
      errorMsg: "PESEL powinnien się składać z 11 cyfr",
    },
    {
      name: "address",
      label: "Adres:",
      type: "text",
      placeholder: "Twój adres korespondencyjny",
      pattern: "[ A-Za-z0-9]{10,50}",
      required: true,
      errorMsg: "Adress powinnien się składać z min 10 znaków",
    },
    {
      name: "phone",
      label: "Telefon:",
      type: "tel",
      placeholder: "+48 123 453 673",
      pattern: "[ +()0-9]{9,15}",
      required: true,
      errorMsg:
        "Telefon powinnien się składać z min 9 cyfr. Pamiętaj o nr kierunkowym!",
    },
    {
      name: "email",
      label: "Email:",
      type: "email",
      placeholder: "abc@def.gh",
      pattern: null,
      required: true,
      errorMsg: "email niepoprawny",
    },
    {
      name: "photo",
      label: "Zdjęcie:",
      type: "file",
      placeholder: "",
      pattern: "",
      required: true,
      errorMsg: "Prześlij swoje zdjęcie",
    },
    {
      name: "consent",
      label: "Akceptuję regulamin",
      type: "checkbox",
      placeholder: "Akceptuję regulamin",
      pattern: "",
      required: true,
      errorMsg: "Zaakceptuj regulamin",
    },
  ];

  //submit button logic
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(true);
    console.log(values);
    //send data to backend
  };

  //input update funcion
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  //modal open state
  const [isOpen, setIsOpen] = useState(false);

  //modal toggling
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <Container fluid="md">
        <Card>
          <CardHeader tag="h2">Profil Użytkownika</CardHeader>
          <CardSubtitle className="mt-2 text-muted" tag="h6">
            Wprowadź swoje dane:
          </CardSubtitle>
          <CardBody>
            <Form onSubmit={(e) => handleSubmit(e)}>
              {formFields.map((field, id) => (
                <FormInput
                  key={id}
                  {...field}
                  value={values[field.name]}
                  onChange={onChange}
                ></FormInput>
              ))}
              <Button type="submit" color="primary" className="btn-lg" onSubmit={(e)=>handleSubmit(e)}>
                Zapisz
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Container>
              <FormModal show={isOpen} toggle={toggle}></FormModal>
    </div>
  );
}

export default App;
