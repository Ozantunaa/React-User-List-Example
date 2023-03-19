import { LineWrapper } from './ScStyle'
import Modal from 'react-modal'

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      backgroundColor       : '#333333'  ,
    },
    overlay: {
        background: "#191919"
      }    
};

const Line = ({ user, removeItem, openModal, modalIsOpen, closeModal }) => {

    return (
        <LineWrapper>
            <div className='lineStyle'>
                <div className="wrapper">
                    <ul>{user.name}</ul>
                </div>
                <div className="wrapper">
                    <ul>{user.height}</ul>
                </div>
                <div className="wrapper">
                    <ul>{user.gender}</ul>
                </div>
                <div className="wrapper">
                    <button onClick={openModal}>Films</button>
                </div>
                <button onClick={() => removeItem(user.name)}>del</button>
            </div>
            <div style={{ background: '#252525', height: '1px' }}></div>
            <Modal style={customStyles} isOpen={modalIsOpen} ariaHideApp={false}>
                <button onClick={closeModal}>x</button>
                   
            </Modal>
        </LineWrapper>

    )
}

export default Line
