import React, { useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserAction, getUserByIdAction } from '../../redux/Action/postAction';

const DeleteModal = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const id = props.id;
        dispatch(getUserByIdAction(id))
    }, [])

    const users = useSelector(state => state.data.user)
    // console.log('user', users)

    const onDelete = () => {
        const id = props.id;
        dispatch(deleteUserAction(id))
        props.onHide();
    }
    return (
        <React.Fragment>
            <Modal centered show={props.show} onHide={props.onHide}>
                <Modal.Body>
                    <h3 style={{ textAlign: 'center' }}>Are You Sure?</h3>
                    <p style={{ textAlign: 'center' }}>You want to delete
                        {users.fname} {users.lname}
                    </p>
                    <div className="Del-btn">
                        <button onClick={() => props.onHide()} className="btn btn-light">
                            No!
                        </button>
                        <button onClick={() => onDelete()} className="btn btn-danger">
                            Yes!
                        </button>
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
        ;
};

export default DeleteModal;
