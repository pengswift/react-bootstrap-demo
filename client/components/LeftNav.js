import React, { PropTypes, Component } from 'react'

import {Panel, ListGroup, ListGroupItem, Accordion, Input, Button} from 'react-bootstrap';

const innerButton = <Button>查询</Button>;

export default class LeftNav extends Component {
  render() {
     return (
            <Accordion className="sidebar">
                <div className="sidebar-search">
                    <Input type="text" placeholder="Search" buttonAfter={innerButton} />
                </div>
                <Panel header="游戏玩家" eventKey="1">
                   <ListGroup fill> 
                        <ListGroupItem href="#">新增玩家</ListGroupItem>
                        <ListGroupItem href="#">活跃玩家</ListGroupItem>
                        <ListGroupItem href="#">玩家留存</ListGroupItem>
                        <ListGroupItem href="#">付费转化</ListGroupItem>
                        <ListGroupItem href="#">玩家流失</ListGroupItem>
                        <ListGroupItem href="#">玩家习惯</ListGroupItem>
                        <ListGroupItem href="#">设备相关</ListGroupItem>
                   </ListGroup>
                </Panel>
                <Panel header="在线分析" eventKey="2" >
                </Panel>
                <Panel header="等级分析" eventKey="3">
                    <ListGroup fill> 
                        <ListGroupItem href="#">等级详解</ListGroupItem>
                        <ListGroupItem href="#">等级分布</ListGroupItem>
                        <ListGroupItem href="#">新玩家进度</ListGroupItem>
                    </ListGroup>
                </Panel>
                <Panel header="任务分析" eventKey="4">
                    <ListGroup fill> 
                        <ListGroupItem href="#">任务和关卡</ListGroupItem>
                    </ListGroup>
                </Panel>
                <Panel header="收入分析" eventKey="5">
                    <ListGroup fill> 
                        <ListGroupItem href="#">收入数据</ListGroupItem>
                        <ListGroupItem href="#">付费渗透</ListGroupItem>
                        <ListGroupItem href="#">新玩家价值</ListGroupItem>
                        <ListGroupItem href="#">付费习惯</ListGroupItem>
                    </ListGroup>
                </Panel>
                <Panel header="虚拟消费" eventKey="6">
                    <ListGroup fill> 
                        <ListGroupItem href="#">虚拟币</ListGroupItem>
                        <ListGroupItem href="#">消费喜好</ListGroupItem>
                        <ListGroupItem href="#">消费点</ListGroupItem>
                    </ListGroup>
                </Panel>
                <Panel header="鲸鱼用户" eventKey="7">
                </Panel>
                <Panel header="推广渠道" eventKey="8">
                    <ListGroup fill> 
                        <ListGroupItem href="#">渠道数据</ListGroupItem>
                    </ListGroup>
                </Panel>
                <Panel header="自定义事件" eventKey="9">
                        <ListGroup fill> 
                            <ListGroupItem href="#">事件数据</ListGroupItem>
                        </ListGroup>
                </Panel>
                <Panel header="分析工具" eventKey="10">
                        <ListGroup fill> 
                            <ListGroupItem href="#">预警通知</ListGroupItem>
                            <ListGroupItem href="#">报表备注</ListGroupItem>
                        </ListGroup>
                </Panel>
                <Panel header="营销" eventKey="11">
                        <ListGroup fill> 
                            <ListGroupItem href="#">营销活动</ListGroupItem>
                        </ListGroup>
                </Panel>
            </Accordion>
      )
  }
}
