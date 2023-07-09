import React from "react";

const Details = ({ data, updated, open }) => {
  return (
    <>
      <div className="row ">
        <div className=" offset-2 col-md-4 " style={{ position: "absolute" }}>
          <div className="card bg-dark p-4 text-white">
            <i
              className="bi bi-x text-end x-icon"
              onClick={() => updated(!open)}
            />
            <h1 className="text-primary text-uppercase"> Details </h1>
            <div className="card-body">
              <form action="">
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <h5>
                      <span className="text-info">Title</span>:{" "}
                      <span>{data?.title}</span>
                    </h5>
                  </div>
                  <div className="d-flex">
                    <h5>
                      <span className="text-info">Id</span>:{" "}
                      <span className="text-uppercase">
                        {data?._id?.substring(0, 6)}
                      </span>
                    </h5>
                  </div>
                </div>
                <hr />
                <div className="my-3 text-start">
                  <h5 className="text-info">Description :</h5>
                  <p className="h6">{data?.description}</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
