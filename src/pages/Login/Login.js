import React from 'react';
import './login.scss';
import {Formik} from "formik";
import {connect} from "react-redux";
import {login} from '../../redux/actions/loginAction';
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const navigate = useNavigate();
    return (
        <div className="container">
            <div className="row vh-100 justify-content-center align-items-center">
                <div className="card">
                    <div className="card-header">
                        <h3 className="text-center">Admin</h3>
                    </div>
                    <div className="card-body">
                        <Formik
                            initialValues={{ username: '', password: '' }}
                            onSubmit={(values ) => {
                                props.login(values, navigate);
                            }}
                        >
                            {({
                                  values,
                                  handleChange,
                                  handleSubmit,
                                  isSubmitting,
                              }) => (
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        name="username"
                                        className="form-control"
                                        placeholder="Username"
                                        onChange={handleChange}
                                        value={values.username}
                                    />
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control mt-3"
                                        placeholder="Password"
                                        onChange={handleChange}
                                        value={values.password}
                                    />
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn btn-success btn-block mt-3">Sign-in</button>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(null, {login})(Login);