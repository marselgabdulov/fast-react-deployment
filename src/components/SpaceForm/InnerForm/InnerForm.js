import React from "react";
import { Select, Input, Icon, Form, Button, Checkbox } from "antd";
import "antd/dist/antd.css";
import "./InnerForm.css";
import ImageUploader from "../ImageUploader/ImageUploader";
import SuccessModal from "../SuccessModal/SuccessModal";
import { translit } from "../../../helpers/formHelpers";
import InputMask from "react-input-mask";

const FormItem = Form.Item;

class InnerForm extends React.Component {
  handleSelectChange = value => {
    this.props.setFieldValue("haveRecord", value);
  };

  handleTranslate = value => {
    if (value) {
      return value
        .split("")
        .map(c => translit(c))
        .join("");
    }
    return "";
  };

  render() {
    const {
      values,
      touched,
      errors,
      handleChange,
      handleSubmit,
      setFieldValue
    } = this.props;
    return (
      <>
        <form className="space-form" onSubmit={handleSubmit}>
          <FormItem>
            Имя кириллицей
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Имя"
              name="firstNameCyrillic"
              onChange={e => {
                const domain = this.handleTranslate(e.target.value);
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
                const domain = this.handleTranslate(e.target.value);
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
            <div>Телефонный номер</div>
            <InputMask
              mask="+7 (999) 999 99 99"
              value={values.phoneNumber}
              onChange={handleChange}
              name="phoneNumber"
              disabled={false}
            >
              {inputProps => (
                <Input
                  prefix={
                    <Icon type="phone" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  {...inputProps}
                />
              )}
            </InputMask>
            {errors.phoneNumber && touched.phoneNumber ? (
              <div className="error">{errors.phoneNumber}</div>
            ) : null}
          </FormItem>
          <FormItem>
            Личная фотография (не более 320kb)
            <ImageUploader
              uploaderName="personalPhoto"
              name="personalPhoto"
              setFieldValue={setFieldValue}
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
            <div>Объем двигаетеля в литрах</div>
            <Input
              style={{ width: "30%" }}
              name="engineСapacity"
              value={values.engineСapacity}
              onChange={handleChange}
            />
            {errors.engineСapacity && touched.engineСapacity ? (
              <div className="error">{errors.engineСapacity}</div>
            ) : null}
          </FormItem>
          <FormItem>
            <Checkbox
              name="backFromBlackHole"
              onChange={handleChange}
              value={values.backFromBlackHole}
            >
              Возможность вернуться из черной дыры да/нет
            </Checkbox>
          </FormItem>
          {values.backFromBlackHole ? (
            <FormItem>
              Вероятность вернуться из черной дыры
              <Input
                placeholder="опишите вероятность"
                name="chanceToBack"
                onChange={handleChange}
                value={values.chanceToBack}
              />
              {errors.chanceToBack && touched.chanceToBack ? (
                <div className="error">{errors.chanceToBack}</div>
              ) : null}
            </FormItem>
          ) : null}
          <FormItem>
            <FormItem>
              <div>
                Наличие записывающих средств, позволяющих передавать данные из
                черной дыры (да/нет/частично)
              </div>
              <Select
                style={{ width: 120 }}
                onChange={this.handleSelectChange}
                name="haveRecord"
                value={values.haveRecord}
              >
                <Select.Option value="yes">Да</Select.Option>
                <Select.Option value="no">Нет</Select.Option>
                <Select.Option value="so-so">частично</Select.Option>
              </Select>
              {errors.haveRecord && touched.haveRecord ? (
                <div className="error">{errors.haveRecord}</div>
              ) : null}
            </FormItem>
            {values.haveRecord === "yes" ? (
              <FormItem>
                <div>Скорость передачи информации, ГБ/с</div>
                <Input
                  style={{ width: "30%" }}
                  name="loadSpeed"
                  value={values.loadSpeed}
                  onChange={handleChange}
                />
                {errors.loadSpeed && touched.loadSpeed ? (
                  <div className="error">{errors.loadSpeed}</div>
                ) : null}
              </FormItem>
            ) : null}
            <FormItem>
              Фотография летательного аппарата (не более 320kb)
              <ImageUploader
                uploaderName="rocketPhoto"
                name="rocketPhoto"
                value={values.rocketPhoto}
                setFieldValue={setFieldValue}
              />
              {errors.rocketPhoto && touched.rocketPhoto ? (
                <div className="error">{errors.rocketPhoto}</div>
              ) : null}
            </FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Отправить
            </Button>
          </FormItem>
        </form>
        <SuccessModal isVisible={values.modalIsVisible} />
      </>
    );
  }
}

export default InnerForm;
