import React, { useState } from "react";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import "./Contact.css";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `گروه مشاوران تکنو هیرمند  ${data.fullname}: لطفا تمامی موارد را تکمیل نمایید ${data.msg}.`
    );
  };

  return (
    <>
      <div className="my-5">
        <div className="text-center">تماس با ما</div>
        <br />
        <div className="contactemail">
          1-
          <a href="mailto:hirmand.7@gmail.com">
            <AttachEmailIcon className="AttachEmailIcon" />
            ایمیل ما: hirmand.7@gmail.com
          </a>
        </div>
        <br />
        <span className="contactemail">2- فرم درخواست</span>
      </div>
      <div className="containercontact">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleInputName1">نام و نام خانوادگی</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputName1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="نام خود را وارد نمایید"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1">آدرس ایمیل</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@gmail.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleTextArea1"> متن پیام</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleTextArea1"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                />
              </div>
              <a href="mailto:hirmand.7@gmail.com" rel="nofollow">
                <button type="submit" className="btn-primary">
                  ارسال
                </button>
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
