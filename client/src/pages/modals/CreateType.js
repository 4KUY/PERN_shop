import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { createType } from '../../http/productAPI'

export const CreateType = ({ show, onHide }) => {
    const [value , setValue] = useState('')
    const addType = ()=>{
        createType({name: value}).then(data => {
            onHide()
            setValue('')
        })
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        placeholder='Ввудите название типа'
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                <Button variant='outline-success' onClick={addType}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
}
