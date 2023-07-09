import React, { useState } from "react";
import Axios from "../Axios";
import { toast } from "react-toastify";
import Layout from "../components/Layout";
const AddItem = () => {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post("/save", { title, description });
      if (res & res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Oops! something went wrong...");
    }
    setTitle("");
    setDesc("");
  };
  return (
    <Layout>
      <div className="row mt-5">
        <div className="col-4 mx-auto">
          <div className="card bg-light">
            <h1 className="my-3">Add Item</h1>
            <div className="card-body">
              <form action="" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    onChange={(e) => setTitle(e.target.value)}
                    name="title"
                    type="text"
                    value={title}
                    className="form-control"
                    id="title"
                    placeholder="Enter item title"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    value={description}
                    onChange={(e) => setDesc(e.target.value)}
                    className="form-control"
                    name="description"
                    id="description"
                    rows="3"
                    placeholder="Enter item details"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddItem;
