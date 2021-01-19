import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import InlineList from '../../ui/InlineList';
import Button from '../../ui/Button';

class TransactionPagination extends PureComponent {
    constructor(props){
        super(props);
        this.handleNextPress = this.handleNextPress.bind(this);
        this.handlePrevPress = this.handlePrevPress.bind(this);
    }
    handleNextPress(){
        const { requestTransactionList , pageNumber, searchParams} = this.props;
        requestTransactionList(searchParams,pageNumber+1);
    }
    handlePrevPress(){
        const {requestTransactionList, pageNumber,searchParams} = this.props;
        requestTransactionList(searchParams,pageNumber-1)
    }


    render() {
        const { loading, pageNumber,hasNext} = this.props;
        const prevDisabled = loading || pageNumber <=1;
        const nextDiasbled = loading || !hasNext;
        return (
            <InlineList align="right">
                <Button secondary disabled = {prevDisabled} onPress={this.handlePrevPress}>
                    이전
                </Button>
                <Button secondary disabled = {nextDiasbled} onPress={this.handleNextPress}>
                    다음
                </Button>
            </InlineList>
        );
    }
}

TransactionPagination.propTypes = {
    hasNext : PropTypes.bool,
    pageNumber : PropTypes.number,
    loading : PropTypes.bool,
    requestTransactionList : PropTypes.func.isRequired,
};

export default TransactionPagination;