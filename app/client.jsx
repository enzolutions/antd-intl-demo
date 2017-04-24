import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button } from 'antd';
import { IntlProvider, FormattedMessage, defineMessages } from 'react-intl';
const FormItem = Form.Item;
const Option = Select.Option;

const messages = defineMessages({
    passwordConfirm: {
        id: 'App.login.passwordConfirm',
        defaultMessage: 'Please Confirm Password'
    },
    passwordMessage: {
        id: 'App.login.passwordConfirmMessage',
        defaultMessage: 'Please confirm your password'
    },
    password: {
        id: 'App.login.password',
        defaultMessage: 'Password'
    }
});

const DemoForm = Form.create()(React.createClass({
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                span: 14,
                offset: 6,
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select className="icp-selector">
                <Option value="86">+86</Option>
            </Select>
        );
        return (
            <Form horizontal onSubmit={this.handleSubmit}>
                <IntlProvider locale="en">
                    <FormItem
                        {...formItemLayout}
                        label= {<FormattedMessage {...messages.passwordConfirm} />}
                        hasFeedback
                    >
                        {getFieldDecorator('confirm', {
                            rules: [{
                                required: true,
                                message: <FormattedMessage {...messages.passwordMessage} />,
                            }, {
                                validator: this.checkPassowrd,
                            }],
                        })(
                            <Input type="password" placeholder={<FormattedMessage {...messages.password} />}/>
                        )}
                    </FormItem>
                </IntlProvider>
            </Form>
        );
    },
}));

ReactDOM.render(<DemoForm />, document.getElementById('myForm'));