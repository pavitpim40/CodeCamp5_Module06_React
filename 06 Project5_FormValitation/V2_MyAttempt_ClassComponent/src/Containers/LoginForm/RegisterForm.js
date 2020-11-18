import React, { Component } from "react";
import Input from "../Input/Input";

class RegisterForm extends Component {
  state = {
    formData: {
      name: {
        value: "",
        validator: {
          minLength: 3,
          maxLength: 6,
          required: true,
        },
        error: { status: true, message: "", isTouched : false },
      },
      phoneNumber: {
        value: "",
        validator: {
          minLength: 10,
          maxLength: 10,
          required: false,
        },
        error: { status: true, message: "" ,isTouched : false },
      },
      email: {
        value: "",
        validator: {
          required: true,
        },
        error: { status: true, message: "" ,isTouched : false },
      },
      password: {
        value: "",
        validator: {
          minLength: 6,
          maxLength: 24,
          required: true,
        },
        error: { status: true, message: "" , isTouched : false},
      },
    },
    isFormValid: false,
  };

  onChangeInput = (e) => {
    // ส่วนแก้ไข state ของแต่ละช่องที่กรอก ด้วยการ clone
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const updateFormData = { ...this.state.formData };
    updateFormData[fieldName].value = fieldValue;

    // ส่วนตรวจสอบความถูกต้องของแต่ละช่องที่กรอก
    let { isValid, message } = this.checkValue(
      fieldValue,
      updateFormData[fieldName].validator
    );
    updateFormData[fieldName].error.status = !isValid;
    updateFormData[fieldName].error.message = message;
    updateFormData[fieldName].error.isTouched = true;

    // for in เพืออตรวจสอบ error *********************
    let newIsFormValid = true;
    for (let eachFieldName in updateFormData) {
      // console.log(updateFormData[eachFieldName]);
      if (updateFormData[eachFieldName].validator.required === true) {
        newIsFormValid =
          !updateFormData[eachFieldName].error.status && newIsFormValid;
      }

      // ส่วนอัพเดท State ใหม่
      this.setState({
        formData: updateFormData,
        isFormValid: newIsFormValid,
      });
      // for debug
      // console.log(`${updateFormData[fieldName]} : ${fieldValue}`);
    }
  };
  onSubmitForm = (e) => {
    e.preventDefault();
    console.log(this.state.formData);
    this.setState({
      formData: {
        name: {
          value: "",
          validator: {
            minLength: 3,
            maxLength: 6,
            required: true,
          },
          error: { status: true, message: "" },
        },
        phoneNumber: {
          value: "",
          validator: {
            minLength: 10,
            maxLength: 10,
            required: false,
          },
          error: { status: true, message: "" },
        },
        email: {
          value: "",
          validator: {
            required: true,
          },
          error: { status: true, message: "" },
        },
        password: {
          value: "",
          validator: {
            minLength: 6,
            maxLength: 24,
            required: true,
          },
          error: { status: true, message: "" },
        },
      },
      isFormValid: false,
    });
  };
  checkValue = (value, validator) => {
    //เดี๋ยวเราจะรับ validator มาเป็นแบบ object
    let isValid = true;
    let message = "";
    let trimmedValue = value.trim();

    if (validator.maxLength && trimmedValue.length > validator.maxLength) {
      isValid = false;
      message = `ช่องนี้ความยาวต้องไม่เกิน ${validator.maxLength} ตัว`;
    }
    if (validator.minLength && trimmedValue.length < validator.minLength) {
      isValid = false;
      message = `ช่องนี้ต้องมีความยาวอย่างน้อย ${validator.minLength} ตัว`;
    }
    if (validator.required && trimmedValue.length === 0) {
      isValid = false;
      message = "คุณต้องกรอกช่องนี้";
    }
    return { isValid, message };
  };
  render() {
    // destructuring
    const { name, phoneNumber, email, password } = this.state.formData;
    return (
      <div className="RegisterForm">
        <form onSubmit={this.onSubmitForm}>
          <Input
            name="name"
            placeholder="ชื่อ"
            className="Input InputElement"
            onChangeInput={this.onChangeInput}
            value={name.value}
            error={name.error}
          />
          <Input
            name="phoneNumber"
            placeholder="เบอร์โทรศัพท์"
            className="Input InputElement"
            onChangeInput={this.onChangeInput}
            value={phoneNumber.value}
            error={phoneNumber.error}
          />
          <Input
            name="email"
            placeholder="อีเมล์"
            className="Input InputElement"
            onChangeInput={this.onChangeInput}
            value={email.value}
            error={email.error}
          />
          <Input
            name="password"
            placeholder="รหัสผ่าน"
            className="Input InputElement"
            onChangeInput={this.onChangeInput}
            value={password.value}
            error={password.error}
            type = "password"
          />

          {/* ใส่ htmlFor,type หรือไม่ใส่ก็เหมือนกันหมด */}
          <button disabled={!this.state.isFormValid} className="Button">
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default RegisterForm;

// 1.สร้าง form มาก่อน
// 2.ทำ onchange แบบฟังก์ชันโดยใช้ computed variable
// 3.ทำ onsubmit + prevent default
// 4.ปรับโครงสร้างสำหรับ valid Form
// 5.สร้างฟังก์ชันเช็ค value
// 6.เอาฟังก์ชันเช็ค value ไปเรียกใช้ใน onchange
// 7.ตั้งค่า error และ message
