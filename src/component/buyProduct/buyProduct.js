import "./buyProduct.css";
import React, { Component } from "react";

import * as action from "./../../redux/action/index";
import { connect } from "react-redux";
import { toast } from "react-toastify";

class BuyProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      URname: "",
      URphone: "",
      URdc: "",
      URsex: 1,
      noteText: "",
      mdh: "00000000",
    };
  }
  /*=======================================*/
  componentDidMount() {}
  /*=======================================*/
  onchange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };
  /*=======================================*/
  onclick = () => {
    var { history } = this.props;
    history.goBack();
  };
  /*------------------  */
  /*-----------------	*/
  render() {
    var { URname, URphone, URdc, URsex, noteText, mdh } = this.state;
    URsex = parseInt(URsex);
    let login = JSON.parse(localStorage.getItem("loginF"));
    //let product_shop=JSON.parse(localStorage.getItem('ITEM'));
    return (
      <React.Fragment>
        {login === null ? (
          <div className="buy-product-shop text-center">
            <h1>Kiểm Tra Đơn Hàng Thanh Toán</h1>
            <div className="row text-center bg-Buy">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Name</th>
                      <th>Image</th>
                      <th>SLL</th>
                      <th>Đơn Giá</th>
                    </tr>
                  </thead>
                  {this.showTable()}
                </table>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-primary btnBack"
              onClick={this.onclick}
            >
              Quay Lại
            </button>

            <div className="row bg-Buy">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="textUser">
                  <h2>Xác Nhận Thông Tin</h2>
                  <hr />
                  <p>
                    Tên: <span>{URname}</span>
                  </p>
                  <p>
                    Giới Tính: <span>{URsex === 1 ? " Nam" : " Nữ"}</span>
                  </p>
                  <p>
                    Địa Chỉ: <span>{URdc}</span>
                  </p>
                  <p>
                    SDT: <span>{URphone}</span>
                  </p>
                  <p id="note-text1">Ghi Chú : {noteText}</p>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-12 col-md-6 col-lg-6"
                id="inputUser"
              >
                {this.showTextUser()}
              </div>

              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h4 style={{ color: "#fc0" }}>{mdh}</h4>
                <button
                  type="button"
                  class="btn btn-primary"
                  id="mdh"
                  onClick={() => this.madonhang()}
                >
                  Lấy Mã Đơn Hàng
                </button>
              </div>

              <p id="luuY">
                **Lưu ý: Anh(Chị) vui lòng nhập đầy đủ thông tin và kiểm tra
                trước khi xác nhận thông tin mua hàng. bên em sẽ liên hệ
                Anh(Chị) qua số sdt sớm nhất. Xin cảm ơn!
                <p>
                  **số tiền % chiết khấu hóa đơn trên 1000 USD sẽ chiết khấu 1%
                  dưới 1000 USD là 0%
                </p>
                <p style={{ color: "aqua" }}>
                  *** khách hàng vui lòng sao chép mã đơn hàng để tra cứu đơn
                  hàng{" "}
                </p>
              </p>
            </div>
            <button
              type="button"
              className="btn btn-warning"
              id="Submit-buy"
              onClick={() => this.updataSever()}
            >
              Xác Nhận Mua Hàng
            </button>
          </div>
        ) : (
          <div id="login-buy">
            <h2>Vui Lòng Đăng Nhập Để Thanh Toán Mua Hàng</h2>
          </div>
        )}
      </React.Fragment>
    );
  }
  /*============show table=====================*/
  showTable = () => {
    return (
      <tbody>
        {this.showDataTable()}
        <tr style={{ backgroundColor: "rgba(25,0,230,0.3)" }}>
          <td>Tổng Tiền Đơn Hàng</td>
          <td>{this.showTotal()} USD</td>
          <td></td>
          <td>Sale 1%</td>
          <td>{this.showSale()} USD</td>
        </tr>
        <tr style={{ backgroundColor: "rgba(140,0,230,0.3)" }}>
          <td>Tổng Tiền Cần Thành toán</td>
          <td>{this.showTotalafterSale()} USD</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    );
  };
  /*============show data table====================*/
  showDataTable = () => {
    var resule = "";
    let product_shop = JSON.parse(localStorage.getItem("ITEM"));
    var cartshop = product_shop;
    resule = cartshop.map((item, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{item.product.name}</td>
          <td>
            <img
              src={
                require(`./../../image/img/${item.product.image}.jpg`).default
              }
              alt="..."
            />
          </td>
          <td>{item.sll}</td>
          <td>{item.product.price} USD /1SP</td>
        </tr>
      );
    });
    return resule;
  };
  /*==============show total========================*/
  showTotal = () => {
    let product_shop = JSON.parse(localStorage.getItem("ITEM"));
    var cartshop = product_shop;
    var total = 0;
    for (let i = 0; i < cartshop.length; i++) {
      total += cartshop[i].product.price * cartshop[i].sll;
    }
    return total;
  };
  /*================show sale=====================*/
  showSale = () => {
    let product_shop = JSON.parse(localStorage.getItem("ITEM"));
    var cartshop = product_shop;
    var total = 0;
    var saleOf = 0;
    for (let i = 0; i < cartshop.length; i++) {
      total += cartshop[i].product.price * cartshop[i].sll;
    }
    if (total > 1000) {
      saleOf = Math.round(total * 0.01);
    } else {
      saleOf = 0;
    }
    return saleOf;
  };
  /*=========show total sale========================*/
  showTotalafterSale = () => {
    let product_shop = JSON.parse(localStorage.getItem("ITEM"));
    var cartshop = product_shop;
    var total = 0;
    var saleOf = 0;
    for (let i = 0; i < cartshop.length; i++) {
      total += cartshop[i].product.price * cartshop[i].sll;
    }
    if (total > 1000) {
      saleOf = Math.round(total * 0.01);
    } else {
      saleOf = 0;
    }
    var GetTotal = total - saleOf;
    return GetTotal;
  };
  /*==============show text user=====================*/
  showTextUser = () => {
    var { URname, URphone, URdc, URsex, noteText } = this.state;
    URsex = parseInt(URsex);
    return (
      <div>
        <h2>Nhập Thông Tin</h2>
        <p>
          Tên:{" "}
          <input
            type="text"
            className="form-control"
            name="URname"
            value={URname}
            onChange={this.onchange}
          />
        </p>
        <p>
          Giới Tính
          <select
            className="form-control"
            name="URsex"
            value={URsex}
            onChange={this.onchange}
          >
            <option value={0}>Nữ</option>
            <option value={1}>Nam</option>
          </select>
        </p>
        <p>
          Địa Chỉ:
          <input
            type="text"
            className="form-control"
            name="URdc"
            value={URdc}
            onChange={this.onchange}
          />
        </p>
        <p>
          SDT:
          <input
            type="text"
            className="form-control"
            name="URphone"
            value={URphone}
            onChange={this.onchange}
          />
        </p>
        <p>
          Ghi chú:
          <input
            type="text"
            name="noteText"
            class="form-control"
            value={noteText}
            onChange={this.onchange}
          />
        </p>
      </div>
    );
  };
  /*==============show text user====================*/
  /*=============lay ma don hang ===================*/
  madonhang = () => {
    let mdh = Math.floor(
      Math.random() * 10102965301 +
        Math.random() * 90714781 +
        129 +
        Math.random() * 191 +
        Math.random() * 939247219
    );
    this.setState({
      mdh: mdh.toString(),
    });
  };
  /*=============lay ma don hang ===================*/
  /*===============updatasever======================*/
  updataSever = () => {
    let product_shop = JSON.parse(localStorage.getItem("ITEM"));
    var cartshop = product_shop;
    var { URname, URphone, URdc, URsex, noteText, mdh } = this.state;
    var user = {
      nameUR: URname,
      phoneUR: URphone,
      dcUR: URdc,
      sexUR: URsex,
      note: noteText,
    };
    var mdhUP = { mdh: mdh };
    var data_up = { cartshop, user, mdhUP };
    var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    var URname_regex = /(cc|dd)/i;
    var { history } = this.props;
    console.log(cartshop);
    if (URname === "" || URdc === "" || URphone === "") {
      //window.alert('bạn chưa nhập đủ thông tin vui lòng kiểm tra lại');
      toast.info(`🦝 bạn chưa nhập đủ thông tin vui lòng kiểm tra lại ! `, {
        position: "top-center",
        autoClose: 3000,
      });
    } else if (URname_regex.test(URname) === true) {
      //window.alert("ten ban nhap ko hop le");
      toast.warn(`🦝 tên bạn nhập không hợp lệ !! `, {
        position: "top-center",
        autoClose: 3000,
      });
    } else if (vnf_regex.test(URphone) === false) {
      /*var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    	if(vnf_regex.test(URphone) === false){
    		window.alert('số diện thoại của bạn không hợp lệ!!');
    	}*/
      toast.error(`🦝 số diện thoại của bạn không hợp lệ!! `, {
        position: "top-center",
        autoClose: 3000,
      });
      //window.alert('số diện thoại của bạn không hợp lệ!!');
    } else if (cartshop.length <= 0) {
      toast.success(
        `🦝 Giỏ hàng chưa có sản phẩm nào, chọn thêm sản phâm trước khi thanh toán xin cảm ơn ! `,
        { position: "top-center", autoClose: 3000 }
      );
      //window.alert('Giỏ hàng chưa có sản phẩm nào, chọn thêm sản phâm trước khi thanh toán xin cảm ơn');
    } else if (mdh === "00000000") {
      toast.dark(
        `🦝 bạn chưa lấy mã đơn hàng vui lòng nhấn nút lấy mã đơn hàng trước khi thanh toán ! `,
        { position: "top-center", autoClose: 3000 }
      );
      //window.alert('bạn chưa lấy mã đơn hàng vui lòng nhấn nút lấy mã đơn hàng trước khi thanh toán');
    } else {
      if (window.confirm("bạn có chắc muốn thanh toán??")) {
        this.props.dataSever(data_up);
        window.alert("thanh toán đơn hàng thành công!!!!");
        window.alert(
          "anh(chị) xin để ý diện thoại bên em sẽ gọi xác nhận đơn hàng. Xin cảm ơn!!!"
        );
        window.alert(
          `mã đơn hàng của bạn:  ${mdh}  tra cứu đơn hàng đã đặt ở menu đầu trang chủ góc bên phải màn hình`
        );
        localStorage.removeItem("ITEM");
        history.goBack();
      }
    }
  };
  /*===============updatasever======================*/

  /*=======================================*/
  /*=======================================*/
}

var mapStateToProp = (state) => {
  return {
    cartshop: state.cartshop,
  };
};
var mapDispathToProp = (dispath, props) => {
  return {
    dataSever: (data) => {
      dispath(action.up_data_sever_api(data));
    },
  };
};
export default connect(mapStateToProp, mapDispathToProp)(BuyProduct);
