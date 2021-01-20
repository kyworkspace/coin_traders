import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Text from '../../ui/Text';
import Spacing from '../../ui/Spacing';
import Input from '../../ui/Input';
import Button from '../../ui/Button'
import InlineList from '../../ui/InlineList';
import Form from '../../ui/Form';
import {Consumer as Modal} from '../../ui/Modal/context';


class RegisterPage extends PureComponent {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values,closeModal){
        const {createUser} = this.props;
        createUser(values,closeModal);
    }

    render() {
        const {loading} = this.props;
        return (
            <Modal>
                {({closeModal})=>(
                    <Form onSubmit={values=>this.handleSubmit(values,closeModal)}>
                        <Form.Consumer>
                            {({onChange})=>(
                                <Spacing horizontal={4} vertical={8}>
                                    <Text xlarge bold>
                                        회원등록
                                    </Text>
                                    <Spacing bottom={2}>
                                        <Input name="userId" label = "사용자 아이디" onChange={onChange}/>
                                    </Spacing>
                                    <Spacing bottom={2}>
                                        <Input name="totalAmount" label = "자산총액" type="number" onChange={onChange}/>
                                    </Spacing>
                                    <InlineList spacingBetween={1}>
                                        <Button type="submit" primary disabled={loading}>회원등록</Button>
                                        <Button onPress={closeModal} disabled={loading}>취소</Button>
                                    </InlineList>
                                </Spacing>
                            )}
                        </Form.Consumer>
                    </Form>
                )}
            </Modal>
        );
    }
}

RegisterPage.propTypes = {
    loading:PropTypes.bool,
    createUser : PropTypes.func,
};

export default RegisterPage;