import React,{Component} from 'react';
import {Table,Row,Col} from 'antd';



export default class DataTable extends Component{
    constructor(props){
        super(props);
        this.state={
            data:this.props.data||[],
        }
    }
    getmeasureData=(type,data)=>{  //type  0代表测量位置 1代表展示的数据 
        var array=[];
        for(var i=0;i<10;i++){
            array.push(<Col className="measure-10">{i}</Col>);
        }
        return(
            <Row>
                {array}
            </Row> 
        )
    }
    render(){
        return(
            <div>
                <Row>
                    <Col span={4}>
                        <text>测量位置</text>
                    </Col>
                    <Col span={20}>测量位置1</Col>
                </Row>
                <Row>
                    <Col span={4}></Col>
                    <Col span={20}>
                        {this.getmeasureData(0)}
                        {this.getmeasureData(0)}  
                    </Col>
                </Row>
                <Row>
                    <Col span={4}>数据处理</Col>
                    <Col span={2}>均值R</Col>
                    <Col span={4}></Col>
                    <Col span={2}>标准差</Col>
                    <Col span={4}></Col>
                    <Col span={2}>结果D</Col>
                    <Col span={6}></Col>
                </Row>
            </div>
        )
    }
}