import React, { useState } from "react";
import { toast } from "react-toastify";
import Axios from "../Axios";

const Update = ({ data, openEditor, updated }) => {
  const [title, setTitle] = useState(data?.title);
  const [description, setDesc] = useState(data?.description);
  const handelUpdate = async (e) => {
    e.preventDefault();
    try {
      if (data._id) {
        const res = await Axios.put(`/update/${data._id}`, {
          title,
          description,
        });
        if (res && res.data.success) {
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      }
    } catch (error) {
      toast.error("Oops! Something went wrong...");
    }
  };
  return (
    <>
      <div className="row ">
        <div className=" offset-1 col-md-5 " style={{ position: "absolute" }}>
          <div className="card bg-dark p-4 text-white">
            <i
              className="bi bi-x text-end x-icon"
              onClick={() => updated(!openEditor)}
            />

            <h1
              className="text-primary "
              style={{ textDecoration: "underline" }}
            >
              Details{" "}
            </h1>
            <div className="card-body">
              <form action="" onSubmit={handelUpdate}>
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <h5 className="d-flex">
                      <span className="text-info ">Title</span>:{" "}
                      <input
                        className="ms-md-3"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </h5>
                  </div>
                  <div className="d-flex">
                    <h5>
                      <span className="text-info">Id</span>:{" "}
                      <span className="w-50 text-uppercase text-light bg-secondary">
                        {data?._id?.substring(0, 6)}
                      </span>
                    </h5>
                  </div>
                </div>
                <hr />
                <div className="my-3 text-start">
                  <h5 className="text-info">Description </h5>
                  <textarea
                    className="form-control"
                    onChange={(e) => setDesc(e.target.value)}
                    value={description}
                    rows="3"
                  />
                </div>
                <div>
                  <button type="submit" className="btn btn-success px-4">
                    <h5>Save</h5>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;
