import './foodter.css';
import React, {Component} from 'react';

class Foodter extends Component {
  render(){
    return(
      <React.Fragment>
      <div className="Foodter">
        <hr/>
        <div className='abc'>
          <table className="table table-bordered table-hover">
            <thead>
              <tr >
                <th>
                  <i className='fa fa-cc-visa'></i>
                  Thanh toán visa/tiền mặt/trả góp
                </th>
                <th>
                  <i className='fa fa-truck'></i>
                  Vận chuyển miễn phí
                </th>
                <th>
                  <i className='fa fa-rocket'></i>
                  Trải nghiệm sản phẩm miễn phí
                </th>
                <th>
                  <i className='fa fa-refresh fa-spin'></i>
                  Dịch vụ bảo hành hậu mãi
                </th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
        <div className="row foodd1">
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <p><i className='fa fa-recycle' style={{color:'#99cc00'}}></i>Tìm hiểu mua trả góp</p>
            <p><i className='fa fa-recycle' style={{color:'#99cc00'}}></i>Quy định bảo mật </p>
            <p><i className='fa fa-recycle' style={{color:'#99cc00'}}></i>Quy định bảo hành</p>
            <p><i className='fa fa-recycle' style={{color:'#99cc00'}}></i>Quy định đổi trả</p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <p><i className='fa fa-map' style={{color:'#cc6600'}}></i>Hệ thống chuỗi cửa hàng</p>
            <p><i className='fa fa-address-book' style={{color:'#66ccff'}}></i>Thông tin tuyển dụng</p>
            <p><i className='fa fa-info-circle fa-spin' style={{color:'#9900cc'}}></i>khiếu nại/góp ý</p>
            <p><i className='fa fa-truck' style={{color:'#0f6'}}></i>Dịch vụ vận chuyển</p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <p><i className='  fa fa-phone-square' style={{color:'#99cc00'}}></i>Kĩ Thuật: 013579123</p>
            <p><i className='  fa fa-phone-square' style={{color:'#ffcc66'}}></i>khiếu Nại: 0234121277</p>
            <p><i className='  fa fa-phone-square' style={{color:'#cc6699'}}></i>Bảo hành: 032321123</p>
            <p><i className='  fa fa-phone-square' style={{color:'#993333'}}></i>Mua Hàng: 0123012309</p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <p><i className='fa fa-facebook-square fa-spin' style={{color:'#3366ff'}}></i>FaceBook:</p>
            <p><i className='fa fa-youtube-play fa-spin' style={{color:'#f00'}}></i>YouTube:</p>
            <p><i className='fa fa-envelope-square' style={{color:'#f9a'}}></i>Email:</p>
            <p></p>
          </div>
        </div>
        <hr/>
        <div id="cskh" className="text-center">
          <p>@copy công ty trách nhiệm hữu hạn một thành viên phân phối điện thoại,  Email:cskh123@gmail.com,  chịu trách nhiệm bởi ông Nguyễn Văn A,  mã số giấy phép 0w834m2a</p>
        </div>
      </div>
      </React.Fragment> 
      )
  }
}
export default Foodter;