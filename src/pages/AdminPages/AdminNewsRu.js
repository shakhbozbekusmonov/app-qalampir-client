import {useEffect} from 'react';
import AdminLayout from "../../components/AdminLayout";
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import {Formik} from "formik";
import {connect} from "react-redux";
import {
    deleteNewsRu,
    getNewsRu,
    saveNewsRu,
    updateState
} from "../../redux/actions/newsAction";
import {FaRegEdit} from "react-icons/fa";
import {MdDeleteForever} from "react-icons/md";

const AdminNewsRu = (props) => {
    useEffect(() => {
        props.getNewsRu();
    }, []);
    return (
        <AdminLayout>
            <div className="row">
                <div className="col-12">
                    <button type="button" className="btn btn-success ml-auto my-5 d-block" onClick={() => props.updateState({openRu: true})}>Yangilik qo'shish (Ru)</button>
                </div>
                <div className="col-12">
                    <table className="table table-striped table-hover">
                        <thead>
                        <tr>
                            <th>№</th>
                            <th>Sarlavha (Ru)</th>
                            <th>Matn (Ru)</th>
                            <th>Kategoriya (Ru)</th>
                            <th>Rasm</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.newsRu.map((item, index) => {
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
                                        <button type="button" className="btn btn-success" onClick={() => props.updateState({openRu: true, selectedItemRu: item})}><FaRegEdit/></button>
                                        <button type="button" className="btn btn-danger ml-2" onClick={() => props.updateState({deleteModalRu: true, selectedIndexRu: item.id})}><MdDeleteForever/></button>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal isOpen={props.openRu} toggle={() => props.updateState({openRu: false})}>
                <ModalHeader>
                    <div>Yangilik qo'shish (Ru)</div>
                </ModalHeader>
                <Formik
                    initialValues={{ title: '', text: '', category: '' }}
                    onSubmit={(values ) => {
                        props.saveNewsRu(values);
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
                                    placeholder="Title (Ru)"
                                    onChange={handleChange}
                                    value={values.title}
                                />
                                <textarea
                                    name="text"
                                    className="form-control mt-3"
                                    placeholder="Text (Ru)"
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
                                <button type="button" className="btn btn-secondary" onClick={() => props.updateState({openRu: false})}>Ortga</button>
                            </ModalFooter>
                        </form>
                    )}
                </Formik>
            </Modal>

            <Modal isOpen={props.deleteModalRu} toggle={() => props.updateState({deleteModalRu: false})}>
                <ModalHeader>
                    <div>Rostdan ham o'chirmoqchimisiz?</div>
                </ModalHeader>
                <ModalFooter>
                    <button type="button" className="btn btn-danger" onClick={props.deleteNewsRu}>Ha</button>
                    <button type="button" className="btn btn-secondary" onClick={() => props.updateState({deleteModalRu: false})}>Yo'q</button>
                </ModalFooter>
            </Modal>
        </AdminLayout>
    );
};

const mapStateToProps = (state) => {
    return {
        openRu: state.news.openRu,
        newsRu: state.news.newsRu,
        deleteModalRu: state.news.deleteModalRu,
        selectedIndexRu: state.news.selectedIndexRu,
        selectedItemRu: state.news.selectedItemRu,
    }
}

export default connect(mapStateToProps,
    {
        updateState,
        saveNewsRu,
        getNewsRu,
        deleteNewsRu,
    })(AdminNewsRu);