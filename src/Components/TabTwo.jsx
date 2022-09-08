import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class TabsTwo extends Component {
  render() {
    let tab1 = "Тайлан",
      tab2 = "Бараа бүртгэл",
      tab3 = "Зээл & авлага";
    const { tabStyle } = this.props;
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>{tab1}</Tab>
                    <Tab>{tab2}</Tab>
                    <Tab>{tab3}</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          Өөрийн хүссэн тайлан тооцоогоо хялбархан гаргаж авах
                        </li>
                        <li>Хамгийн өгөөжтэй бараагаа хялбар мэдэх</li>
                        <li>Ашиг тооцоолон гаргаж өгнө</li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>Хялбар бараа бүртгэл</li>
                        <li>
                          Байнга хийдэг орлого болон зарлагаа загвар гүйлгээ
                          болгох
                        </li>
                        <li>
                          Сагсалж орлого зарлага гаргах учир бүгд эмх цэгцтэй
                          таны гарт
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          Бараа бүртгэхдээ зээлээр авах боломжтой учир танд
                          сануулж тусална
                        </li>
                        <li>Зээлийн тайлан гаргана</li>
                        <li>
                          Бүртгэж авсан зээлээ хуваан төлөхөд танд хялбарчилсан
                          алгоритм
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}

export default TabsTwo;
