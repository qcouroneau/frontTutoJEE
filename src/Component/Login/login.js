import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form, Input } from 'antd';
import "antd/dist/antd.css";

class Login extends React.Component {

    render() {
        const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
            const [form] = Form.useForm();
            return (
                <Modal
                    visible={visible}
                    title="Connexion"
                    okText="Connexion"
                    cancelText="Annuler"
                    onCancel={onCancel}
                    onOk={() => {
                        form
                            .validateFields()
                            .then((values) => {
                                form.resetFields();
                                onCreate(values);
                            })
                            .catch((info) => {
                                console.log('Connexion refusée:', info);
                            });
                    }}
                >
                    <Form
                        form={form}
                        layout="vertical"
                        name="form_in_modal"
                        initialValues={{
                            modifier: 'public',
                        }}
                    >
                        <Form.Item
                            name="Login"
                            label="Adresse Email ou nom d'utilisateur"
                            rules={[
                                {
                                    required: true,
                                    message: 'Entrez un nom d\'utilisateur!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item name="password" label="Mot de passe"
                            rules={[
                                {
                                    required: true,
                                    message: 'Entrez un mot de passe!',
                                },
                            ]}
                        >
                            <Input type="password" />
                        </Form.Item>
                    </Form>
                </Modal>
            );
        };

        const CollectionsPage = () => {
            const [visible, setVisible] = useState(false);

            const onCreate = (values) => {
                console.log('Valeur recus: ', values);
                setVisible(false);
            };

            return (
                <div>
                    <Button
                        type="primary"
                        onClick={() => {
                            setVisible(true);
                        }}
                    >
                        Login
            </Button>
                    <CollectionCreateForm
                        visible={visible}
                        onCreate={onCreate}
                        onCancel={() => {
                            setVisible(false);
                        }}
                    />
                </div>
            );
        };

        return (
        <div className="MainDiv">
            <div className="container">
                <CollectionsPage />
            </div>
      </div>
  );
}
}
export default Login;