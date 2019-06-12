import React from "react";
import * as yup from "yup";
import { withFormik } from "formik";
import { Select, Input, Form, Alert, Icon, Button } from "antd";
import {
  checkCyrillic,
  translit,
  phoneRegExp
} from "../../helpers/formHelpers";
import ImageUploader from "./ImageUploader/ImageUploader";
import "antd/dist/antd.css";
import "./SpaceForm.css";

const FormItem = Form.Item;

const translate = value => {
  if (value) {
    return value
      .split("")
      .map(c => translit(c))
      .join("");
  }
  return "";
};

const InnerForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
    setFieldValue
  } = props;
  return (
    <form className="space-form" onSubmit={handleSubmit}>
      <FormItem>
        Имя кириллицей
        <Input
          prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Имя"
          name="firstNameCyrillic"
          onChange={e => {
            const domain = translate(e.target.value);
            handleChange(e);
            setFieldValue("firstNameLatin", domain);
          }}
          value={values.firstNameCyrillic}
        />
        {errors.firstNameCyrillic && touched.firstNameCyrillic ? (
          <div className="error">{errors.firstNameCyrillic}</div>
        ) : null}
      </FormItem>
      <FormItem>
        Имя латиницей
        <Input
          prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="first name"
          name="firstNameLatin"
          onChange={handleChange}
          value={values.firstNameLatin}
        />
        {errors.firstNameLatin && touched.firstNameLatin ? (
          <div className="error">{errors.firstNameLatin}</div>
        ) : null}
      </FormItem>
      <FormItem>
        Фамилия кириллицей
        <Input
          prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Фамилия"
          name="lastNameCyrillic"
          onChange={e => {
            const domain = translate(e.target.value);
            handleChange(e);
            setFieldValue("lastNameLatin", domain);
          }}
          value={values.lastNameCyrillic}
        />
        {errors.lastNameCyrillic && touched.lastNameCyrillic ? (
          <div className="error">{errors.lastNameCyrillic}</div>
        ) : null}
      </FormItem>
      <FormItem>
        Фамилия латиницей
        <Input
          prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="last name"
          name="lastNameLatin"
          onChange={handleChange}
          value={values.lastNameLatin}
        />
        {errors.lastNameLatin && touched.lastNameLatin ? (
          <div className="error">{errors.lastNameLatin}</div>
        ) : null}
      </FormItem>
      <FormItem>
        Email
        <Input
          prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="email"
          name="email"
          onChange={handleChange}
          value={values.email}
        />
        {errors.email && touched.email ? (
          <div className="error">{errors.email}</div>
        ) : null}
      </FormItem>
      <FormItem>
        Телефонный номер
        <Input
          prefix={<Icon type="phone" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="номер телефона"
          name="phoneNumber"
          onChange={handleChange}
          value={values.phoneNumber}
        />
        {errors.phoneNumber && touched.phoneNumber ? (
          <div className="error">{errors.phoneNumber}</div>
        ) : null}
      </FormItem>
      <FormItem>
        Личная фотография
        <ImageUploader
          uploaderName="personalPhoto"
          name="personalPhoto"
          value={values.personalPhoto}
          onChange={e => {
            setFieldValue("personalPhoto", "uploaded");
            handleChange(e);
          }}
        />
        {errors.personalPhoto && touched.personalPhoto ? (
          <div className="error">{errors.personalPhoto}</div>
        ) : null}
      </FormItem>
      <FormItem>
        Нзвание летательного аппарата
        <Input
          name="nameOfRocket"
          onChange={handleChange}
          value={values.nameOfRocket}
        />
        {errors.nameOfRocket && touched.nameOfRocket ? (
          <div className="error">{errors.nameOfRocket}</div>
        ) : null}
      </FormItem>
      <FormItem>
        Объем двигаетеля в литрах
        <Input
          name="engineСapacity"
          onChange={handleChange}
          value={values.engineСapacity}
        />
        {errors.engineСapacity && touched.engineСapacity ? (
          <div className="error">{errors.engineСapacity}</div>
        ) : null}
      </FormItem>
      <FormItem>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Отправить
        </Button>
      </FormItem>
    </form>
  );
};

const FILE_SIZE = 160 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const SpaceForm = withFormik({
  mapPropsToValues({
    firstNameCyrillic,
    firstNameLatin,
    lastNameCyrillic,
    lastNameLatin,
    email,
    phoneNumber,
    personalPhoto,
    nameOfRocket,
    engineСapacity
  }) {
    return {
      firstNameCyrillic: firstNameCyrillic || "",
      firstNameLatin: firstNameLatin || "",
      lastNameCyrillic: lastNameCyrillic || "",
      lastNameLatin: lastNameLatin || "",
      email: email || "",
      phoneNumber: phoneNumber || "",
      personalPhoto: personalPhoto || "",
      nameOfRocket: nameOfRocket || "",
      engineСapacity: engineСapacity || ""
    };
  },

  validationSchema: yup.object().shape({
    firstNameCyrillic: yup.string().required("Обязательно к заполнению"),
    firstNameLatin: yup.string().required("Обязательно к заполнению"),
    lastNameCyrillic: yup.string().required("Обязательно к заполнению"),
    lastNameLatin: yup.string().required("Обязательно к заполнению"),
    email: yup
      .string()
      .email("Недопустимый формат")
      .required("Обязательно к заполнению"),
    phoneNumber: yup
      .string()
      .matches(phoneRegExp, "Телефонный номер заполняется цифрами")
      .required("Обязательно к заполнению"),
    personalPhoto: yup
      .mixed()
      .required(`Обязательно к заполнению ${yup.personalPhoto}`)
      .test(
        "fileSize",
        "Файл слишком большой",
        value => value && value.size <= FILE_SIZE
      )
      .test(
        "fileFormat",
        "Неподдерживаемый формат",
        value => value && SUPPORTED_FORMATS.includes(value.type)
      ),
    nameOfRocket: yup.string().required("Обязательно к заполнению"),
    engineСapacity: yup.string().required("Обязательно к заполнению")
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  }
})(InnerForm);

// export default SpaceForm;

// class SpaceForm extends React.Component {
//   render() {
//     return (
//       <div className="space-form">
//         <FormItem>
//           <Checkbox>Возможность вернуться из черной дыры да/нет</Checkbox>
//         </FormItem>
//         <FormItem>
//           <Input placeholder="Вероятность вернуться из черной дыры**" />
//         </FormItem>
//         <FormItem>
//           <Cascader
//             options={cascaderOptions}
//             style={{ width: "80%" }}
//             placeholder="Наличие записывающих средств, позволяющих передавать данные из черной дыры"
//           />
//         </FormItem>
//         <FormItem>
//           <Input placeholder="Скорость передачи информации, ГБ/с***" />
//         </FormItem>
//         <FormItem>
//           <Input
//             prefix={<Icon type="file" style={{ color: "rgba(0,0,0,.25)" }} />}
//             placeholder="Фото летательного транспорта"
//           />
//         </FormItem>
//
//       </div>
//     );
//   }
// }

// export default SpaceForm;
