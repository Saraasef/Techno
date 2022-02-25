import React from "react";
import Common from "./Common";
import consultingdesign from "../images/consultingdesign.jpg";

const About = () => {
  return (
    <>
      <Common
        name="درباره ما "
        btn="تماس با ما"
        visit="/contact"
        img={consultingdesign}
        info="تیم مشاوره کسب و کار ما به شدت برای حفظ جریان و شتاب ثابت شرکت شما کار خواهد کرد. شرکت ما به ارائه بهترین مشاوره برای تبدیل کسب و کار شما به یک برند معروف است.
         -ما برای شما کسب و کار طراحی و ایجاد می کنیم.
         -ما خدمات مورد نیاز را مدیریت و اجرا خواهیم کرد."
      />
    </>
  );
};
export default About;
