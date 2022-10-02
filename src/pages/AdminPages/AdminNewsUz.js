import {useEffect} from 'react';
import AdminLayout from "../../components/AdminLayout";
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import {Formik} from "formik";
import {connect} from "react-redux";
import {getNewsUz, saveNewsUz, updateState} from "../../redux/actions/newsAction";
import {FaRegEdit} from "react-icons/fa";
import {MdDeleteForever} from "react-icons/md";

const AdminNewsUz = (props) => {
    useEffect(() => {
        props.getNewsUz();
    }, []);
    return (
        <AdminLayout>
            <div className="row">
                <div className="col-12">
                    <button type="button" className="btn btn-success ml-auto my-5 d-block" onClick={() => props.updateState({openUz: true})}>Yangilik qo'shish (Uz)</button>
                </div>
                <div className="col-12">
                    <table className="table table-striped table-hover">
                        <thead>
                        <tr>
                            <th>№</th>
                            <th>Sarlavha (Uz)</th>
                            <th>Matn (Uz)</th>
                            <th>Kategoriya (Uz)</th>
                            <th>Rasm</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.newsUz.map((item, index) => {
                            return (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.title.slice(0, 22)}</td>
                                    <td>{item.text.slice(0, 50)}</td>
                                    <td>{item.category}</td>
                                    <td>
                                        <img src={item.image_url} style={{width: "70px"}} alt={item.title}/>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-success"><FaRegEdit/></button>
                                        <button type="button" className="btn btn-danger ml-2"><MdDeleteForever/></button>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal isOpen={props.openUz} toggle={() => props.updateState({openUz: false})}>
                <ModalHeader>
                    <div>Yangilik qo'shish (Uz)</div>
                </ModalHeader>
                <Formik
                    initialValues={{ title: '', text: '', category: '' }}
                    onSubmit={(values ) => {
                        props.saveNewsUz(values);
                    }}
                >
                    {({
                          values,
                          handleChange,
                          handleSubmit,
                          isSubmitting,
                      }) => (
                        <form onSubmit={handleSubmit}>
                            <ModalBody>
                                <input
                                    type="text"
                                    name="title"
                                    className="form-control"
                                    placeholder="Title (Uz)"
                                    onChange={handleChange}
                                    value={values.title}
                                />
                                <textarea
                                    name="text"
                                    className="form-control mt-3"
                                    placeholder="Text (Uz)"
                                    onChange={handleChange}
                                    value={values.text}
                                />
                                <select
                                    name="category"
                                    className="form-control mt-3"
                                    onChange={handleChange}
                                    value={values.category}>
                                    <option>Choose category</option>
                                    <option value="latest">So'ngi yangiliklar</option>
                                    <option value="local">Mahalliy yangiliklar</option>
                                    <option value="global">Jahon yangiliklar</option>
                                    <option value="tech">Texnalogiya yangiliklar</option>
                                    <option value="sport">Sport yangiliklar</option>
                                    <option value="business">Biznes yangiliklar</option>
                                </select>
                            </ModalBody>
                            <ModalFooter>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn btn-success">Saqlash</button>
                                <button type="button" className="btn btn-secondary" onClick={() => props.updateState({openUz: false})}>Ortga</button>
                            </ModalFooter>
                        </form>
                    )}
                </Formik>
            </Modal>
        </AdminLayout>
    );
};

const mapStateToProps = (state) => {
    return {
        openUz: state.news.openUz,
        newsUz: state.news.newsUz,
    }
}

export default connect(mapStateToProps,
    {
        updateState,
        saveNewsUz,
        getNewsUz
    })(AdminNewsUz);