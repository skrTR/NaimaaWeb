import React, { Component } from "react";
import { FiCast, FiLayers, FiUsers, FiMonitor } from "react-icons/fi";

const ServiceList = [
  {
    icon: <FiCast />,
    title: "Хялбар бараа бүртгэл",
    description:
      "Та өөрийн зардаг бараануудаа бүртгэж аваад дахин бүртгэх шаардлага гарахгүй. Орлого зарлага гаргахад хялбар болох юм",
  },
  {
    icon: <FiLayers />,
    title: "Бараанд авлага болон зээл үүсэх",
    description:
      "Та өөрийн сагсанд бараагаа хийнэ. Зээлээр өгөх эсвэл зээлээр авах боломж танд бий ",
  },
  {
    icon: <FiUsers />,
    title: "Бараа бүрд он сартай хуулга харах",
    description:
      "Та өөрийн орлого эсвэл зарлага гаргасан бараануудыг хянаж он сар өдөр цагтайн орлого эсвэл зарлагыгаа хянах боломжтой",
  },
  {
    icon: <FiMonitor />,
    title: "Тайлан тооцоо",
    description:
      "Таны хийсэн орлого зарлага гэх платформд хийгдэж байгаа. Бүх үйлдлийг бид танд бодож ашиг орлого, алдангийг бид танд тооцоолж өгөх болно",
  },
  {
    icon: <FiUsers />,
    title: "Загвар гүйлгээнүүд",
    description:
      "Та өөрийн тогтмол хийдэг гүйлгээгээ загвар гүйлгээ болгож хадгалснаар та орлого зарлагаа хормын зуур гаргах боломжтой",
  },
  {
    icon: <FiMonitor />,
    title: "Ашиглаж болох төхөөрөмжүүд",
    description:
      "Таны утас болон таблетад playstore, appstore байвал та хүссэн төхөөрөмждөө ашиглах боломжтой. Бид удахгүй веб сайтаар ч хянах боломжийг хөгжүүлж байгаа",
  },
];

class ServiceThree extends Component {
  render() {
    const { column } = this.props;
    const ServiceContent = ServiceList.slice(0, this.props.item);

    return (
      <React.Fragment>
        <div className="row">
          {ServiceContent.map((val, i) => (
            <div className={`${column}`} key={i}>
              <a href="/service-details">
                <div className="service service__style--2">
                  <div className="icon">{val.icon}</div>
                  <div className="content">
                    <h3 className="title">{val.title}</h3>
                    <p>{val.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default ServiceThree;
