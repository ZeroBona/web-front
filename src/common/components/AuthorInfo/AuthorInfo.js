import React from "react";
import { Divider, Popover } from "antd";
import { WechatOutlined, AlipayCircleOutlined } from "@ant-design/icons";
import "./AuthorInfo.less";
import LogoImg from "./images/logo.jpg";
import QrcodeWechatImg from "./images/qrcode-wechat.jpg";
import QrcodeZhifubaoImg from "./images/qrcode-zhifubao.jpg";

function AuthorInfo() {
    return (
        <div className="author-info">
            <img className="author-logo" src={LogoImg} alt="无法加载" />
            <h3 className="author-name">依旧零博纳</h3>
            <Divider plain="true">社交账号</Divider>
            <div className="author-account">
                <Popover trigger="hover" 
                    content={<img src={QrcodeWechatImg} style={{width: '140px', height: '140px',}} alt="无法加载"></img>}>
                    <WechatOutlined className="author-account-item" />
                </Popover>
                <Popover trigger="hover"
                    content={<img src={QrcodeZhifubaoImg} style={{width: '140px', height: '140px',}} alt="无法加载"></img>}>
                    <AlipayCircleOutlined className="author-account-item" />
                </Popover>
            </div>
        </div>
    );
}

export default AuthorInfo;
