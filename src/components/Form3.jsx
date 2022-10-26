import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Form3 = () => {

  const navigate = useNavigate();

  const onSubmit = () => {
    navigate("/form4");
  };


  return (
    <motion.div
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    exit={{ x: "100%" }}
  >
    <div className="container">
      <h3 className="text-center">How are you planning to use Eden</h3>
      <h6 className="text-secondary text-center my-1">
        We'll streamline your setup experience accordingly.
      </h6>
    </div>
    <div className="container d-flex justify-content-center">
      <div>
        <div className="mt-5">
          <form onSubmit={onSubmit}>
          <div className="row">
            <div className="col-12 col-md-6 responsiveDiv responsiveButton">
              <button className="squareButton btnForm3 target" type="button">
                <i className="fa-solid fa-user fs-3 mb-3"></i>
                <h5>For myself</h5>
                <p>Write better. Think more clearly. Stay organized</p>
              </button>
            </div>
            <div className="col-12 col-md-6 responsiveButton responsiveDiv">
              <button className="squareButton  btnForm3 target"  type="button" >
                <i className="fa-solid fa-users fs-3 mb-3"></i>
                <h5>With my team</h5>
                <p>Wikis, docs, tasks & projects, all in one place.</p>
              </button>
            </div>
          </div>
            <button className="btn my-3 w-100 text-light">Create Workspace</button>
          </form>
        </div>
      </div>
    </div>
  </motion.div>
  )
}
