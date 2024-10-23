const Nohistory = ({description}) => {
    return (
      <>
        <div className="container my-4">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8">
              <div className="py-4 text-center">
                <span className="text-muted select-none fs-6">{description}</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
 
export default Nohistory