import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import useFetch from "../Hooks/UseFetch";
import { toast } from "react-toastify";
import Details from "../components/Details";
import Axios from "../Axios";
import Update from "../components/Update";

const Home = () => {
  const [open, setopen] = useState(false);
  const [openEditor, setopenEditor] = useState(false);
  const [list, setlist] = useState({});
  const [alldata, setAlldata] = useState([]);
  const CustomId = "toastId";
  const { data, loading } = useFetch("/");
  const HandleView = async (id) => {
    try {
      if (id) {
        const res = await Axios.get(`/${id}`);
        if (res && res.data.success) {
          setlist(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      }
    } catch (error) {
      toast.error("opps! something went wrong...");
    }
    setopen(!open);
  };

  //edit
  const HandleEdit = async (id) => {
    try {
      if (id) {
        const res = await Axios.get(`/${id}`);
        if (res && res.data.success) {
          setlist(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      }
    } catch (error) {
      toast.error("opps! something went wrong...");
    }
    setopenEditor(!openEditor);
  };
  // delete
  const handleDelete = async (id) => {
    const ans = window.confirm("Are you sure this item delete");
    if (!ans) {
      return;
    }
    try {
      const res = await Axios.delete(`/delete/${id}`);
      if (res && res.data.success) {
        setAlldata(alldata.filter((item) => item._id !== id));
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  };
  useEffect(() => {
    setAlldata(data);
  }, [data]);
  console.log(openEditor);
  return (
    <>
      <Layout>
        <div className={open ? "" : "toggle"}>
          <Details data={list} open={open} updated={(e) => setopen(e)} />
        </div>
        <div className={openEditor ? "" : "d-none"}>
          <Update
            data={list}
            openEditor={openEditor}
            updated={(e) => setopenEditor(e)}
          />
        </div>
        <div className="my-4">
          <h1 className="text-center">Todos</h1>
          <div className="container-fluids">
            <div className="row">
              {loading ? (
                loading & toast.loading("Lodaing", { toastId: CustomId })
              ) : (
                <div className="col-md-10 mx-auto">
                  {toast.dismiss()}
                  <table className="table text-start">
                    <thead>
                      <tr>
                        <th scope="col">Serial Number</th>
                        <th scope="col">Title</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                        <th scope="col">View</th>
                      </tr>
                    </thead>
                    <tbody>
                      {alldata?.map((item, key) => (
                        <tr key={key}>
                          <th scope="row">{key + 1}</th>
                          <td>{item?.title}</td>
                          {/* <td>{item.description}</td> */}
                          <td>
                            <button
                              onClick={() => HandleEdit(item?._id)}
                              className="btn btn-primary"
                            >
                              Edit
                            </button>
                          </td>
                          <td>
                            <button
                              onClick={() => handleDelete(item?._id)}
                              className="btn btn-danger"
                            >
                              Delete
                            </button>
                          </td>
                          <td>
                            <button
                              onClick={() => HandleView(item?._id)}
                              className="btn btn-success"
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div>
                    <Link to="/add-item" className="btn py-2 px-4 btn-primary">
                      <h5> Add Item</h5>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
