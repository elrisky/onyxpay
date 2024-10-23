const QuickService = ({ QuickItems }) => {
    
  return (
    <>
      <div className=" px-1 my-4 mb-3 bg-gray-200 rounded">
        <div className="row g-3">
          {QuickItems.map((item) => (
            <div className="col-4 col-sm-4 col-lg-3 py-3 m-0" key={item.id}>
              <div className="border-0">
                <a href={item.link} className="text-decoration-none text-reset">
                  <div className="card-body text-center p-0">
                    <div className="mb-2">
                      <div
                        className="icon-bg rounded d-flex justify-content-center align-items-center p-2 text-white mx-auto"
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor:"var(--bg-white)"
                        }}
                      >
                        <img
                          src={item.icon}
                          alt={`${item.title} icon`}
                          className="img-fluid"
                          style={{ width: "24px", height: "24px" }}
                        />
                      </div>
                    </div>
                    <h5
                      className="card-title fw-bold text-white text-truncate"
                      style={{ fontSize: "10px" }}
                    >
                      {item.title}
                    </h5>
                    <p
                      className="card-text text-muted d-none d-sm-block"
                      style={{ fontSize: "0.75rem" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default QuickService;