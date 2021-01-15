import {connect} from 'react-redux';
import Notification from '../components/main/Notification';

const mapStateToProps = state =>{
    console.log("알림 컨테이너 맵투프롭스")
    const {showMessage,message,warning} = state.notification;
    return {showMessage,message,warning};
}

export default connect(mapStateToProps)(Notification);